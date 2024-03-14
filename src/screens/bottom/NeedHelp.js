import { View, Text, Image } from "react-native";
import React from "react";

const NeedHelp = () => {
  return (
    <View>
      <View
        style={{ flexDirection: "row", padding: 20, backgroundColor: "white" }}
      >
        <Image
          style={{ height: 20, width: 20, marginRight: 20 }}
          source={require("../../../assets/back.png")}
        />
        <Text style={{ fontSize: 16, fontWeight: 600 }}>
          Chat with AI Assistant
        </Text>
      </View>
      <View
        style={{
          width: "80%",
          borderRadius: 6,
          backgroundColor: "white",
          marginLeft: 10,
          marginTop: 10,
          elevation: 5,
          shadowColor: "grey",
          marginBottom: 10,
          padding: 10,
        }}
      >
        <Text style={{ fontWeight: 600 }}>
          Is there anything I can help you with for your upcoming booking?
        </Text>
        <Text style={{ fontWeight: 600, color: "#0483f6", marginTop: 10 }}>
          I am having trouble with my booking
        </Text>
        <Text style={{ fontWeight: 600, color: "#0483f6", marginTop: 10 }}>
          I want to modify my booking
        </Text>
        <Text style={{ fontWeight: 600, color: "#0483f6", marginTop: 10 }}>
          I want to cancel my booking
        </Text>
        <Text style={{ fontWeight: 600, color: "#0483f6", marginTop: 10 }}>
          I want more information about my hotel
        </Text>
      </View>
      <View
        style={{
          width: "80%",
          borderRadius: 6,
          backgroundColor: "white",
          marginRight: 10,
          marginTop: 10,
          elevation: 5,
          shadowColor: "grey",
          marginBottom: 10,
          padding: 10,
          alignSelf: "flex-end",
        }}
      >
        <Text style={{ fontWeight: 600 }}>
          I am having trouble with my booking
        </Text>
      </View>
      <View
        style={{
          width: "80%",
          borderRadius: 6,
          backgroundColor: "white",
          marginLeft: 10,
          marginTop: 10,
          elevation: 5,
          shadowColor: "grey",
          marginBottom: 10,
          padding: 10,
        }}
      >
        <Text style={{ fontWeight: 600, color: "grey" }}>
          Step:1 Go to our Home Page
        </Text>
        <Text style={{ fontWeight: 600, color: "grey", marginTop: 10 }}>
          Step:2 Go to Hotel section
        </Text>
        <Text style={{ fontWeight: 600, color: "grey", marginTop: 10 }}>
          Step:3 Choose your location
        </Text>
        <Text style={{ fontWeight: 600, color: "grey", marginTop: 10 }}>
          Step:4 Choose your desired hotel
        </Text>
        <Text style={{ fontWeight: 600, color: "grey", marginTop: 10 }}>
          Step:5 Now pay and Enjoy your stay with us
        </Text>
      </View>
    </View>
  );
};

export default NeedHelp;
