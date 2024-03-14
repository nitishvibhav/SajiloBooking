import { View, Text, Image, ScrollView,TouchableOpacity } from "react-native";
import React from "react";
import RoomFilter from "../../components/hotel/RoomFilter";
import ExecutiveRoom from "../../components/hotel/ExecutiveRoom";
import { useNavigation } from "@react-navigation/native";

const SelectRoom = (props) => {
    const navigation = useNavigation()
  return (
    <View style={{flex:1}}>
    <View
      style={{
        width: "100%",
        elevation: 5,
        shadowColor: "grey",
        backgroundColor: "white",
        paddingBottom:10,
        
      }}
    >
      <View
        style={{
          flexDirection: "row",
          padding: 10,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../../images/back.png")}
            style={{
              height: 20,
              width: 20,
              tintColor: "#868686",
            }}
          />
          <View style={{ marginLeft: 20 }}>
            <Text style={{ fontWeight: "600", fontSize: 16 }}>Select Room</Text>
            <Text style={{ fontSize: 12, color: "#656565" }}>
              Feb 28 - Feb 29 <Text style={{ fontWeight: 800 }}>•</Text> 2 Rooms{" "}
              <Text style={{ fontWeight: 800 }}>•</Text> 2 Guests
            </Text>
          </View>
        </View>
        <Text
          style={{
            marginRight: 10,
            color: "#1399fc",
            fontWeight: 500,
            fontSize: 16,
          }}
        >
          Modify
        </Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <RoomFilter category=" Room Only" />
        <RoomFilter category=" Breakfast included" />
        <RoomFilter category=" Breakfast included with Lunch/ Dinner" />
        <RoomFilter category=" Lunch included" />
      </ScrollView>
    </View>
    <ScrollView showsVerticalScrollIndicator={false}>
    <ExecutiveRoom/>
    <ExecutiveRoom/>
    </ScrollView>
    <View
        style={{
          bottom: 0,
          position: "absolute",
          width: "100%",
          backgroundColor: "black",
          left: 0,
          right: 0,
          height: 60,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 5,
        }}
      >
        <View style={{ marginLeft: 10 }}>
          <Text style={{ color: "white", fontSize: 14, fontWeight: 700 }}>
            ₹ 4,221
          </Text>
          <Text style={{ color: "white", fontSize: 10, fontWeight: 400 }}>
            + ₹1011 taxes and fees
          </Text>
          <Text style={{ color: "white", fontSize: 10, fontWeight: 400 }}>
            Per Night for 2 Rooms & 3 Guest
          </Text>
        </View>
        <TouchableOpacity
          style={{
            width: "40%",
            height: "80%",
            alignItems: "center",
            marginRight: 20,
            borderRadius: 10,
            backgroundColor: "orange",
            justifyContent: "center",
          }}
          onPress={()=>navigation.navigate('ReviewHotel')}
        >
          <Text
            style={{
              color: "white",
              fontSize: 16,
              fontWeight: 700,
              alignSelf: "center",
            }}
          >
            CONTINUE
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SelectRoom;
