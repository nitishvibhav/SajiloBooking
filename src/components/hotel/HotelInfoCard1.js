import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const HotelInfoCard1 = () => {
  return (
    <TouchableOpacity
      style={{
        width: "95%",
        borderRadius: 6,
        backgroundColor: "white",
        alignSelf: "center",
        marginTop: 20,
        elevation: 5,
        shadowColor: "grey",
      }}
    >
      <Text
        style={{
          color: "#000000",
          fontSize: 20,
          fontWeight: 700,
          marginTop: 10,
          marginLeft: 10,
        }}
      >
        Regenta Inn Larica
      </Text>
      <View style={{ flexDirection: "row", marginLeft: 10 }}>
        <Image
          source={require("../../images/ratedstar.png")}
          style={{ height: 10, width: 10, marginRight: 2 }}
        />
        <Image
          source={require("../../images/ratedstar.png")}
          style={{ height: 10, width: 10, marginRight: 2 }}
        />
        <Image
          source={require("../../images/ratedstar.png")}
          style={{ height: 10, width: 10, marginRight: 2 }}
        />
        <Image
          source={require("../../images/star.png")}
          style={{ height: 10, width: 10, marginRight: 2 }}
        />
        <Image
          source={require("../../images/star.png")}
          style={{ height: 10, width: 10, marginRight: 2 }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          alignItems: "center",
          marginLeft: 10,
          marginRight: 10,
          justifyContent:'space-between'
        }}
      >
      <View style={{flexDirection:'row'}}>
        <View
          style={{
            backgroundColor: "#0d58b5",
            borderRadius: 6,
            marginRight: 10,
          }}
        >
          <Text
            style={{
              margin: 5,
              marginLeft: 10,
              marginRight: 10,
              color: "#ffffff",
              fontWeight: 700,
            }}
          >
            3.5
          </Text>
        </View>
        <View style={{ marginRight: 40 }}>
          <Text style={{ color: "#2974c8", fontWeight: 700 }}>
            Very Good{" "}
            <Text style={{ color: "#4f4f4f", fontWeight: 400 }}>
              (1518 Ratings)
            </Text>
          </Text>
          <Text style={{ fontSize: 12, color: "#4f4f4f" }}>
            59% Guests rated this hotel 4 and ....
          </Text>
        </View>
        </View>
        <View style={{ justifyContent: "flex-end" }}>
          <Image
            source={require("../../images/next.png")}
            style={{ height: 20, width: 20, tintColor: "#46a8e9" }}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          alignItems: "center",
          marginLeft: 10,
          marginRight: 10,
          justifyContent:'space-between'
        }}
      >
      <View style={{flexDirection:'row'}}>
        <View
          style={{
            marginRight: 10,
            alignSelf:'center'
          }}
        >
          <Image
            source={require("../../images/pin.png")}
            style={{
              height: 27,
              width: 40,
              borderRadius: 8,
              tintColor: "#0a5ab1",
              resizeMode: "cover",
            }}
          />
        </View>
        <View style={{ marginRight: 30 }}>
          <Text style={{ color: "#3c3c3c", fontWeight: 700 }}>
            Chinar Park, Kolkata
          </Text>
          <Text style={{ fontSize: 12, color: "#4f4f4f" }}>
            4.1 Km from Netaji Subhash Chandra ...
          </Text>
        </View>
        </View>
        <View style={{ justifyContent: "flex-end" }}>
          <Image
            source={require("../../images/next.png")}
            style={{ height: 20, width: 20, tintColor: "#46a8e9" }}
          />
        </View>
      </View>
      <View
        style={{
          borderBottomColor: "#d6d6d6",
          borderBottomWidth: 1,
          marginLeft: 10,
          marginRight: 10,
          marginTop: 20,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
          marginLeft: 10,
          marginRight: 10,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: 700 }}>
          Travel Dates & Guests
        </Text>
        <Text style={{ color: "#068af9" , marginRight:10}}>View calendar</Text>
      </View>
      <View style={{ flexDirection: "row", marginLeft: 10 }}>
        <Text style={{ color: "#787878", fontWeight: 500, marginRight: 10 }}>
          Check-In:{" "}
          <Text style={{ color: "#787878", fontWeight: 400 }}>11 AM</Text>
        </Text>
        <Text style={{ color: "#787878", fontWeight: 500 }}>
          Check-Out:{" "}
          <Text style={{ color: "#787878", fontWeight: 400 }}>10 AM</Text>
        </Text>
      </View>
      <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignSelf: "center",
            width: "95%",
            marginBottom:10
          }}
        >
          <TouchableOpacity
            style={{
              height: 45,
              width: "49%",
              flexDirection: "row",
              marginTop: 10,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "#dadada",
              alignItems: "center",
              backgroundColor: "#f7f7f7",
            }}
            
          >
            <View style={{ height: "90%", width: "15%", marginRight:10 }}>
              <Image
                source={require("../../images/calendar.png")}
                style={{
                  height: 20,
                  width: 20,
                  alignSelf: "center",
                  marginTop: 10,
                  marginLeft: 10,
                 
                }}
              />
            </View>
           <Text style={{color:'#087de6', fontWeight:500, fontSize:16}}>23Feb - 24Feb</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 45,
              width: "49%",
              flexDirection: "row",
              marginTop: 10,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "#dadada",
              alignItems: "center",
              backgroundColor: "#f7f7f7",
            }}
            
          >
            <View style={{ height: "90%", width: "15%", marginRight:10 }}>
              <Image
                source={require("../../images/user.png")}
                style={{
                  height: 20,
                  width: 20,
                  alignSelf: "center",
                  marginTop: 10,
                  marginLeft: 10,
                }}
              />
            </View>
           <Text style={{color:'#087de6', fontWeight:500, fontSize:14}}>4 Guests/2 Rooms</Text>
          </TouchableOpacity>
        </View>
    </TouchableOpacity>
  );
};

export default HotelInfoCard1;
