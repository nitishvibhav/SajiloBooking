import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const ReviewCouponCard = () => {
  return (
    <TouchableOpacity
      style={{
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: "#d8d8d8",
        borderRadius: 10,
        padding: 10,
        marginTop:10
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Image source={require('../../images/offer.png')}
          style={{height:16, width:16, marginRight:10, tintColor:'#4b4b4b'}}/>
          <Text style={{color:'#4b4b4b', fontWeight:700}}>SAJILOSTAYS</Text>
        </View>
        <Text style={{color:'#48898b', fontWeight:700, fontSize:18}}>₹1167</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop:10, }}>
        <Text style={{color:'#77787a'}}>Discount of INR 1167 Applied</Text>
        <Text style={{color:'#1085ec', fontWeight:700}}>Apply</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ReviewCouponCard;
