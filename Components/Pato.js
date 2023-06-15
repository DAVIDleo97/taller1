import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";

export default function Pato(prop) {

  const [posicion, setposicion] = useState({ x: 0, y: 100 });
  const [contador, setcontador] = useState(0)

  function moverPato() {
    const MAX_X = 350;
    const MAX_Y = 700;

    const randomX = Math.floor(Math.random() * MAX_X);
    const randomY = Math.floor(Math.random() * MAX_Y);

    setposicion({ x: randomX, y: randomY });
  }

  useEffect(() => {
    const interval = setInterval(() => {
      moverPato();
    }, 1000);
  }, []);

  function compuesta(){
    moverPato()
    prop.presionar()
  }

  return (
    <View style={{ top: posicion.y, left: posicion.x, position: "absolute" }}>
      <TouchableOpacity onPress={() => compuesta()}>
        <Image source={require("../assets/duck.png")} style={styles.img} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 90,
    height: 90,
  },
});
