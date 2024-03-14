import { View, Text } from "react-native";
import React from "react";

const TripSecure = () => {
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
        Trip Secure
      </Text>
      <Text
        style={{
          color: "#404040",
          fontWeight: 600,
          marginLeft: 10,
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        Worry free hotel stay!
      </Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text
          style={{
            marginLeft: 10,
            marginRight: 10,
            fontSize: 20,
            color: "#4a4a4a",
          }}
        >
          •
        </Text>
        <Text style={{ color: "#4a4a4a" }}>
          Upto ₹25K for loss of tablets and laptops.
        </Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text
          style={{
            marginLeft: 10,
            marginRight: 10,
            fontSize: 20,
            color: "#4a4a4a",
          }}
        >
          •
        </Text>
        <Text style={{ color: "#4a4a4a" }}>Upto ₹25K for bounced booking.</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text
          style={{
            marginLeft: 10,
            marginRight: 10,
            fontSize: 20,
            color: "#4a4a4a",
          }}
        >
          •
        </Text>
        <Text style={{ color: "#4a4a4a" }}>Upto ₹25K for loss of baggage.</Text>
      </View>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginRight: 20 }}
      >
        <Text
          style={{
            marginLeft: 10,
            marginRight: 10,
            fontSize: 20,
            color: "#4a4a4a",
          }}
        >
          •
        </Text>
        <Text style={{ color: "#4a4a4a", marginRight: 20 }}>
          Upto ₹15K for hotel booking cancellation charges if cancelled due to
          illness.
        </Text>
      </View>
      <Text
        style={{
          color: "#078bfa",
          marginTop: 10,
          marginLeft: 10,
          fontWeight: 700,
          fontSize: 16,
        }}
      >
        View benefits
      </Text>
      <View
        style={{
          borderBottomColor: "#d6d6d6",
          borderBottomWidth: 1,
          margin: 10,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 10,
        }}
      >
        <View>
          <Text style={{ fontSize: 12 , color:'#474747'}}>
            {" "}
            <Text style={{ fontSize: 16, fontWeight: 600 }}>₹69</Text> per
            person
          </Text>
          <Text style={{ color: "#919191", fontSize: 12 }}>
            Non-Refundable | 18% GST included
          </Text>
        </View>
        <View
          style={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "grey",
            paddingHorizontal: 15,
            paddingVertical: 2,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#028ffb", fontWeight: 700, fontSize: 16 }}>
            ADD
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TripSecure;
