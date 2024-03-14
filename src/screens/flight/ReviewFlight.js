import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import BaggagePolicy from "../../components/flight/BaggagePolicy";
import CancellationPolicy from "../../components/flight/CancellationPolicy";
import ImportantInformation from "../../components/flight/ImportantInformation";
import PromoOffer from "../../components/flight/PromoOffer";
import TripSecure from "../../components/flight/TripSecure";
import ConfirmFlight from "../../components/flight/ConfirmFlight";
import TravellerDetail from "../../components/flight/TravellerDetail";

const ReviewFlight = () => {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ backgroundColor: "#f9facf" }}>
          <View
            style={{
              flexDirection: "row",
              margin: 20,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../images/back.png")}
              style={{ height: 20, width: 20 }}
            />
            <View style={{ alignItems: "center" }}>
              <Text>Trip to</Text>
              <Text style={{ fontSize: 16, fontWeight: 800 }}>Mumbai</Text>
            </View>
            <Image
              source={require("../../images/share.png")}
              style={{ height: 20, width: 20 }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              marginLeft: 20,
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <View
              style={{
                height: 35,
                width: 35,
                marginRight: 20,
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../../images/indigologo.png")}
                style={{ height: 30, width: 30, alignSelf: "center" }}
              />
            </View>
            <View>
              <Text style={{ fontSize: 14, fontWeight: 700 }}>DEL-BOM</Text>
              <Text style={{ fontSize: 12, fontWeight: 500 }}>
                Fri, 16 Feb|22:15-00:25|2h 10m|Non Stop
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              width: "90%",
              alignItems: "center",
              marginTop: 30,
              borderWidth: 1,
              borderColor: "grey",
              padding: 10,
              borderRadius: 50,
              alignSelf: "center",
              marginBottom: 10,
            }}
          >
            <Text>VIEW FLIGHT & FAIR DETAILS</Text>
          </TouchableOpacity>
          <BaggagePolicy />
          <CancellationPolicy />
        </View>
        <View style={{ backgroundColor: "#b8d2fc" }}>
          <ImportantInformation />
          <PromoOffer />
          <TripSecure />
          <TravellerDetail />
          <ConfirmFlight />
        </View>
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
        }}
      >
        <View style={{ marginLeft: 20 }}>
          <Text style={{ color: "white", fontSize: 14, fontWeight: 700 }}>
            ₹ 11,076
          </Text>
          <Text style={{ color: "white", fontSize: 10, fontWeight: 400 }}>
            For 1 Adult
          </Text>
        </View>
        <TouchableOpacity
          style={{
            width: "35%",
            borderWidth: 1,
            borderColor: "white",
            alignItems: "center",
           padding:5,
            marginRight: 20,
            borderRadius: 40,
            backgroundColor: "orange",
          }}
        >
          <Text style={{ color: "white", fontSize: 20, fontWeight: 700, alignSelf:'center' }}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReviewFlight;
