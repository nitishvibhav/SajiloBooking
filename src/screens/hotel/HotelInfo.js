import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import HotelInfoCard1 from "../../components/hotel/HotelInfoCard1";
import AmenitiesCard from "../../components/hotel/AmenitiesCard";
import NoCostEmiCard from "../../components/hotel/NoCostEmiCard";
import PropertyRulesCard from "../../components/hotel/PropertyRulesCard";
//import HotelLocation from "../../components/hotel/HotelLocation";
import PropertyHighlightCard from "../../components/hotel/PropertyHighlightCard";
import HotelCouponCode from "../../components/hotel/HotelCouponCode";
import ReviewRating from "../../components/hotel/ReviewRating";
import { useNavigation } from "@react-navigation/native";

const HotelInfo = () => {
  const navigation = useNavigation();
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            marginLeft: 20,
            marginRight: 20,
            marginBottom: 10,
            justifyContent: "space-between",
          }}
        >
          <Image
            source={require("../../images/back.png")}
            style={{
              height: 20,
              width: 20,
              resizeMode: "contain",
              tintColor: "#6d6d6d",
            }}
          />

          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../../images/search.png")}
              style={{
                height: 20,
                width: 20,
                resizeMode: "contain",
                tintColor: "#6d6d6d",
                marginRight: 10,
              }}
            />
            <Image
              source={require("../../images/share1.png")}
              style={{
                height: 20,
                width: 20,
                resizeMode: "contain",
                tintColor: "#6d6d6d",
                marginRight: 10,
              }}
            />
            <Image
              source={require("../../images/love.png")}
              style={{
                height: 20,
                width: 20,
                tintColor: "#6d6d6d",
              }}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "95%",
            alignSelf: "center",
            justifyContent: "space-between",
            height: 200,
            marginTop: 10,
          }}
        >
          <View
            style={{ width: "49%",  borderRadius: 10 }}
          >
            <Image
              source={require("../../images/hoteloyo.jpg")}
              style={{
                height: "100%",
                width: "100%",
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
              }}
            />
          </View>
          <View
            style={{
              width: "49%",
              height: "100%",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                height: "49%",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  backgroundColor: "blue",
                  height: "95%",
                  width: "48%",
                  borderRadius: 10,
                }}
              >
                <Image
                  source={require("../../images/hoteloyo.jpg")}
                  style={{
                    height: "100%",
                    width: "100%",
                    borderTopLeftRadius: 10,
                  }}
                />
              </View>
              <View
                style={{
                  backgroundColor: "brown",
                  height: "95%",
                  width: "48%",
                  borderRadius: 10,
                }}
              >
                <Image
                  source={require("../../images/hoteloyo.jpg")}
                  style={{
                    height: "100%",
                    width: "100%",
                    borderTopRightRadius: 10,
                  }}
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                height: "49%",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  backgroundColor: "blue",
                  width: "48%",
                  borderRadius: 10,
                }}
              >
                <Image
                  source={require("../../images/hoteloyo.jpg")}
                  style={{
                    height: "100%",
                    width: "100%",
                    borderBottomLeftRadius: 10,
                  }}
                />
              </View>
              <View
                style={{
                  backgroundColor: "brown",
                  width: "48%",
                  borderRadius: 10,
                }}
              >
                <Image
                  source={require("../../images/hoteloyo.jpg")}
                  style={{
                    height: "100%",
                    width: "100%",
                    borderBottomRightRadius: 10,
                  }}
                />
                <View
                  style={{
                    backgroundColor: "rgba(0,0,0,0.4)",
                    flex: 1,
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    borderBottomRightRadius: 10,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{ color: "#fff", fontSize: 16, fontWeight: 500 }}
                  >
                    +151 Property & Guests Photos
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <HotelInfoCard1 />
        <NoCostEmiCard />
        <AmenitiesCard />
        
        <PropertyHighlightCard />
        <HotelCouponCode />
        <ReviewRating />
        <PropertyRulesCard />
        <View
          style={{
            width: "95%",
            borderRadius: 6,
            backgroundColor: "white",
            alignSelf: "center",
            marginTop: 10,
            elevation: 5,
            shadowColor: "grey",
            marginBottom: 80,
          }}
        >
          <View
            style={{ flexDirection: "row", alignItems: "center", width: "95%" }}
          >
            <View
              style={{
                height: 30,
                width: 30,
                marginLeft: 10,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#ebf5ff",
                borderRadius:50
              }}
            >
              <Image
                source={require("../../images/email.png")}
                style={{ height: 20, width: 20, resizeMode:'contain' }}
              />
            </View>
            <View>
              <Text
                style={{
                  marginLeft: 10,
                  marginTop: 10,
                  fontSize: 18,
                  fontWeight: 700,
                }}
              >
                Did we miss any information?
              </Text>
              <Text
                style={{
                  marginLeft: 10,
                  marginBottom: 10,
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#009aff",
                }}
              >
                We'd love to know from you?
              </Text>
            </View>
          </View>
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
          height: 60,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 5,
        }}
      >
        <View style={{ marginLeft: 10 }}>
          <Text style={{ color: "white", fontSize: 14, fontWeight: 700 }}>
            ₹ 6,294
          </Text>
          <Text style={{ color: "white", fontSize: 10, fontWeight: 400 }}>
            + ₹755 taxes and fees
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
          onPress={()=>navigation.navigate('SelectRoom')}
        >
          <Text
            style={{
              color: "white",
              fontSize: 16,
              fontWeight: 700,
              alignSelf: "center",
            }}
          >
            SELECT ROOM
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HotelInfo;
