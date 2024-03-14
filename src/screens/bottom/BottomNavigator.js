import { View, Text, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import NeedHelp from "../NeedHelp";
import Profile from "../Profile";
import Offer from "../Offer";
import MyTrips from "../MyTrips";
import HomePage from "../HomePage";

const Bottom = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Bottom.Navigator >
      <Bottom.Screen
        name="HomePage"
        component={HomePage}
        options={{ headerShown: false, tabBarIcon:(tabInfo)=>{return (
            <Image
            source={require("../../images/home.png")}
            style={{
              width: 18,
              height: 18,
              tintColor:tabInfo.focused ? "orange" : "black",
            }}
            
          />
        )} }}
      />
      <Bottom.Screen
        name="MyTrip"
        component={MyTrips}
        options={{ headerShown: false, tabBarIcon:(tabInfo)=>{return (
            <Image
            source={require("../../images/briefcase.png")}
            style={{
              width: 18,
              height: 18,
              tintColor:tabInfo.focused ? "orange" : "black",
            }}
          />
        )} }}
      />
      <Bottom.Screen
        name="Offer"
        component={Offer}
        options={{ headerShown: false, tabBarIcon:(tabInfo)=>{return (
            <Image
            source={require("../../images/discount.png")}
            style={{
              width: 18,
              height: 18,
              tintColor:tabInfo.focused ? "orange" : "black",
            }}
          />
        )} }}
      />
      <Bottom.Screen
        name="NeedHelp"
        component={NeedHelp}
        options={{ headerShown: false, tabBarIcon:(tabInfo)=>{return (
            <Image
            source={require("../../images/phone-call.png")}
            style={{
              width: 18,
              height: 18,
              tintColor:tabInfo.focused ? "orange" : "black",
            }}
          />
        )} }}
      />
      <Bottom.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false,  tabBarIcon:(tabInfo)=>{return (
            <Image
            source={require("../../images/user.png")}
            style={{
              width: 18,
              height: 18,
              tintColor:tabInfo.focused ? "orange" : "black",
            }}
          />
        )} }}
      />
    </Bottom.Navigator>
  );
};

export default BottomNavigator;
