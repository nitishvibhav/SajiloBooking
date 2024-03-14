import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const CancellationPolicy = () => {
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
        paddingBottom: 10,
      }}
    >
      <TouchableOpacity
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 10,
          marginRight: 20,
          marginLeft: 20,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: 800 }}>
          Cancellation Refund Policy
        </Text>
        <Image
          source={require("../../images/next.png")}
          style={{ height: 20, width: 20, tintColor: "#4c87f5" }}
        />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginRight: 20,
          marginLeft: 20,
          marginTop: 20,
        }}
      >
        <Text style={{ fontSize: 10, fontWeight: 700, color: "grey" }}>
          Cancel Between(IST)
        </Text>
        <Text style={{ fontSize: 10, fontWeight: 700, color: "grey" }}>
          Cancellation Penalty:
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginLeft: 20,
          marginRight: 20,
          marginTop: 10,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 12, fontWeight: 500 }}>
          Now-11 Feb, <Text style={{ fontWeight: 400 }}>00:40</Text>
        </Text>
        <Text style={{ fontSize: 16, fontWeight: 800 }}>$ 3,800</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginLeft: 20,
          marginRight: 20,
          marginTop: 10,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 12, fontWeight: 500 }}>
          11 Feb, <Text style={{ fontWeight: 400 }}>00:40-</Text>
          <Text style={{ fontSize: 12, fontWeight: 500 }}>
            11 Feb, <Text style={{ fontWeight: 400 }}>03:40</Text>
          </Text>
        </Text>
        <Text style={{ fontSize: 16, fontWeight: 800 }}>$ 5,376</Text>
      </View>
      <View
        style={{
          backgroundColor: "#e6f0f2",
          width: "95%",
          flexDirection: "row",
          alignSelf: "center",
          height: 70,
          alignItems: "center",
          marginTop: 20,
          borderRadius: 5,
        }}
      >
        <View style={{ width: "10%", alignItems: "center" }}>
          <Image
            source={require("../../images/luggage5.png")}
            style={{ height: 15, width: 15 }}
          />
        </View>
        <View style={{ width: "70%", alignItems: "center" }}>
          <Text style={{ color: "grey", fontSize: 12 }}>
            Upgrade to enjoy benefits like lower Cancellation fee, in-flight
            meals, and seat selection , at a huge discount.
          </Text>
        </View>
        <View style={{ width: "20%",  }}>
          <Text style={{ fontSize: 13, color: "#4c87f5", fontWeight: 600 }}>
            UPGRADE
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CancellationPolicy;
