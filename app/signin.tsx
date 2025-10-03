import {View, Text, TextInput,
  Image, StyleSheet, TouchableOpacity} from 'react-native';
import { useState, useEffect } from 'react';
import {useRouter} from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import{ auth} from '../firebase/firebaseConfig';
import { emailregex, passwordregex } from '@/components/regex';
import {useAuthRequest} from 'expo-auth-session/providers/google';

export default function Signin(){
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState("");
  const router = useRouter();

  const [request, response, promptAsync] = useAuthRequest({
    iosClientId: '324710914967-jjmjdq4iia0jrmsq8m6eluvius4h685j.apps.googleusercontent.com',
    androidClientId: '324710914967-b4fferamcdihsql6ct9hkolt4778rtgm.apps.googleusercontent.com',
    webClientId: '324710914967-1k6aeppu0ddffbris6v4k4o69jjaab02.apps.googleusercontent.com',
    redirectUri: "https://auth.expo.io/@ahmed100th/Future_Focus_Space",
  });

  useEffect(() => {
    const handleSignIn = async () =>{
      try{
      if(response?.type === 'success'){
      const { id_token } = response.params;
      const credentials = GoogleAuthProvider.credential(id_token);
      await signInWithCredential(auth, credentials);
      router.replace('/(tabs)/main');
    }
  } catch(error) {
        console.error('Firebase sign-in error:', error);
    }
  }
  handleSignIn();
},[response]);

  const handleGoogleSignIn = () =>{
    promptAsync();
  };

  const handleguest = () => {
    router.replace('/(tabs)/main')
  }
  const handlesignup = () =>{
    router.push('/signup')
  }
  const handlesignin = async () => {
    if(!email || !emailregex.test(email)){
      setError("Email is Incorrect, Check Your Credentials.")
      return;
    }
    if (!password){
      setError("Password is Incorrect, Check Your Credentials.")
      return;
    }
    else if(password.length < 8){
      setError("Password must be of length 8")
      return;
    }
    else if(!passwordregex.test(password)){
      setError("Password Must Contain Special Character, a Number and a Capital Letter")
      return;
    }
    try{
      await signInWithEmailAndPassword(auth, email, password)
      router.replace('/(tabs)/main')
    } catch(err){
      setError("Failed to Sign in, Check your credentials.");
    }
   
  }
    return(
        <View style={styles.container}>
            <Image source={require("../assets/images/Component2.png")} style={styles.focuslogo} />
            <Text style={styles.signtext}>Sign Into Your Account</Text>
              
          <View style={styles.textinputcontainer}>
            {error ? <Text style={{ color: 'darkred'}}>{error}</Text> : null}
        <View style={styles.firstinputcontainer}>
            <FontAwesome name='envelope' size={13} color={'#007582ff'}  style={styles.icons}/>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={'gray'}
            value={email}
            onChangeText={setEmail}
          />
          </View>
          <View style={styles.secondinputcontainer}>
            <FontAwesome name='lock' size={17} color={'#007582ff'} style={styles.icons} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={'gray'}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
          </View>
          </View>
          <TouchableOpacity onPress={handlesignin} style={[styles.button, {backgroundColor: '#007582ff', borderColor: '#007582ff', }]}>
            <Text style={styles.signin}>Sign In</Text>
          </TouchableOpacity>
          <Text style={{marginBottom: 30}}>Don't have an account? 
            <TouchableOpacity onPress={handlesignup}>
              <Text style={{color: '#007582ff', textDecorationLine: 'underline'}}> Sign Up</Text>
            </TouchableOpacity>
          </Text>
          <TouchableOpacity onPress={handleguest}>
            <Text style={{color: '#007582ff', textDecorationLine: 'underline'}}>
              Continue as a Guest
            </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.google} onPress={handleGoogleSignIn}>
            <FontAwesome name='google' size={21} color={'red'}/>
            <Text style={styles.signin}>Sign In with Google</Text>
          </TouchableOpacity> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'flex-start',
    gap: 20,
    },
    focuslogo: {
    width: "90%",
    height: undefined,
    aspectRatio: 1,
    resizeMode: "contain",
    },
     signtext: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "arial",
    textAlign: "center",
     },
     textinputcontainer:{
        width: '70%',
        gap: 10,
     },
     input: {
    backgroundColor: "white",
    borderRadius: 9,
    width: "90%",
    color: 'black'
  },
  firstinputcontainer:{
        flexDirection: 'row',
        borderWidth: 0.3,
        borderColor: "#19a0ae",
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: 'white',
        gap: 2,
  },
  secondinputcontainer:{
        flexDirection: 'row',
        borderWidth: 0.3,
        borderColor: "#19a0ae",
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: 'white'
  },
  icons:{
    marginLeft: 8
  },
  button: {
    backgroundColor: "#363636ff",
    borderRadius: 15,
    width: '50%',
    alignItems: "center",
    borderColor: "#363636ff",
    justifyContent: 'center',
    height: "4%",
  },
  signin: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  buttoncontainer:{
    flexDirection: 'row',
    gap: 10,
  },
  google:{
    flexDirection: 'row',
    backgroundColor: "#363636ff",
    borderRadius: 15,
    width: "50%",
    height: "4%",
    alignItems: "center",
    justifyContent: 'space-evenly',
  },
  signcontainer:{
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: "34%",
    height: '5%',
    marginTop: 50
  }, 

})