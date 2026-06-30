import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.logo}>
        🌄
      </Text>

      <Text style={styles.title}>
        Jelajah Nusantara
      </Text>

      <Text style={styles.version}>
        Versi 1.0
      </Text>

      <View style={styles.card}>

        <Text style={styles.item}>
          👨‍💻 Pembuat
        </Text>

        <Text style={styles.value}>
          Muhammad Rizky A
        </Text>

        <Text style={styles.item}>
          📚 Framework
        </Text>

        <Text style={styles.value}>
          React Native + Expo
        </Text>

        <Text style={styles.item}>
          📱 Mata Kuliah
        </Text>

        <Text style={styles.value}>
          Pemrograman Mobile
        </Text>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#F5F7FA",
    padding:20
  },

  logo:{
    fontSize:80
  },

  title:{
    fontSize:30,
    fontWeight:"bold",
    color:"#0F4C81",
    marginTop:10
  },

  version:{
    color:"gray",
    marginBottom:30
  },

  card:{
    width:"100%",
    backgroundColor:"white",
    borderRadius:15,
    padding:20,
    elevation:5
  },

  item:{
    fontSize:18,
    fontWeight:"bold",
    marginTop:15
  },

  value:{
    fontSize:17,
    color:"#666",
    marginTop:5
  }

});