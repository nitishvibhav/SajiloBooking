import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import FeaturesDisplay from "./FeaturesDisplay";
import TripSecureComment from "./TripSecureComment";

const TripSecure = () => {
  return (
    <View
      style={{
        width: "95%",
        borderRadius: 6,
        backgroundColor: "white",
        margin: 10,
        elevation: 5,
        shadowColor: "grey",
        alignSelf: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 10,
          alignItems: "center",
          marginLeft: 20,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../../images/encrypted.png")}
            style={{ height: 30, width: 30 }}
          />
          <Text style={{ fontSize: 18, fontWeight: 700, marginLeft: 20 }}>
            Trip Secure
          </Text>
        </View>
        <Image
          source={require("../../images/insurancerel.png")}
          style={{
            height: 40,
            width: 30,
            resizeMode: "contain",
            marginRight: 20,
          }}
        />
      </View>
      <View
        style={{
          borderBottomColor: "grey",
          borderBottomWidth: 1,
          marginLeft: 20,
          marginRight: 20,
        }}
      />
      <View style={{ marginLeft: 20, marginTop: 10 }}>
        <Text style={{ fontSize: 16, color: "grey", fontWeight: 600 }}>
          Display Features
        </Text>
        <View style={{ height: 120, width: "95%" }}>
          <ScrollView horizontal>
            <FeaturesDisplay />
            <FeaturesDisplay />
            <FeaturesDisplay />
          </ScrollView>
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#f4f4f4",
          width: "90%",
          alignSelf: "center",
          marginBottom: 10,
          alignItems: "center",
          justifyContent: "center",
          padding: 5,
          borderRadius: 6,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: 600, color: "#28afff" }}>
          View All Benefits
        </Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 14, fontWeight: 600, marginLeft: 20 }}>
        Preffered by millions of travellers
      </Text>
      <ScrollView horizontal style={{ width: "90%", alignSelf: "center" }}>
        <TripSecureComment />
        <TripSecureComment />
      </ScrollView>
      <Text
        style={{
          fontSize: 18,
          fontWeight: 600,
          color: "#000000",
          marginLeft: 20,
          marginBottom: 10,
        }}
      >
      ₹ 264
        <Text style={{ fontSize: 12, fontWeight: 400, color: "#4f4f4f" }}>
          /per person
        </Text>
      </Text>
      <View
        style={{
          width: "90%",
          alignSelf: "center",
          height: 80,
        
          borderRadius: 6,
          justifyContent: "space-around",
          marginBottom: 10,
          backgroundColor:'#f7f7f7',
          elevation:1
         
        }}
      >
        <View
          style={{
            flexDirection: "row",
            height: "50%",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../images/non-selected.png")}
            style={{
              height: 20,
              width: 20,
              tintColor: "grey",
              marginRight: 10,
              marginLeft: 10,
            }}
          />
          <Text style={{ color: "#4d4d4d", fontSize: 14, fontWeight: 600 }}>
            Yes, 
            <Text style={{ color: "#9c9c9c", fontWeight: 400 }}> Secure my trip.</Text>
          </Text>
        </View>
        <View
        style={{
          borderBottomColor: "#ededed",
          borderBottomWidth: 1,
        
        }}
      />
        <View
          style={{ flexDirection: "row", height: "50%", alignItems: "center" }}
        >
          <Image
            source={require("../../images/non-selected.png")}
            style={{
              height: 20,
              width: 20,
              tintColor: "grey",
              marginRight: 10,
              marginLeft: 10,
            }}
          />
          <Text style={{ color: "#4d4d4d", fontSize: 14, fontWeight: 600 }}>
            No,<Text style={{ color: "#9c9c9c", fontWeight: 400 }}> I will book without trip secure.</Text>
          </Text>
        </View>
      </View>
      <Text style={{fontSize:10, margin:10, color:'#464646', marginLeft:20}}>
      By selecting the product, I confirm the travellers age is between 6 months to 60 years and agree to the T&Cs
      </Text>
    </View>
  );
};

export default TripSecure;
