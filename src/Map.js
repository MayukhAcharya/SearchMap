import { View, Text, StyleSheet, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import Wavyheader from "../Components/Wavyheader";
import MapView, { Marker } from "react-native-maps";

const { height, width } = Dimensions.get("window");

export default function Map({ route }) {
  const [mapRegion, setmapRegion] = useState({
    latitude: route.params.lati,
    longitude: route.params.long,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  return (
    <View style={styles.container}>
      <Wavyheader customstyles1={styles.svgCurve} />
      <Text style={styles.address}>Your Searched Place</Text>

      <MapView style={styles.map} region={mapRegion}>
        <Marker coordinate={mapRegion} title="Marker" />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  svgCurve: {
    position: "absolute",
    width: width,
    bottom: width + 360,
  },
  address: {
    width: 300,
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    top: -60,
  },
  map: {
    width: "100%",
    height: "75%",
    top: 40,
  },
});
