import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  Alert,
} from "react-native";

export default function DetailScreen({ route, navigation }) {
  const { wisata } = route.params;

  const bukaMaps = async () => {
    const url = `https://www.google.com/maps/search/${encodeURIComponent(
      wisata.nama
    )}`;

    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert("Error", "Google Maps tidak dapat dibuka.");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={wisata.gambar} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title}>{wisata.nama}</Text>

        <Text style={styles.location}>
          📍 {wisata.lokasi}
        </Text>

        <View style={styles.infoBox}>
          <Text style={styles.info}>⭐ Rating : {wisata.rating}</Text>
          <Text style={styles.info}>🎫 Tiket : {wisata.tiket}</Text>
          <Text style={styles.info}>🕒 Jam : {wisata.jam}</Text>
        </View>

        <Text style={styles.descTitle}>Deskripsi</Text>

        <Text style={styles.desc}>
          {wisata.deskripsi}
        </Text>

        <TouchableOpacity
          style={styles.mapsButton}
          onPress={bukaMaps}
        >
          <Text style={styles.buttonText}>
            📍 Buka di Google Maps
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>
            ← Kembali
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
  },

  image: {
    width: "100%",
    height: 260,
  },

  content: {
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0F4C81",
  },

  location: {
    fontSize: 17,
    marginTop: 8,
    color: "#666",
  },

  infoBox: {
    backgroundColor: "#FFFFFF",
    marginTop: 20,
    padding: 15,
    borderRadius: 12,
    elevation: 3,
  },

  info: {
    fontSize: 16,
    marginVertical: 5,
  },

  descTitle: {
    marginTop: 25,
    fontSize: 22,
    fontWeight: "bold",
    color: "#0F4C81",
  },

  desc: {
    marginTop: 10,
    fontSize: 16,
    lineHeight: 26,
    color: "#555",
    textAlign: "justify",
  },

  mapsButton: {
    marginTop: 30,
    backgroundColor: "#2E8B57",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  backButton: {
    marginTop: 15,
    backgroundColor: "#0F4C81",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 30,
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});