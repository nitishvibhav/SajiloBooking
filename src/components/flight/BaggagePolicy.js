import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const BaggagePolicy = () => {
  return (
    <View
      style={{
        height: 210,
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
          justifyContent: "space-between",
          margin: 10,
          marginRight: 20,
          marginLeft: 20,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: 800 }}>Baggage Policy</Text>
        <Image
          source={require("../../images/next.png")}
          style={{ height: 20, width: 20, tintColor: "#4c87f5" }}
        />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          marginBottom: 10,
          marginTop: 20,
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../images/bag.png")}
          style={{ height: 20, width: 20, tintColor: "grey", marginLeft: 20 }}
        />
        <Text style={{ marginLeft: 10, fontSize: 12, fontWeight: 600 }}>
          Cabin bag
        </Text>
        <Text style={{ marginLeft: 50, fontSize: 12 }}>
          7 Kgs(1 piece only)
        </Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={require("../../images/suitcase.png")}
          style={{ height: 20, width: 20, tintColor: "grey", marginLeft: 20 }}
        />
        <Text style={{ marginLeft: 10, fontSize: 12, fontWeight: 600 }}>
          Check-in bag
        </Text>
        <Text style={{ marginLeft: 30, fontSize: 12 }}>
          15 Kgs(1 piece only)
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#e6f0f2",
          width: "95%",
          flexDirection: "row",
          alignSelf: "center",
          height: 70,
          alignItems:'center',
          marginTop:20,
          borderRadius:5
        }}
      >
        <View style={{ width: "15%", alignItems:'center'}}>
          <Image
            source={require("../../images/luggage5.png")}
            style={{ height: 15, width: 15 }}
          />
        </View>
        <View style={{ width: "70%",alignItems:'center'}}>
          <Text style={{ color: "grey", fontSize: 12, }}>
            Got excess luggage? Don't stress, buy extra check-in baggage
            allowance at fab rates!
          </Text>
        </View>
       <View style={{width:"15%",alignItems:'center'}}>
       <Text style={{fontSize:12, color:'#4c87f5', fontWeight:700}}>+ADD</Text>
       </View>
         
       
      </View>
    </View>
  );
};

export default BaggagePolicy;
