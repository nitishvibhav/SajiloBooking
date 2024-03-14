import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import OfferFilter from "../../components/offerpagebottom/OfferFilter";
import OfferHomeCard from "../../components/offerpagebottom/OfferHomeCard";

const Offer = () => {
  return (
    <View style={{ backgroundColor: "#eff2f7" }}>
      <View style={{ backgroundColor: "white", paddingBottom: 10 }}>
        <Text
          style={{
            color: "#1b1b1b",
            alignSelf: "center",
            marginTop: 10,
            fontSize: 18,
            fontWeight: 700,
          }}
        >
          My Offers
        </Text>
      </View>
      <ScrollView
        style={{ width: "100%" }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <Image
          source={require("../../../assets/offerimage2.jpg")}
          style={{
            height: 100,
            width: 340,
            alignSelf: "center",
            marginTop: 20,
            borderRadius: 6,
            marginLeft: 10,
            marginBottom: 20,
          }}
        />
        <Image
          source={require("../../../assets/offerimage2.jpg")}
          style={{
            height: 100,
            width: 340,
            alignSelf: "center",
            marginVertical: 20,
            borderRadius: 6,
            resizeMode: "cover",
            marginHorizontal: 10,
          }}
        />
        <Image
          source={require("../../../assets/offerimage2.jpg")}
          style={{
            height: 100,
            width: 340,
            alignSelf: "center",
            marginVertical: 10,
            borderRadius: 6,
            resizeMode: "cover",
          }}
        />
      </ScrollView>
      <ScrollView horizontal style={{ width: "95%", alignSelf: "center" }}>
        <OfferFilter name="All" />
        <OfferFilter name="Bank Offers" />
        <OfferFilter name="Flights" />
        <OfferFilter name="Hotels" />
        <OfferFilter name="Holiday package" />
      </ScrollView>
      <ScrollView
        style={{ marginTop: 10 }}
        showsVerticalScrollIndicator={false}
      >
        <OfferHomeCard />
        <OfferHomeCard />
        <OfferHomeCard />
        <OfferHomeCard />
        <OfferHomeCard />
        <OfferHomeCard />
        <OfferHomeCard />
      </ScrollView>
    </View>
  );
};

export default Offer;
