import { View, Text } from "react-native";
import React from "react";
import CustomBottomNavigator from '../bottom/CustomBottomNavigator'
import BottomNavigator from "../bottom/BottomNavigator";

const Menu = () => {
  return (
    <View style={{ flex: 1 }}>
      <BottomNavigator />
    </View>
  );
};

export default Menu;
