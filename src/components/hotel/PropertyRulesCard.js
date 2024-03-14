import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const PropertyRulesCard = () => {
  const navigation = useNavigation();
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
        Property Rules & Information
      </Text>
      <View
        style={{ flexDirection: "row", marginLeft: 10, alignItems: "center" }}
      >
        <Text style={{ color: "#787878", fontWeight: 500, marginRight: 10 }}>
          Check-In:{" "}
          <Text style={{ color: "#787878", fontWeight: 400 }}>11 AM</Text>
        </Text>
        <Text style={{ marginRight: 10, fontSize: 20, color: "#4a4a4a" }}>
          •
        </Text>
        <Text style={{ color: "#787878", fontWeight: 500 }}>
          Check-Out:{" "}
          <Text style={{ color: "#787878", fontWeight: 400 }}>10 AM</Text>
        </Text>
      </View>
      <View
        style={{
          borderColor: "#087e72",
          borderWidth: 1,
          width: "95%",
          alignSelf: "center",
          padding: 10,
          borderRadius: 10,
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        <Text style={{ color: "#007c7d", fontWeight: 700 }}>
          Couple, Bachelor Rules
        </Text>
        <Text style={{ color: "#4d4d4d" }}>
          Unmarried couples/guests with Local IDs are allowed.
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
        <Text style={{ color: "#4a4a4a" }}>Pets are not allowed.</Text>
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
        <Text style={{ color: "#4a4a4a" }}>
          Smoking within the premises is not allowed.
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
          Passport, Aadhar, Driving License and Govt. ID are accepted as ID
          proof(s)
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
          This property is accessible to guests who use a wheelchair. Guests are
          requested to carry their own wheelchair.
        </Text>
      </View>
      <View style={{ flexDirection: "row", width: "86%" }}>
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
          An extra bed will be provided to accommodate any additional guest
          included in the booking for a charge mentioned below.
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
          View All Rules
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PropertyRulesCard;
