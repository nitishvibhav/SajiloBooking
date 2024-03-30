import { View, Text, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import NeedHelp from "./NeedHelp";
import Profile from "./Profile";
import Offer from "./Offer";
import MyTrips from "./Mytrip";
import HomePage from "../HomePage";

const Bottom = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Bottom.Navigator >
      <Bottom.Screen
        name="Home"
        component={HomePage}
        options={{ headerShown: false, tabBarIcon: ({ focused }) => (
            <Image
            source={focused ? require("../../../assets/home_footer_color.png") : require("../../../assets/home_footer.png")}
            style={{
              width: 30,
              height: 30,
            }}
            
          />
        )} }
      />
      <Bottom.Screen
        name="MyTrip"
        component={MyTrips}
        options={{ headerShown: false, tabBarIcon: ({ focused }) => (
          <Image
          source={focused ? require("../../../assets/Mytrips_footer_color.png") : require("../../../assets/mytrips_footer.png")}
          style={{
            width: 30,
            height: 30,
          }}
          
        />
      )} }
      />
      <Bottom.Screen
        name="Offer"
        component={Offer}
        options={{ headerShown: false, tabBarIcon: ({ focused }) => (
          <Image
          source={focused ? require("../../../assets/offer_footer_color.png") : require("../../../assets/offer_footer.png")}
          style={{
            width: 30,
            height: 30,
          }}
          
        />
      )} }
      />
      <Bottom.Screen
        name="NeedHelp"
        component={NeedHelp}
        options={{ headerShown: false, tabBarIcon: ({ focused }) => (
          <Image
          source={focused ? require("../../../assets/neephelp_footer_color.png") : require("../../../assets/needhelp_footer-04.png")}
          style={{
            width: 30,
            height: 30,
          }}
          
        />
      )} }
      />
      <Bottom.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false,  tabBarIcon: ({ focused }) => (
          <Image
          source={focused ? require("../../../assets/myaccount_footer_color.png") : require("../../../assets/myaccount_footer.png")}
          style={{
            width: 30,
            height: 30,
          }}
          
        />
      )} }
      />
    </Bottom.Navigator>
  );
};

export default BottomNavigator;
