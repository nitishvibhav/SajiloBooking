import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const PropertyHighlightCard = () => {
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
        Property Highlights
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "90%",
          alignSelf: "center",
          margin: 10,
          borderColor: "#d9d9d9",
          borderWidth: 1,
          borderRadius:10,
          padding:10,
          marginTop:20
        }}
      >
        <View style={{alignItems:'center'}}>
          <Text style={{color:'#0091ff', fontWeight:800, fontSize:12}}>18 Reviews</Text>
          <Text style={{color:'#626262',fontSize:12}}>Value for Money</Text>
        </View>
        <View style={{alignItems:'center'}}>
          <Text style={{color:'#0091ff', fontWeight:800,fontSize:12 }}>51 Reviews</Text>
          <Text style={{color:'#626262',fontSize:12}}>Food</Text>
        </View>
        <View style={{alignItems:'center'}}>
          <Text style={{color:'#0091ff', fontWeight:800, fontSize:12}}>62 Reviews</Text>
          <Text style={{color:'#626262',fontSize:12}}>Location</Text>
        </View>
      </View>
      <View style={{ width: "88%" }}>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Image
            style={{
              marginLeft: 10,
              marginRight: 10,
              tintColor: "#000000",
              height: 16,
              width: 16,
            }}
            source={require("../../images/like.png")}
          />

          <Text style={{ color: "#4a4a4a" }}>
            100+ families rated their stay Good.
          </Text>
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
        >
          <Image
            style={{
              marginLeft: 10,
              marginRight: 10,
              tintColor: "#000000",
              height: 16,
              width: 16,
              resizeMode: "contain",
            }}
            source={require("../../images/calendar.png")}
          />
          <Text style={{ color: "#4a4a4a" }}>Perfect for one-night Stay!</Text>
        </View>
        <View
          style={{ flexDirection: "row", marginTop: 10, alignItems: "center" }}
        >
          <Image
            style={{
              marginLeft: 10,
              marginRight: 10,
              tintColor: "#000000",
              height: 16,
              width: 16,
            }}
            source={require("../../images/fork.png")}
          />
          <Text style={{ color: "#4a4a4a" }}>
            Tasty breakfast! Guests like food quality and service
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Image
            style={{
              marginLeft: 10,
              marginRight: 10,
              tintColor: "#000000",
              height: 16,
              width: 16,
            }}
            source={require("../../images/interior-design.png")}
          />
          <Text style={{ color: "#4a4a4a" }}>Great Rooms at the property!</Text>
        </View>
      </View>

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
        View All Highlights
      </Text>
    </View>
  );
};

export default PropertyHighlightCard;
