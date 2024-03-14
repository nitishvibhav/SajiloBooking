import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React from "react";

const PromoOffer = () => {
  return (
    <View
      style={{
       paddingBottom:20,
        width: "95%",
        borderRadius: 6,
        backgroundColor: "white",
        margin: 10,
        elevation: 5,
        shadowColor: "grey",
        alignSelf: "center",
      }}
    >
      <TouchableOpacity
        style={{
          flexDirection: "row",
          marginRight: 20,
          marginLeft: 20,
          marginTop: 10,
        }}
      >
        <Image
          source={require("../../images/price-tag.png")}
          style={{
            height: 24,
            width: 24,
            marginRight: 10,
            alignSelf: "center",
          }}
        />
        <Text style={{ fontSize: 18, fontWeight: 800 }}>
          Offers & Promo Codes
        </Text>
        <Image
          source={require("../../images/next.png")}
          style={{
            height: 20,
            width: 20,
            tintColor: "#4c87f5",
            marginLeft: 60,
            alignSelf: "center",
          }}
        />
      </TouchableOpacity>
      <Text style={{ marginLeft: 60, fontSize: 13, color: "grey" }}>
        To help you save more
      </Text>
      <View
        style={{
          flexDirection: "row",
          borderWidth: 1,
          borderWidth: 1,
          width: "90%",
          alignSelf: "center",
          borderRadius: 6,
          borderColor: "grey",
          paddingLeft:20,
          marginTop: 20,
          justifyContent: "space-between",
          alignItems:'center',
          paddingRight:10, height:40
        }}
      >
        <TextInput style={{}} placeholder="Enter Promo code here" />
        <TouchableOpacity>
          <Text style={{color:'#4c87f5', fontSize:16, fontWeight:700}}>APPLY</Text>
        </TouchableOpacity>
      </View>
      <View style={{alignSelf:'center', marginTop:10}}><Text style={{fontSize:16, color:'#4c87f5', fontWeight:500}}>VIEW COUPONS</Text></View>
    </View>
  );
};

export default PromoOffer;
