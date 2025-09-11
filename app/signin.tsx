import {View, Text, TextInput,
  Image, StyleSheet, TouchableOpacity} from 'react-native';
import { useState } from 'react';
import {useRouter} from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

export default function Signin(){
  const [password, setPassword] = useState<string>("");
  const [userData, setUserData] = useState<any>(null);
  const [email, setEmail] = useState<string>("");
  const router = useRouter();

  const handleguest = () => {
    router.replace('/(tabs)/main')
  }
  const handlesignup = () =>{
    router.push('/signup')
  }
    return(
        <View style={styles.container}>
            <Image source={require("../assets/images/Component2.png")} style={styles.focuslogo} />
            <Text style={styles.signtext}>Sign Into Your Account</Text>
          <View style={styles.textinputcontainer}>
        <View style={styles.firstinputcontainer}>
            <FontAwesome name='envelope' size={13} color={'#007582ff'}  style={styles.icons}/>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          </View>
          <View style={styles.secondinputcontainer}>
            <FontAwesome name='lock' size={17} color={'#007582ff'} style={styles.icons} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
          </View>
          </View>
          <View style={styles.signcontainer}>
          <View style={styles.buttoncontainer}>
          <TouchableOpacity style={[styles.button, {backgroundColor: '#007582ff', borderColor: '#007582ff', }]}>
            <Text style={styles.signin}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handlesignup}>
            <Text style={styles.signin}>Sign Up</Text>
          </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.guest} onPress={handleguest}>
            <Text style={styles.signin}>Continue as a guest</Text>
          </TouchableOpacity>
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'flex-start',
    gap: 25
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
    borderRadius: 5,
    width: '100%',
    alignItems: "center",
    borderColor: "#363636ff",
    justifyContent: 'center',
    height: "100%"
  },
  signin: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  buttoncontainer:{
    flexDirection: 'row',
    gap: 10
  },
  guest:{
    backgroundColor: "#363636ff",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: 'center',
    width: "130%",
    height: "75%"
  },
  signcontainer:{
    gap: 25,
    justifyContent: 'center',
    alignItems: 'center',
    width: "34%",
    height: '5%',
    marginTop: 30
  }
})