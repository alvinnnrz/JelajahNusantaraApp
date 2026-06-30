import { View, Text, StyleSheet } from "react-native";
import { useEffect } from "react";

export default function SplashScreen({ navigation }) {

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Login");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>🌄</Text>

      <Text style={styles.title}>
        Jelajah Nusantara
      </Text>

      <Text style={styles.subtitle}>
        Temukan Destinasi Wisata Indonesia
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#0F4C81"
  },

  logo:{
    fontSize:90,
    marginBottom:20
  },

  title:{
    color:"white",
    fontSize:30,
    fontWeight:"bold"
  },

  subtitle:{
    color:"#EAEAEA",
    marginTop:10,
    fontSize:16
  }

});