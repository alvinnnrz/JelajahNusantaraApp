import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
} from "react-native";

import { wisata } from "../data/wisata";
import DestinationCard from "../components/DestinationCard";

export default function DestinationScreen({ navigation }) {

  const [search, setSearch] = useState("");

  const filteredWisata = wisata.filter((item) =>
    item.nama.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>

      <Text style={styles.header}>
        Destinasi Wisata
      </Text>

      <TextInput
        placeholder="🔍 Cari wisata..."
        value={search}
        onChangeText={setSearch}
        style={styles.search}
      />

      <FlatList
        data={filteredWisata}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <DestinationCard
            item={item}
            navigation={navigation}
          />
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    padding:15,
    backgroundColor:"#F5F7FA"
  },

  header:{
    fontSize:28,
    fontWeight:"bold",
    color:"#0F4C81",
    marginTop:15,
    marginBottom:15
  },

  search:{
    backgroundColor:"white",
    padding:14,
    borderRadius:12,
    marginBottom:15,
    borderWidth:1,
    borderColor:"#ddd"
  }

});