import { View, Text } from "react-native";
import React from "react";
import ReviewCouponCard from "./ReviewCouponCard";

const ReviewCoupon = () => {
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
        style={{ marginTop: 10, fontSize: 18, fontWeight: 700, marginLeft: 10 }}
      >
        Coupon Codes
      </Text>
      <ReviewCouponCard />
      <ReviewCouponCard />
      <ReviewCouponCard />
      <ReviewCouponCard />
      <ReviewCouponCard />
      <Text
        style={{
          marginHorizontal: 10,
          marginTop: 10,
          color: "#1581bf",
          fontWeight: 700,
          fontSize: 16,
        }}
      >
        View 4 more Coupons
      </Text>
      <View style={{marginHorizontal:10, borderRadius:10, backgroundColor:'#f2f2f2', padding:10, marginTop:10}}>
      <Text style={{color:'#6a6a6a', fontSize:12}}>SAJILO Gift Cards can be applied at payment step</Text>
      </View>
    </View>
  );
};

export default ReviewCoupon;
