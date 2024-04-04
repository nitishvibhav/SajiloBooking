import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import HotelFilter from "../../components/hotel/HotelFilter";
import HotelCard from "../../components/hotel/HotelCard";
import { useNavigation } from "@react-navigation/native";

const HotelList = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          width: "100%",
          backgroundColor: "white",
          height: 130,
          elevation: 5,
          marginBottom: 1,
        }}
      >
        <View
          style={{
            height: 60,
            width: "95%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignSelf: "center",
          }}
        >
          <View
            style={{
              height: 50,
              width: "85%",
              borderWidth: 1,
              alignSelf: "center",
              marginTop: 10,
              borderRadius: 6,
              borderColor: "#ccc",
              backgroundColor: "#f5f7fc",
              flexDirection: "row",
              alignItems: "center",
              justifyContent:'space-between'
            }}
          >
          <View style={{flexDirection:'row'}}>
            <View
              style={{ alignSelf: "center", marginLeft: 10, marginRight: 20 }}
            >
              <TouchableOpacity onPress={() => navigation.navigate("Hotel")}>
                <Image
                  source={require("../../images/back.png")}
                  style={{ height: 20, width: 20, tintColor: "#6c6c6c" }}
                />
              </TouchableOpacity>
            </View>
            <View style={{ alignSelf: "center", marginRight: 10 }}>
              <Text style={{ fontSize: 16, fontWeight: 700 }}>Kolkata</Text>
              <Text style={{ fontSize: 12, color: "grey" }}>
                22 Feb - 23 Feb, 2 Rooms, 4 Guests
              </Text>
            </View>
            </View>
            <View style={{ alignItems: "center", marginRight: 20 }}>
              <Image
                source={require("../../images/editing.png")}
                style={{ height: 16, width: 16, tintColor: "#0089f8" }}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: "#0089f8",
                  fontWeight: 500,
                  marginTop: 5,
                }}
              >
                Edit
              </Text>
            </View>
          </View>
          <View
            style={{
              height: 60,
              width: "12%",
              marginTop: 5,
              borderRadius: 6,
              borderColor: "grey",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Image
              source={require("../../images/search.png")}
              style={{
                height: 20,
                width: 20,
                tintColor: "#087cd1",
                marginTop: 5,
              }}
            />
            <Text
              style={{
                fontSize: 12,
                color: "#087cd1",
                fontWeight: 500,
                marginBottom: 5,
              }}
            >
              Search
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 65,
            width: "100%",
            paddingTop: 15,
            paddingLeft: 10,
          }}
        >
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <HotelFilter category="Sort By" />
            <HotelFilter category="All Filters" />
            <HotelFilter category="Star Rating" />
            <HotelFilter category="Popular" />
            <HotelFilter />
          </ScrollView>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          style={{
            marginTop: 15,
            marginLeft: 10,
            fontSize: 20,
            fontWeight: 700,
          }}
        >
          Recently Viewed
        </Text>
        <HotelCard />
        <HotelCard />
        <HotelCard />
      </ScrollView>
    </View>
  );
};

export default HotelList;
