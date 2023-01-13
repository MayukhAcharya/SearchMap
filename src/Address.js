import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import { TextInput } from "react-native-paper";
import Wavyheader from "../Components/Wavyheader";
import WavyFooter from "../Components/WavyFooter";
import { API_TOKEN } from "@env";
import axios from "axios";

const { height, width } = Dimensions.get("window");

export default function Address({ navigation }) {
  const [address, SetAddress] = useState("");
  const [latitude, SetLatitude] = useState("");
  const [longitude, setLonitude] = useState("");

  const LatLong = (address) => {
    axios({
      method: "get",
      url: `https://geocode.search.hereapi.com/v1/geocode?q=${address}&apiKey=${API_TOKEN}`,
    })
      .then((response) => {
        SetLatitude(response.data.items[0].position.lat);
        setLonitude(response.data.items[0].position.lng);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      {/* <Image
        style={styles.image}
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-gSgg18O0gSRw53rfhfZyepJ_lqMz1upNNA&usqp=CAU",
        }}
      /> */}
      <Wavyheader customstyles1={styles.svgCurve} />
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Hello There</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.AddressText}>Enter An Address</Text>
        <TextInput
          label="Address"
          //value={address}
          style={styles.address}
          mode="outlined"
          outlineColor="white"
          activeOutlineColor="black"
          left={<TextInput.Icon icon="home" />}
          theme={{ roundness: 15 }}
          onSubmitEditing={(value) => SetAddress(value.nativeEvent.text)}
          //onChangeText={LatLong(address)}
        />
        <TouchableOpacity
          style={styles.Btn}
          onPress={LatLong(address)}
          onPressIn={() =>
            navigation.navigate("map", {
              paramKey: address,
              lati: latitude,
              long: longitude,
            })
          }
        >
          <Text style={styles.BtnText}>Let's Go</Text>
        </TouchableOpacity>
      </View>
      <WavyFooter customstyles2={styles.svgCurve} />
      <StatusBar animated={false} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: -45,
  },
  address: {
    position: "relative",
    width: width - 90,
    //height: 50,
    backgroundColor: "white",
    elevation: 60,
    borderRadius: 60,
    top: width / 1.51,
    alignContent: "center",
  },
  // image: {
  //   width: 400,
  //   height: 250,
  //   position: "absolute",
  //   top: 0,
  //   bott
  // },
  headerContainer: {
    marginTop: 50,
    marginHorizontal: 10,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginTop: 35,
    left: -1,
    bottom: width / 24,
  },
  svgCurve: {
    position: "absolute",
    width: Dimensions.get("window").width,
  },
  svgfooter: {
    position: "absolute",
  },
  AddressText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    top: width / 2,
    textAlign: "center",
  },
  BtnText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  Btn: {
    width: width / 2.5,
    height: height / 13.9,
    top: width / 1.16,
    backgroundColor: "#1b03a3",
    justifyContent: "center",
    borderRadius: 20,
  },
});
