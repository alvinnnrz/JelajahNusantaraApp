import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function DestinationCard({ item, navigation }) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate("Detail", {
          wisata: item,
        })
      }
    >
      <Image source={item.gambar} style={styles.image} />

      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>{item.nama}</Text>

          <Ionicons
            name="heart-outline"
            size={26}
            color="red"
          />
        </View>

        <Text style={styles.location}>
          📍 {item.lokasi}
        </Text>

        <Text style={styles.rating}>
          ⭐ {item.rating}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    marginBottom: 18,
    borderRadius: 15,
    overflow: "hidden",
    elevation: 5,
  },

  image: {
    width: "100%",
    height: 180,
  },

  content: {
    padding: 15,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0F4C81",
    flex: 1,
    marginRight: 10,
  },

  location: {
    marginTop: 8,
    color: "#666",
    fontSize: 15,
  },

  rating: {
    marginTop: 6,
    color: "#E67E22",
    fontWeight: "bold",
    fontSize: 16,
  },
});