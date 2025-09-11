import {useRouter} from 'expo-router';
import {useState} from 'react';
import { FontAwesome } from '@expo/vector-icons';
import {View, Text, StyleSheet, TouchableOpacity, Image, TextInput} from 'react-native';

export default function Signin(){

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    return(
        <View style={styles.container}>
            <Image source={require("../assets/images/Component2.png")} style={styles.focuslogo} />
            <Text style={styles.signtext}>Sign up for a new account</Text>
          <View style={styles.textinputcontainer}>


            <View style={styles.nameinput}>
            <View style={styles.username}>
            <FontAwesome name='user' size={13} color={'#007582ff'}  style={styles.icons}/>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
          </View>
          
          </View>


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
          <TouchableOpacity style={styles.button}>
            <Text style={styles.signin}>Sign Up</Text>
          </TouchableOpacity>
          </View>
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
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
    backgroundColor: "#007582ff",
    borderRadius: 15,
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
    gap: 59
  },

  signcontainer:{
    gap: 25,
    justifyContent: 'center',
    alignItems: 'center',
    width: "40%",
    height: "5%"
  },
  nameinput:{
    flexDirection: 'row',
    gap: 10,
  },
  username:{
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.3,
    borderColor: "#19a0ae",
    borderRadius: 10,
    backgroundColor: 'white',
    width: '100%',
    resizeMode: 'contain',
  }

})