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
import React, { useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../Components/Config";

export default function Juego({ navigation }) {
    function mensaje() {
        Alert.alert("Genial!");
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
        <View>
            <Text>Juego</Text>
            <Button
                title="LogOut"
                onPress={logout}
            />
        </View>
    );
}
