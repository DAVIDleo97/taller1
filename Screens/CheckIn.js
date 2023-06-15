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
} from "react-native";
import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../Components/Config";
import { db } from "../Components/Config";
import { ref, set } from "firebase/database";

export default function CheckIn({ navigation }) {
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");

  function registrar() {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        guardar(email, name, phone);
        Alert.alert("Registro Correcto");
        navigation.navigate("Login");
        
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert("Error en el registro");
      });
  }

  function guardar(email, nick, telefono) {
    set(ref(db, "jugadores/" + nick), {
      email: email,
      nick: nick,
      phone: telefono,
    });
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/Stage01.png")}
        resizeMode="cover"
        style={styles.fondo}
      >
        <Image style={styles.imgUser} source={require("../assets/title.png")} />
        <TextInput
          style={styles.input}
          placeholder="Correo"
          onChangeText={(text) => setemail(text)}
        />
        <TextInput
          style={styles.input2}
          placeholder="Contraseña"
          onChangeText={(text) => setpass(text)}
        />
        <TextInput
          style={styles.input3}
          placeholder="Usuario"
          onChangeText={(text) => setname(text)}
        />
        <TextInput
          type
          style={styles.input4}
          placeholder="Telefono"
          onChangeText={(text) => setphone(text)}
          keyboardType="numeric"
        />
        <TouchableOpacity>
          <Text
            style={styles.btnTxt}
            onPress={() => navigation.navigate("Login")}
          >
            Ya tengo una cuenta
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnAcceder} onPress={registrar}>
          <Text style={styles.txtAccion}>Registrarse</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
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
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  fono2: {
    justifyContent: "center",
    alignItems: "center",
    width: 350,
    height: 500,
  },
  imgUser: {
    top: -140,
    width: 400,
    height: 80,
  },
  input: {
    backgroundColor: "#c0c0c0",
    width: 300,
    height: 50,
    top: -90,
    fontSize: 25,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  input2: {
    backgroundColor: "#c0c0c0",
    width: 300,
    height: 50,
    top: -70,
    fontSize: 25,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  input3: {
    backgroundColor: "#c0c0c0",
    width: 300,
    height: 50,
    top: -50,
    fontSize: 25,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  input4: {
    backgroundColor: "#c0c0c0",
    width: 300,
    height: 50,
    top: -30,
    fontSize: 25,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  imgIconos: {
    top: 210,
    left: 310,
    width: 30,
    height: 30,
    position: "absolute",
  },
  imgIconos2: {
    top: 280,
    left: 310,
    width: 25,
    height: 30,
    position: "absolute",
  },
  imgIconos3: {
    top: 355,
    left: 310,
    width: 25,
    height: 30,
    position: "absolute",
  },
  imgIconos4: {
    top: 420,
    left: 310,
    width: 25,
    height: 30,
    position: "absolute",
  },
  btnTxt: {
    fontSize: 20,
    marginLeft: 110,
    top: 0,
    color: "#313131",
  },
  btnAcceder: {
    backgroundColor: "red",
    width: 200,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    top: 50,
  },
  txtAccion: {
    color: "#d1d1d1",
    fontSize: 30,
  },
});
