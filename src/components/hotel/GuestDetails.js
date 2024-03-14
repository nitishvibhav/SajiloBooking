import { View, Text, Image, TextInput } from "react-native";
import React from "react";

const GuestDetails = () => {
  return (
    <View
      style={{
        width: "95%",
        borderRadius: 6,
        backgroundColor: "white",
        alignSelf: "center",
        marginTop: 10,
        elevation: 5,
        shadowColor: "grey",
        marginBottom: 10,
        paddingBottom: 10,
      }}
    >
      <Text
        style={{ marginLeft: 10, fontSize: 18, fontWeight: 700, marginTop: 10 }}
      >
        I am booking for
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 10,
          marginTop: 10,
        }}
      >
        <Image
          source={require("../../images/selected.png")}
          style={{
            height: 20,
            width: 20,
            resizeMode: "contain",
            tintColor: "#4b4b4b",
            marginRight: 5,
          }}
        />
        <Text style={{ marginRight: 10, color: "#4b4b4b", fontWeight: 500 }}>
          Myself
        </Text>
        <Image
          source={require("../../images/non-selected.png")}
          style={{
            height: 20,
            width: 20,
            resizeMode: "contain",
            marginRight: 5,
            tintColor: "#4b4b4b",
          }}
        />
        <Text style={{ color: "#4b4b4b", fontWeight: 500 }}>Someone Else</Text>
      </View>
      <View
        style={{
          marginHorizontal: 10,
          backgroundColor: "#f6f6f6",
          borderColor: "#d8d8d8",
          borderWidth: 1,
          borderRadius: 6,
          marginVertical:10, 
          paddingHorizontal:10,
          paddingVertical:5
        }}
      >
        <TextInput  placeholder="FULL NAME" style={{color:'#3f3f3f',}}/>
      </View>
      <View
        style={{
          marginHorizontal: 10,
          backgroundColor: "#f6f6f6",
          borderColor: "#d8d8d8",
          borderWidth: 1,
          borderRadius: 6,
          paddingHorizontal:10,
          paddingVertical:5
        }}
      >
        <TextInput  placeholder="EMAIL ID" style={{color:'#3f3f3f',}}/>
      </View>
      <View
        style={{
          marginHorizontal: 10,
          backgroundColor: "#f6f6f6",
          borderColor: "#d8d8d8",
          borderWidth: 1,
          borderRadius: 6,
          marginVertical:10, 
          paddingHorizontal:10,
          paddingVertical:5
        }}
      >
        <TextInput  placeholder="CONTACT NO."/>
      </View>
    
      <View
        style={{
          flexDirection: "row",
          marginLeft: 10,
          marginBottom: 10,
          marginTop: 10,
        }}
      >
        <Image
          source={require("../../images/unchecked3.png")}
          style={{
            height: 20,
            width: 20,
            resizeMode: "contain",
            marginRight: 10,
            tintColor: "#a1a1a1",
          }}
        />
        <Text style={{ color: "#151515", fontWeight: 600 }}>
          I have a GST number
          <Text style={{ color: "#9b9b9b", fontWeight: 600 }}> (Optional)</Text>
        </Text>
      </View>
      <Text
        style={{
          marginHorizontal: 10,
          color: "#1581bf",
          fontWeight: 700,
          fontSize: 16,
        }}
      >
        Add Other Guests
      </Text>
    </View>
  );
};

export default GuestDetails;
