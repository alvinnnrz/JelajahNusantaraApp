import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    if (username === "" || password === "") {
      Alert.alert("Peringatan", "Username dan Password harus diisi!");
      return;
    }

    navigation.replace("Main", {
      username: username,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>🌄</Text>

      <Text style={styles.title}>Jelajah Nusantara</Text>

      <Text style={styles.subtitle}>
        Jelajahi Keindahan Wisata Indonesia
      </Text>

      <TextInput
        placeholder="Username"
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={login}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 30,
    backgroundColor: "#F5F7FA",
  },

  logo: {
    fontSize: 80,
    textAlign: "center",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#0F4C81",
    marginTop: 15,
  },

  subtitle: {
    textAlign: "center",
    color: "gray",
    marginBottom: 40,
  },

  input: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd",
  },

  button: {
    backgroundColor: "#0F4C81",
    padding: 16,
    borderRadius: 12,
    marginTop: 10,
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
});