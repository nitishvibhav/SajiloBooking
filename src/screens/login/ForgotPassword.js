import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import CustomButton from "../../components/CustomButton";

const ForgotPassword = () => {
  return (
    <View style={{ backgroundColor: "white", height: "100%", width: "100%" }}>
      <Image
        source={require("../../../assets/login_app.png")}
        style={{
          height: 320,
          width: 330,
          resizeMode: "contain",
          alignSelf: "center",
          marginTop: 50,
        }}
      />
      <View style={{width:'90%', alignSelf:'center'}}>
      <Text
        style={{
          marginTop: 30,
          
          fontSize: 16,
          fontWeight: 500,
          color:'#000'
        }}
      >
        Reset Password
      </Text>
      </View>

      <TextInput
        placeholder="Password"
        style={{
          width: "90%",
          backgroundColor: "#eef3ef",
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
          backgroundColor: "#eef3ef",
          alignSelf: "center",
          marginTop: 20,
          borderRadius: 6,
          paddingVertical: 10,
          paddingHorizontal: 20,
        }}
      />
      <CustomButton title="Confirm" width='90%' />
    </View>
  );
};

export default ForgotPassword;
