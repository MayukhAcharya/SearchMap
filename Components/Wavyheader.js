import { View, Text } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";

export default function Wavyheader({ customstyles1 }) {
  return (
    <View style={customstyles1}>
      <View style={{ backgroundColor: "#1b03a3", height: 120 }}>
        <Svg
          height="120%"
          width="100%"
          viewBox="0 0 1440 320"
          style={{ position: "absolute", top: 90 }}
        >
          <Path
            fill="#1b03a3"
            d="M0,160L30,176C60,192,120,224,180,240C240,256,300,256,360,250.7C420,245,480,235,540,229.3C600,224,660,224,720,186.7C780,149,840,75,900,90.7C960,107,1020,213,1080,250.7C1140,288,1200,256,1260,218.7C1320,181,1380,139,1410,117.3L1440,96L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
          />
        </Svg>
      </View>
    </View>
  );
}
