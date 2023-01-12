import { View, Text, StyleSheet, Dimensions } from "react-native";
import React, { useEffect } from "react";
import Wavyheader from "../Components/Wavyheader";

const { height, width } = Dimensions.get("window");

export default function Map({ route }) {
  return (
    <View style={styles.container}>
      <Wavyheader customstyles1={styles.svgCurve} />
      <Text style={styles.address}>{route.params.paramKey}</Text>
      <Text style={styles.address}>Latitude :{route.params.lati}</Text>
      <Text style={styles.address}>Longitude :{route.params.long}</Text>
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
    bottom: width + 320,
  },
  address: {
    width: 300,
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    bottom: 190,
  },
});
