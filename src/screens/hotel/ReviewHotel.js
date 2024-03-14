import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import ReviewInfoCard from "../../components/hotel/ReviewInfoCard";
import PropertyRulesCard from "../../components/hotel/PropertyRulesCard";
import PriceBreakupCard from "../../components/hotel/PriceBreakupCard";
import TripSecure from "../../components/flight/TripSecure";
import ConfirmFlight from "../../components/flight/ConfirmFlight";
import AddOnn from "../../components/hotel/AddOnn";
import RoomDetails from "../../components/hotel/RoomDetails";
import ReviewCoupon from "../../components/hotel/ReviewCoupon";
import GuestDetails from "../../components/hotel/GuestDetails";

const ReviewHotel = () => {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ReviewInfoCard />
        <RoomDetails/>
        <AddOnn/>
        <PropertyRulesCard />
        <PriceBreakupCard />
        <ReviewCoupon/>
        <GuestDetails/>
        <TripSecure />
        <ConfirmFlight/>
      </ScrollView>
      
      <View
        style={{
          bottom: 0,
          position: "absolute",
          width: "100%",
          backgroundColor: "black",
          left: 0,
          right: 0,
          height: 50,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 5,
        }}
      >
        <View style={{ marginLeft: 10 }}>
          <Text style={{ color: "white", fontSize: 16, fontWeight: 700 }}>
            ₹ 8,759
          </Text>
          <Text style={{ color: "white", fontSize: 10, fontWeight: 400 }}>
            Incl of taxes and fees
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
          onPress={() => navigation.navigate("ReviewHotel")}
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

export default ReviewHotel;
