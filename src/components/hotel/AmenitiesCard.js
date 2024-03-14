import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const AmenitiesCard = () => {
  const navigation=useNavigation()
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
      }}
    >
      <Text style={{ margin: 10, fontSize: 18, fontWeight: 700 }}>
        About This Property
      </Text>
      <Text
        style={{
          marginLeft: 10,
          marginRight: 10,
          fontSize: 14,
          color: "#5a5a5a",
        }}
      >
        Your trip to the charming city 'City of Joy' will become more memorable
        with a stay at Regenta Inn Larica, which offers premium luxury at a
        highly accessible location
      </Text>
      <View
        style={{
          flexDirection: "row",
          margin: 10,
          justifyContent: "space-between",
        }}
      >
        <Text style={{ color: "#6f6f6f", fontSize: 14, fontWeight: 700 }}>
          Food and Dining
        </Text>
        <Image
          source={require("../../images/next.png")}
          style={{ width: 20, height: 20, tintColor: "#1684e3" }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          marginLeft: 10,
          marginRight: 10,
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <Text style={{ color: "#6f6f6f", fontSize: 14, fontWeight: 700 }}>
          Location & Surrounding
        </Text>
        <Image
          source={require("../../images/next.png")}
          style={{ width: 20, height: 20, tintColor: "#1684e3" }}
        />
      </View>
      <Text
        style={{
          color: "#1499f4",
          fontSize: 16,
          fontWeight: 700,
          marginLeft: 10,
        }}
      >
        View All
      </Text>
      <View
        style={{
          borderBottomColor: "#d6d6d6",
          borderBottomWidth: 1,
          margin: 10,
        }}
      />
      <Text
        style={{
          marginLeft: 10,
          fontSize: 18,
          fontWeight: 700,
          marginBottom: 10,
        }}
      >
        Amenities
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ alignItems: "center", width: "33%" }}>
          <Image
            source={require("../../images/fork.png")}
            style={{ width: 20, height: 20 }}
          />
          <Text>Restaurant</Text>
        </View>
        <View style={{ alignItems: "center", width: "33%" }}>
          <Image
            source={require("../../images/pool.png")}
            style={{ width: 20, height: 20 }}
          />
          <Text>Swimming Pool</Text>
        </View>
        <View style={{ alignItems: "center", width: "33%" }}>
          <Image
            source={require("../../images/room-service.png")}
            style={{ width: 20, height: 20 }}
          />
          <Text style={{ justifyContent: "center" }}>24-hrs Room Service</Text>
        </View>
      </View>
      <TouchableOpacity
      onPress={()=>navigation.navigate('Amenities')}>
        <Text
          style={{
            color: "#1499f4",
            fontSize: 16,
            fontWeight: 700,
            marginLeft: 10,
            marginBottom: 10,
            marginTop:10
          }}
        >
          +71 more Amenities
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AmenitiesCard;
