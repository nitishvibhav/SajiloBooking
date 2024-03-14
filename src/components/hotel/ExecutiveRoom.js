import { View, Text, Image } from "react-native";
import React from "react";

const ExecutiveRoom = () => {
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
        Executive Room
      </Text>
      <View style={{ flexDirection: "row", margin: 10 }}>
        <Image
          source={require("../../images/hoteloyo.jpg")}
          style={{ width: "50%", height: 120, borderRadius: 10, marginRight: 10 }}
        />
        <View>
          <Text>190 sq feet</Text>
          <Text>King bed</Text>
          <Text style={{ color: "#319cff", fontWeight: 700 }}>View All</Text>
        </View>
      </View>
      <View
        style={{
          borderBottomColor: "#d6d6d6",
          borderBottomWidth: 1,
          marginTop: 10,
          marginBottom: 10,
        }}
      />
      <Text
        style={{ marginTop: 10, fontSize: 14, fontWeight: 700, marginLeft: 10 }}
      >
        Room Only
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 10,
          marginBottom: 0,
        }}
      >
        <View>
          <Text style={{ color: "#646464" }}>No meals included</Text>
          <Text style={{ color: "#646464" }}>Non-Refundable</Text>
        </View>
        <View style={{ width: "25%" }}>
          <Text style={{ textAlign: "right", fontSize: 16, fontWeight: 700 }}>
            ₹ 4,221
          </Text>
          <Text style={{ color: "#646464", textAlign: "right", fontSize: 12 }}>
            {" "}
            + ₹ 1011 taxes & Service fees Per night for 2 Rooms
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 10,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#319cff", fontWeight: 700 }}>More Details</Text>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderColor: "#319cff",
            borderRadius: 6,
            paddingHorizontal: 20,
            paddingVertical: 5,
            backgroundColor:'#ebf8ff'
          }}
        >
          <Text style={{ color: "#319cff", fontWeight: 700 }}>SELECTED</Text>
        </View>
      </View>
      <View
        style={{
          borderBottomColor: "#d6d6d6",
          borderBottomWidth: 1,
          margin: 10,
        }}
      />
      <Text style={{ fontSize: 14, fontWeight: 700, marginLeft: 10 }}>
        Room with Breakfast
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 10,
          marginBottom: 0,
          alignItems:'center'
        }}
      >
        <View style={{ width: "55%" }}>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{ color: "#4a4a4a", fontWeight: "700", marginRight: 10 }}
            >
              •
            </Text>
            <Text style={{ color: "#646464" }}>
              Free Early check-in, Subject to Availability
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{ color: "#4a4a4a", fontWeight: "700", marginRight: 10 }}
            >
              •
            </Text>
            <Text style={{ color: "#646464" }}>
              Free Late check-out, Subject to Availability
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{ color: "#4a4a4a", fontWeight: "700", marginRight: 10 }}
            >
              •
            </Text>
            <Text style={{ color: "#646464" }}>
              Free Welcome Drink on Arrival
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{ color: "#4a4a4a", fontWeight: "700", marginRight: 10 }}
            >
              •
            </Text>
            <Text style={{ color: "#646464" }}>Non-Refundable</Text>
          </View>
        </View>
        <View style={{ width: "25%" }}>
          <Text style={{ textAlign: "right", fontSize: 16, fontWeight: 700 }}>
            ₹ 5,386
          </Text>
          <Text style={{ color: "#646464", textAlign: "right", fontSize: 12 }}>
            {" "}
            + ₹ 1211 taxes & Service fees Per night for 2 Rooms
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 10,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#319cff", fontWeight: 700 }}>More Details</Text>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderColor: "#319cff",
            borderRadius: 6,
            paddingHorizontal: 20,
            paddingVertical: 5,
          }}
        >
          <Text style={{ color: "#319cff", fontWeight: 700 }}>SELECT</Text>
        </View>
      </View>
      <View
      style={{
        borderBottomColor: "#d6d6d6",
        borderBottomWidth: 1,
        margin: 10,
      }}
    />
    <Text style={{ fontSize: 14, fontWeight: 700, marginLeft: 10 }}>
      Room with Breakfast + Lunch/Dinner
    </Text>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 10,
        marginBottom: 0,
        alignItems:'center'
      }}
    >
      <View style={{ width: "55%" }}>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{ color: "#4a4a4a", fontWeight: "700", marginRight: 10 }}
          >
            •
          </Text>
          <Text style={{ color: "#646464" }}>
            Free Early check-in, Subject to Availability
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{ color: "#4a4a4a", fontWeight: "700", marginRight: 10 }}
          >
            •
          </Text>
          <Text style={{ color: "#646464" }}>
            Free Late check-out, Subject to Availability
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{ color: "#4a4a4a", fontWeight: "700", marginRight: 10 }}
          >
            •
          </Text>
          <Text style={{ color: "#646464" }}>
            Free Welcome Drink on Arrival
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{ color: "#4a4a4a", fontWeight: "700", marginRight: 10 }}
          >
            •
          </Text>
          <Text style={{ color: "#646464" }}>Non-Refundable</Text>
        </View>
      </View>
      <View style={{ width: "25%" }}>
        <Text style={{ textAlign: "right", fontSize: 16, fontWeight: 700 }}>
          ₹ 6,386
        </Text>
        <Text style={{ color: "#646464", textAlign: "right", fontSize: 12 }}>
          {" "}
          + ₹ 1511 taxes & Service fees Per night for 2 Rooms
        </Text>
      </View>
    </View>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 10,
        alignItems: "center",
       
      }}
    >
      <Text style={{ color: "#319cff", fontWeight: 700 }}>More Details</Text>

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 1,
          borderColor: "#319cff",
          borderRadius: 6,
          paddingHorizontal: 20,
          paddingVertical: 5,
        }}
      >
        <Text style={{ color: "#319cff", fontWeight: 700 }}>SELECT</Text>
      </View>
    </View>
    </View>
  );
};

export default ExecutiveRoom;
