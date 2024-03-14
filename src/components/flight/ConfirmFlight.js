import { View, Text } from "react-native";
import React from "react";

const ConfirmFlight = () => {
  return (
    <View
      style={{
        paddingBottom: 10,
        width: "95%",
        borderRadius: 6,
        backgroundColor: "white",
        margin: 10,
        elevation: 5,
        shadowColor: "grey",
        alignSelf: "center",
        marginBottom:60
      }}
    >
      <Text
        style={{
          margin: 10,
          marginLeft: 20,
          marginRight: 40,
          color: "black",
          fontSize: 12,
        }}
      >
        By clicking on the continue button below to proceed with the booking, I
        confirm that I have read and accept the{" "}
        <Text style={{ color: "#2baeff" }}>Fare Rules</Text>, the{" "}
        <Text style={{ color: "#2baeff" }}>Privacy Policy</Text>, the{" "}
        <Text style={{ color: "#2baeff" }}>User Agreement</Text> and{" "}
        <Text style={{ color: "#2baeff" }}>Terms of Service</Text> of Sajilo
      </Text>
    </View>
  );
};

export default ConfirmFlight;
