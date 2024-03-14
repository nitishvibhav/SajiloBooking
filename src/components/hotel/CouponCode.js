import { View, Text } from "react-native";
import React from "react";

const CouponCode = () => {
  return (
    <View
      style={{
        borderColor: "#1484e8",
        borderWidth: 1,
        width: "30%",
        marginLeft: 10,
        marginTop: 20,
        marginBottom: 30,
        padding: 10,
        borderRadius: 20,
      }}
    >
      <Text style={{color:'#494a4c', fontWeight:700, fontSize:16}}>ICICILUXURY</Text>
      <Text style={{color:'#008777', fontWeight:700}}>SAVE1040</Text>
      <Text style={{color:'#727377'}}>Exclusive Offer on ICIC Credit Cards. Get INR 1040 off. No..</Text>
    </View>
  );
};

export default CouponCode;
