import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import TicketCard from "../../components/flight/TicketCard";
import DateWithPrice from "../../components/flight/DateWithPrice";
import PriceWithTime from "../../components/flight/PriceWithTime";
import Filter from "../../components/flight/Filter";
import { useNavigation } from "@react-navigation/native";

const PriceFlight = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <View style={{ width: "100%", backgroundColor: "white", height: 130 }}>
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
              height: 60,
              width: "86%",
              borderWidth: 1,
              alignSelf: "center",
              marginTop: 10,
              borderRadius: 6,
              borderColor: "#ccc",
              backgroundColor: "#f5f7fc",
              flexDirection: "row",
              alignItems: "center",
              justifyContent:'space-between',
            }}
          >
          <View style={{flexDirection:'row'}}>
            <View
              style={{ alignSelf: "center", marginLeft:10, marginRight:20  }}
            >
            <TouchableOpacity onPress={() => navigation.navigate("Flight")}>
              <Image
                source={require("../../images/back.png")}
                style={{ height: 20, width: 20 }}
              />
            </TouchableOpacity>
            </View>
            <View style={{ alignSelf: "center" }}>
              <Text style={{ fontSize: 16, fontWeight: 700 }}>
                New Delhi to Mumbai
              </Text>
              <Text style={{ fontSize: 12, color: "grey" }}>
                9 Feb 1 Adult Economy
              </Text>
            </View>
            </View>
            <View style={{ alignItems: "center", marginRight: 20 }}>
              <Image
                source={require("../../images/editing.png")}
                style={{ height: 16, width: 16, tintColor: "blue" }}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: "blue",
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
              backgroundColor: "#27a192",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../../images/notification.png")}
              style={{
                height: 16,
                width: 16,
                tintColor: "white",
                marginBottom: 5,
              }}
            />
            <Text style={{ fontSize: 10, color: "white", fontWeight: 500 }}>
              Price
            </Text>
            <Text style={{ fontSize: 10, color: "white", fontWeight: 500 }}>
              Alert
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 35,
            width: "95%",
            alignSelf: "center",
            marginTop: 20,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              height: 35,
              backgroundColor: "black",
              alignItems: "center",
              marginRight: 5,
              justifyContent: "center",
              borderTopLeftRadius: 6,
              borderBottomLeftRadius: 6,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                transform: "rotate(270deg)",
                color: "white",
                alignSelf: "center",
                fontWeight: 700,
              }}
            >
              FEB
            </Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <DateWithPrice date="Fri, 9 Feb" price="₹6523"/>
            <DateWithPrice date="Sat, 10 Feb" price="₹6423"/>
            <DateWithPrice date="Sun, 11 Feb" price="₹5523"/>
            <DateWithPrice date="Mon, 12 Feb" price="₹5583"/>
            <DateWithPrice date="Tue, 13 Feb" price="₹6523"/>
            <DateWithPrice date="Mon, 12 Feb" price="₹5583"/>
            <DateWithPrice date="Tue, 13 Feb" price="₹6523"/>
            <DateWithPrice date="Mon, 12 Feb" price="₹5583"/>
            <DateWithPrice date="Tue, 13 Feb" price="₹6523"/>
          </ScrollView>
        </View>
      </View>
      <View
        style={{
          height: 65,
          width: "100%",
          paddingTop: 15,
          paddingLeft: 10,
          backgroundColor: "#edf6fa",
          elevation: 1,
        }}
      >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <PriceWithTime type="Cheapest" price="₹5923" time="2h 15m"/>
          <PriceWithTime type="Non Stop First" price="₹6523" time="2h 10m"/>
          <PriceWithTime type="You May Prefer" price="₹5823" time="2h 30m"/>
          <PriceWithTime type="Cheapest" price="₹5923" time="2h 15m"/>
          <PriceWithTime type="You May Prefer" price="₹5823" time="2h 30m"/>
          <PriceWithTime type="Cheapest" price="₹5923" time="2h 15m"/>
          <PriceWithTime type="You May Prefer" price="₹5823" time="2h 30m"/>
          <PriceWithTime type="Cheapest" price="₹5923" time="2h 15m"/>
        
        </ScrollView>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{}}>
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "black",
          alignItems: "center",
          height: 70,
          position: "absolute",
          bottom: 0,
          width: "100%",
        }}
      >
        <View
          style={{
            backgroundColor: "#3d4051",
            height: 40,
            width: 40,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 2,
            marginLeft:10, marginRight:5
          }}
        >
          <Image
            source={require("../../images/filter.png")}
            style={{ height: 24, width: 24, tintColor: "#2678de" }}
          />
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Filter category="Non-stop only"/>
          <Filter category="2+ stops"/>
          <Filter category="1 stops"/>
          <Filter category="Morning 6:00 to 12:00PM"/>
          <Filter category="Evening 6:00 to 12:00AM"/>
        </ScrollView>
      </View>
    </View>
  );
};

export default PriceFlight;
