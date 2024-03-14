import { View, Text, Image } from "react-native";
import React from "react";

const FeaturesDisplay = () => {
  return (
    <View
      style={{
        height: 100,
        width: 100,
        borderWidth: 2,
        borderColor: "#f1f1f1",
        padding: 10,
        backgroundColor: "#f7f7f7",
        borderRadius: 6,
        marginBottom: 10,
        paddingBottom: 30,
        marginTop:10,
        marginRight:10
      }}
    >
      <Image
        source={require("../../images/luggage5.png")}
        style={{ width: 20, height: 20, marginBottom: 5 }}
      />
      <Text style={{ fontSize: 12, fontWeight: 700, color: "#000000" }}>
        Lost baggage Assistance
      </Text>
      <View style={{ flexDirection: "row" , alignItems:'center'}}>
        <Text style={{ fontSize: 16, fontWeight: 700, color: "#268c7f" }}>
          24x7
        </Text>
        <Text style={{  fontSize: 12, fontWeight: 500, color: "#7c7c7c", marginLeft:3}}>
          support
        </Text>
      </View>
    </View>
  );
};

export default FeaturesDisplay;
