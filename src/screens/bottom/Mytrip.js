import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import OfferMytripCard from "../../components/Mytripbottom/OfferMyTripCard";

const MyTrips = () => {
  return (
    <View style={{ backgroundColor: "#d1e5fe", flex: 1 }}>
      <View
        style={{ flexDirection: "row", backgroundColor: "white", padding: 20 }}
      >
        <Image
          source={require("../../../assets/back.png")}
          style={{ height: 20, width: 20 }}
        />
        <Text style={{ marginLeft: 20, fontSize: 16, fontWeight: 600 }}>
          My Trips
        </Text>
      </View>
      <Image
        source={require("../../../assets/mytrip6.png")}
        style={{ alignSelf: "center", marginTop: 10 }}
      />
      <Text style={{ fontSize: 14, alignSelf: "center", fontWeight: "500" }}>
        You have no upcoming trips!
      </Text>
      <Text
        style={{
          fontSize: 12,
          alignSelf: "center",
          fontWeight: "500",
          textAlign: "center",
          marginHorizontal: 30,
          color: "#5e697b",
          marginTop: 10,
        }}
      >
        Here are some amazing offers to kickstart your trip planning
      </Text>

      <View
        style={{
          backgroundColor: "white",
          width: "95%",
          alignSelf: "center",
          height: 250,
          marginTop: 20,
          borderRadius:6
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ margin: 10, fontSize: 16, fontWeight: 800 }}>
            Offers for your first trip
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                margin: 10,
                fontSize: 16,
                fontWeight: 800,
                color: "#2375e1",
              }}
            >
              View All
            </Text>
            <Image
              source={require("../../../assets/next.png")}
              style={{
                width: 20,
                height: 20,
                marginVertical: 10,
                marginRight: 10,
                tintColor: "#2375e1",
              }}
            />
          </View>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <OfferMytripCard />
          <OfferMytripCard />
          <OfferMytripCard />
          <OfferMytripCard />
        </ScrollView>
      </View>
    </View>
  );
};

export default MyTrips;
