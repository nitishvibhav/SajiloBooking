import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const FlightSearch = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View
        style={{
          backgroundColor: "#f1f8fe",
          width: "95%",
          borderColor: "#d5e1ed",
          borderWidth: 1,
          borderRadius: 10,
          alignSelf: "center",
          marginTop: 10,
        }}
      >
        <View
          style={{ flexDirection: "row", alignItems: "center", margin: 10 }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Flight")}>
            <Image
              source={require("../../images/back.png")}
              style={{ height: 20, width: 20, marginRight: 20 }}
            />
          </TouchableOpacity>
          <View>
            <Text style={{ fontSize: 14, fontWeight: 600 }}>FROM</Text>
            <TextInput
              placeholder="Enter Any City/Airport Name"
              style={{ color: "#9a9c9b", fontSize: 16 }}
            ></TextInput>
          </View>
        </View>
      </View>
      <View
        style={{
          width: "95%",
          borderColor: "#d5e1ed",
          borderWidth: 1,
          borderRadius: 10,
          alignSelf: "center",
          marginTop: 10,
        }}
      >
        <View
          style={{ flexDirection: "row", alignItems: "center", margin: 10 }}
        >
          <Image
            source={require("../../images/landing.png")}
            style={{
              height: 20,
              width: 20,
              marginRight: 20,
              tintColor: "black",
            }}
          />
          <View>
            <Text style={{ fontSize: 14, fontWeight: 600 }}>DESTINATION</Text>
            <TextInput
              placeholder="Enter Any City/Airport Name"
              style={{ color: "#9a9c9b", fontSize: 16 }}
            ></TextInput>
          </View>
        </View>
      </View>
      <Text
        style={{
          fontSize: 16,
          color: "#9b9b9b",
          margin: 10,
          marginLeft: 20,
          fontWeight: 800,
        }}
      >
        POPULAR CITIES
      </Text>
      <View style={{flexDirection:'row', alignItems:'center', margin:10, marginLeft:20, width:'90%'}}>
        <Image
          source={require("../../images/plane.png")}
          style={{ height: 20, width: 20 , marginRight:20}}
        />
        <View>
        <Text style={{fontSize:16}}>Delhi</Text>
        <Text style={{color:'#ababab', fontWeight:400, fontSize:14}}>DEL, Delhi Airport</Text>
        </View>
        <Text style={{alignSelf:'flex-end', marginLeft:40}}>India</Text>
      </View>
    </View>
  );
};

export default FlightSearch;
