import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const RoomDetails = () => {
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
      <Text
        style={{ marginTop: 10, fontSize: 18, fontWeight: 700, marginLeft: 10 }}
      >
        2 x Premium Rooms
      </Text>
      <View
        style={{ flexDirection: "row", marginLeft: 10, alignItems: "center" }}
      >
        <Text style={{ color: "#787878", fontWeight: 500, marginRight: 10 }}>
          Room1:{" "}
          <Text style={{ color: "#787878", fontWeight: 400 }}>1 Adult</Text>
        </Text>
        <Text style={{ marginRight: 10, fontSize: 20, color: "#787878" }}>
          •
        </Text>
        <Text style={{ color: "#787878", fontWeight: 500 }}>
          Room2:{" "}
          <Text style={{ color: "#787878", fontWeight: 400 }}>1 Adult</Text>
        </Text>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text
          style={{
            marginLeft: 20,
            marginRight: 10,
            fontSize: 16,
            color: "#4a4a4a",
          }}
        >
          •
        </Text>
        <Text style={{ color: "#4a4a4a" }}>Room Only</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text
          style={{
            marginLeft: 20,
            marginRight: 10,
            fontSize: 16,
            color: "#4a4a4a",
          }}
        >
          •
        </Text>
        <Text style={{ color: "#4a4a4a" }}>No meals included</Text>
      </View>
      <View style={{ flexDirection: "row", width: "90%" }}>
        <Text
          style={{
            marginLeft: 20,
            marginRight: 10,
            fontSize: 16,
            color: "#4a4a4a",
          }}
        >
          •
        </Text>
        <Text style={{ color: "#4a4a4a" }}>
          Free Early Check-in, Subject to Availability
        </Text>
      </View>
      <View style={{ flexDirection: "row", width: "90%" }}>
        <Text
          style={{
            marginLeft: 20,
            marginRight: 10,
            fontSize: 16,
            color: "#4a4a4a",
          }}
        >
          •
        </Text>
        <Text style={{ color: "#4a4a4a" }}>
          Free Late Check-out, Subject to Availability
        </Text>
      </View>
      <View
        style={{
          borderBottomColor: "#d6d6d6",
          borderBottomWidth: 1,
          margin: 10,
        }}
      />
      <View style={{ marginHorizontal: 10 }}>
        <Text style={{ color: "#4a4a4a" }}>Non Refundable</Text>
        <Text style={{ color: "#4a4a4a" }}>
          On Cancellation, You will not get any refund
        </Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Amenities")}>
        <Text
          style={{
            color: "#1499f4",
            fontSize: 16,
            fontWeight: 700,
            marginLeft: 10,
            marginBottom: 10,
            marginTop: 10,
          }}
        >
          Inclusion & Cancellation Policy
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default RoomDetails;
