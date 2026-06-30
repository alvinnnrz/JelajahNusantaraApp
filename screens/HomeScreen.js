import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
} from "react-native";

export default function HomeScreen({ route }) {
  const username = route.params?.username || "Pengguna";

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>🌄 Jelajah Nusantara</Text>
        <Text style={styles.subtitle}>
          Selamat datang, {username}
        </Text>
      </View>

      {/* Statistik */}
      <View style={styles.row}>
        <View style={styles.card}>
          <Text style={styles.number}>6</Text>
          <Text style={styles.label}>Destinasi</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.number}>4.8</Text>
          <Text style={styles.label}>Rating</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.card}>
          <Text style={styles.number}>6</Text>
          <Text style={styles.label}>Provinsi</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.number}>1200+</Text>
          <Text style={styles.label}>Pengunjung</Text>
        </View>
      </View>

      {/* Tentang */}
      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>Tentang Aplikasi</Text>

        <Text style={styles.infoText}>
          Jelajah Nusantara merupakan aplikasi wisata sederhana yang
          menampilkan berbagai destinasi wisata populer di Indonesia.
          Pengguna dapat melihat informasi destinasi, harga tiket,
          jam operasional, lokasi, dan deskripsi setiap tempat wisata.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
  },

  header: {
    backgroundColor: "#0F4C81",
    padding: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
  },

  subtitle: {
    color: "#FFFFFF",
    marginTop: 8,
    fontSize: 16,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },

  card: {
    width: "42%",
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    elevation: 4,
  },

  number: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#0F4C81",
  },

  label: {
    marginTop: 10,
    color: "#666",
    fontSize: 16,
  },

  infoCard: {
    backgroundColor: "#FFFFFF",
    margin: 20,
    padding: 20,
    borderRadius: 15,
    elevation: 4,
  },

  infoTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0F4C81",
    marginBottom: 10,
  },

  infoText: {
    fontSize: 16,
    color: "#555",
    lineHeight: 24,
    textAlign: "justify",
  },
});