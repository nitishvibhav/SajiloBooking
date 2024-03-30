import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import Offer from "./Offer";
import MyTrips from "./Mytrip";
import NeedHelp from "./NeedHelp";
import Profile from "./Profile";
import HomePage from "../HomePage";

const CustomBottomNavigator = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <View style={{ flex: 1 }}>
      {selectedTab == 0 ? (
        <HomePage />
      ) : selectedTab == 1 ? (
        <Offer />
      ) : selectedTab == 2 ? (
        <MyTrips />
      ) : selectedTab == 3 ? (
        <NeedHelp />
      ) : (
        <Profile />
      )}

      <View
        style={{
          flexDirection: "row",
          backgroundColor: "black",
          alignItems: "center",
          height: 45,
          position: "absolute",
          bottom: 0,
          width: "100%",
          alignSelf:'center',
         
        }}
      >
        <TouchableOpacity
          style={{
            height: "100%",
            width: "20%",
            justifyContent: "center",
            alignItems: "center",
            borderBottomWidth: selectedTab == 0 ? 2 : 0,
            
          }}
          onPress={() => setSelectedTab(0)}
        >
          <Image
            source={require("../../../assets/home.png")}
            style={{
              width: 18,
              height: 18,
              tintColor: selectedTab == 0 ? "orange" : "white",
            }}
          />
          <Text
            style={{
              color: selectedTab == 0 ? "orange" : "white",
              fontSize: 12,
              fontStyle: "italic",
            }}
          >
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            height: "100%",
            width: "20%",
            justifyContent: "center",
            alignItems: "center",
            borderBottomWidth: selectedTab == 2 ? 2 : 0,
          }}
          onPress={() => setSelectedTab(2)}
        >
          <Image
            source={require("../../../assets/briefcase.png")}
            style={{
              width: 18,
              height: 18,
              tintColor: selectedTab == 2 ? "orange" : "white",
            }}
          />
          <Text
            style={{
              color: selectedTab == 2 ? "orange" : "white",
              fontSize: 12,
              fontStyle: "italic",
            }}
          >
            My Trips
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: "100%",
            width: "20%",
            justifyContent: "center",
            alignItems: "center",
            borderBottomWidth: selectedTab == 1 ? 2 : 0,
          }}
          onPress={() => setSelectedTab(1)}
        >
          <View
            style={{
              height: 40,
              width: 40,
              backgroundColor: "black",
              justifyContent: "center",
              alignItems: "center",
              marginTop: -20,
              borderRadius:80,
         
            }}
          >
            <Image
              source={require("../../../assets/discount.png")}
              style={{
                width: 25,
                height: 25,
                tintColor: selectedTab == 1 ? "orange" : "white",
              }}
            />
          </View>
          <Text
            style={{
              color: selectedTab == 1 ? "orange" : "white",
              fontSize: 12,
              fontStyle: "italic",
            }}
          >
            Offer
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: "100%",
            width: "20%",
            justifyContent: "center",
            alignItems: "center",
            borderBottomWidth: selectedTab == 3 ? 2 : 0,
          }}
          onPress={() => setSelectedTab(3)}
        >
          <Image
            source={require("../../../assets/needhelp.png")}
            style={{
              width: 18,
              height: 18,
              tintColor: selectedTab == 3 ? "orange" : "white",
            }}
          />
          <Text
            style={{
              color: selectedTab == 3 ? "orange" : "white",
              fontSize: 12,
              fontStyle: "italic", 
            }}
          >
            Need Help
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: "100%",
            width: "20%",
            justifyContent: "center",
            alignItems: "center",
            borderBottomWidth: selectedTab == 4 ? 2 : 0,
          }}
          onPress={() => setSelectedTab(4)}
        >
          <Image
            source={require("../../../assets/user.png")}
            style={{
              width: 18,
              height: 18,
              tintColor: selectedTab == 4 ? "orange" : "white",
            }}
          />
          <Text
            style={{
              color: selectedTab == 4 ? "orange" : "white",
              fontSize: 12,
              fontStyle: "italic",
            }}
          >
            Profile
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomBottomNavigator;
