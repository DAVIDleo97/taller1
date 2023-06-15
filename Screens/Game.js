import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Alert,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../Components/Config";
import Pato from "../Components/Pato";
import { db } from "../Components/Config";
import { ref, set } from "firebase/database";

export default function Game({ navigation }) {
  const [contador, setcontador] = useState(0);
  const [tiempo, settiempo] = useState(15);

  function contar() {
    setcontador(contador + 1);
  }

  useEffect(() => {
    const temporizador = setInterval(() => {
      settiempo((tiempoanterior) => {
        if (tiempoanterior == 1) {
          clearInterval(temporizador);
        }
        return tiempoanterior - 1;
      });
    }, 1000);
  }, []);

  useEffect(() => {
    if (tiempo == 0) {
      Alert.alert("GAME OVER!"+"\n"+ "La puntuacion es: "+ contador );
      settiempo(15);
      puntuacion()
      setcontador(0)
    }
  }, [tiempo]);

  const jugador= "demon"
  function puntuacion() {
    set(ref(db, "puntuacion/" + jugador), {
      nick: jugador,
      puntaje: contador,
    });
  }

  function logout() {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    signOut(auth)
      .then(() => {
        navigation.navigate("Login");
        // Sign-out successful.
      })
      .catch((error) => {
        Alert.alert("Error");
        // An error happened.
      });
  }


  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/Stage01.png")}
        resizeMode="cover"
        style={styles.fondo}
      >
        <View style={styles.view}>
          <Image
            style={styles.img}
            source={require("../assets/duck_hunt_logo.png")}
          />
          <Text style={{ left: 15, fontSize: 20 }}>{contador}</Text>

          <Text style={styles.tiempo}>{tiempo}</Text>
        </View>
        <TouchableOpacity style={styles.logout} onPress={logout}>
          <Text style={styles.logoutT}>salir</Text>
        </TouchableOpacity>
        <Pato presionar={contar} />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8080ff",
    alignItems: "center",
    justifyContent: "center",
  },
  fondo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  view: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  tiempo: {
    textAlign: "center",
    width: "100%",
    height: "100%",
    fontSize: 30,
    position: "absolute",
  },
  logout: {
    borderRadius: 10,
    width: "20%",
    height: "5%",
    backgroundColor: "#800000",
    right: 10,
    top: 10,
    position: "absolute",
  },
  logoutT: {
    textAlign: "center",
    fontSize: 20,
  },
  img: {
    height: 60,
    width: 60,
  },
});
