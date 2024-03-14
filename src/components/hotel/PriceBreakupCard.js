import { View, Text, Image } from "react-native";
import React from "react";


const PriceBreakupCard = () => {
   
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
        Price Breakup
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 10,
          marginTop: 10,
        }}
      >
        <Text style={{ color: "#4b4b4b" }}>2 Rooms x 1 night Base Price</Text>
        <Text style={{ color: "#4b4b4b" }}>₹ 12,198</Text>
      </View>
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
        <Text style={{ color: "#0a8374" }}>Total Discount ⓘ</Text>
        <Text style={{ color: "#0a8374" }}>- ₹ 5,131</Text>
      </View>
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
        <Text style={{ color: "#4b4b4b" }}>Price after Discount</Text>
        <Text style={{ color: "#4b4b4b" }}>₹ 7,067</Text>
      </View>
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
      <Text style={{ color: "#4b4b4b" }}>Taxes & Service fees</Text>
      <Text style={{ color: "#4b4b4b" }}>₹ 1,092</Text>
    </View>
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
    <Text style={{ color: "#000" , fontSize:16, fontWeight:700}}>Total Amount to be paid</Text>
    <Text style={{ color: "#4b4b4b"  , fontSize:16, fontWeight:700}}>₹ 8,769</Text>
  </View>
  <View
  style={{
    backgroundColor: "#e6fff9",
    width: "95%",
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 20,
    justifyContent: "space-between",
    padding: 10,
    marginBottom: 10,
  }}
>
  <Image
    source={require("../../images/discount8.png")}
    style={{
      height: 20,
      width: 20,
      tintColor: "#0a6057",
      marginRight: 10,
    }}
  />
  <Text style={{ color: "#207e70", fontSize: 12, marginRight: 10 }}>
    Get FLAT 13% OFF* on your first flight booking! Use code:
    WELCOMESAJILO{" "}
  </Text>
</View>
    </View>
  );
};

export default PriceBreakupCard;
