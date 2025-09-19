import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {auth} from '../../firebase/firebaseConfig';
import { signOut } from 'firebase/auth';
import { useRouter } from 'expo-router';

export default function MainScreen() {

    const router = useRouter();
    const handlelogout = async () =>{
        try{
            await signOut(auth)
            router.replace('../signin')
        } catch(err){
            console.error(err)
        }
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={handlelogout}>
                <Text style={styles.signin}>Log out</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    signin: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  button:{
    backgroundColor: "#007582ff",
    borderRadius: 15,
    width: '40%',
    alignItems: "center",
    borderColor: "#363636ff",
    justifyContent: 'center',
    height: "4%",
  }

});