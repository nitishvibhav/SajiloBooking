import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";

const ForgotPassword = () => {
  return (
    <View style={{ backgroundColor: "white", height: "100%", width: "100%" }}>
      <Image
        source={require("../../../assets/Reset.png")}
        style={{
          height: 220,
          width: 230,
          resizeMode: "contain",
          alignSelf: "center",
          marginTop: 50,
        }}
      />

      <Text
        style={{
          marginTop: 30,
          marginHorizontal: 20,
          fontSize: 16,
          fontWeight: 500,
        }}
      >
        Reset Password
      </Text>

      <TextInput
        placeholder="Password"
        style={{
          width: "90%",
          backgroundColor: "#ebedf0",
          alignSelf: "center",
          marginTop: 10,
          borderRadius: 6,
          paddingVertical: 10,
          paddingHorizontal: 20,
        }}
      />
      <TextInput
        placeholder="Confirm Password"
        style={{
          width: "90%",
          backgroundColor: "#ebedf0",
          alignSelf: "center",
          marginTop: 20,
          borderRadius: 6,
          paddingVertical: 10,
          paddingHorizontal: 20,
        }}
      />
      <TouchableOpacity
        style={{
          marginTop: 30,
          width: "90%",
          borderRadius: 6,
          paddingVertical: 10,
          flexDirection: "row",
          alignSelf: "center",
          justifyContent: "center",
          backgroundColor: "#2D4990",
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: "#fefe",
            alignSelf: "center",
            fontWeight: "600",
          }}
        >
          Confirm
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPassword;
