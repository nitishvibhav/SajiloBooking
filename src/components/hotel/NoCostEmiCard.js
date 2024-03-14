import { View, Text } from "react-native";
import React from "react";

const NoCostEmiCard = () => {
  return (
    <View
      style={{
        width: "95%",
        borderRadius: 6,
        backgroundColor: "#eefff9",
        alignSelf: "center",
        elevation: 5,
        shadowColor: "grey",
        marginBottom: 10,
        marginTop:20
      }}
    >
      <View
        style={{
          marginLeft: 10,
          borderWidth: 1,
          width: 120,
          alignItems: "center",
          marginTop: 10,
          borderRadius: 100,
          borderColor: "#61c5c5",
        }}
      >
        <Text style={{ color: "#1a9288", fontWeight: 600, fontSize: 16 }}>
          No Cost EMI
        </Text>
      </View>
      <Text style={{ margin: 10, color: "#4c4e4d" }}>
        Congrats! You can book this property at just 2669 per month.{" "}
        <Text style={{ color: "#464a49", fontWeight: 500, fontSize: 16 }}>
          No-Cost EMI available for 3 months!
        </Text>
      </Text>
    </View>
  );
};

export default NoCostEmiCard;
