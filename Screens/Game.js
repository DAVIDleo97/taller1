import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity,Alert } from 'react-native';
import React, { useState } from 'react';

export default function Login({navigation}) {

    function mensaje(){
        Alert.alert('Genial!')
      }


     return (
        <View style={styles.container}>
          
          <ImageBackground source={require('../assets/Stage01.png' )} resizeMode='cover' style={styles.fondo}>
            <View style={styles.view}>
              <Image style={styles.img}
              source={require('../assets/duck_hunt_logo.png')}
              />
              <Text style={{left: 15, fontSize: 20}}>
                0
              </Text>
              <Text style={styles.tiempo}>
                Tiempo
              </Text>
            </View>
            <Image source={require('../assets/duck.png')} style={{position: 'absolute', width: 100, height: 100}}/>
            
          </ImageBackground>
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
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
      },
      view:{
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '100%',
        height: '100%'
      },
      tiempo:{
        top: -50,
        textAlign: 'center',
        width: '100%',
        height: '100%',
        fontSize: 20
      },
      img:{
        height: 40,
        width: 40,
      }
    });