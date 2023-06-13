import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity,Alert } from 'react-native';
import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../Components/Config'

export default function Login({navigation}) {

  const [email, setemail] = useState('')
  const [pass, setpass] = useState('')

    function mensaje(){
        Alert.alert('Genial!')
      }

      function login(){

        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        signInWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
        // Signed in
          const user = userCredential.user;
          Alert.alert("Acceso Correcto")
          navigation.navigate('Game')
        // ...
        })
        .catch((error) => {
          Alert.alert("Acceso Incorrecto")
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    
      }


     return (
        <View style={styles.container}>
          
          <ImageBackground source={require('../assets/Stage01.png' )} resizeMode='cover' style={styles.fondo}>
              <Image 
              style={styles.imgUser} 
              source={require('../assets/title.png' )}
              />
              <TextInput
              style={styles.input} 
              placeholder='Correo'
              onChangeText={(text) => setemail(text)}
              
              />
              <TextInput 
              style={styles.input2} 
              placeholder='Contraseña'
              onChangeText={(text) => setpass(text)}
              />

              <TouchableOpacity>
                <Text style={styles.btnTxt}
                onPress={()=> navigation.navigate('CheckIn')}
                >Crear cuenta ahora</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnAcceder} onPress={login}>
                <Text
                style={styles.txtAccion}
                >Acceder</Text>
              </TouchableOpacity>
            </ImageBackground>
            <StatusBar style= 'auto' />
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#8080ff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      fondo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
      },
      fono2:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 350,
        height: 500,
      },
      imgUser:{
        top: -150,
        width: 400,
        height: 70,
      },
      input:{
        backgroundColor: '#c0c0c0',
        width: 300,
        height: 50,
        top: -110,
        fontSize: 25,
        paddingHorizontal: 20,
        borderRadius: 10
      },
      input2:{
        backgroundColor: '#c0c0c0',
        width: 300,
        height: 50,
        top: -80,
        fontSize: 25,
        paddingHorizontal: 20,
        borderRadius: 10
      },
      imgIconos:{
        top: 232,
        left: 310, 
        width: 30,
        height: 30,
        position: 'absolute'
      },
      imgIconos2:{
        top: 310,
        left: 310, 
        width: 25,
        height: 30,
        position: 'absolute'
      },
      btnTxt: {
        fontSize: 25,
        marginLeft: 110,
        top: -25,
        color: '#313131'
      },
      btnAcceder:{
        backgroundColor: 'red',
        width: 200,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        top: 20
      },
      txtAccion:{
        color: '#d1d1d1',
        fontSize: 30
      },
      
    
    });