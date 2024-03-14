import { View, Text } from "react-native";
import React from "react";

const DateWithPrice = (props) => {
  return (
    <View
      style={{
        height: 35,
        width: 80,
        alignItems:'center',
        borderRadius: 6,
        marginRight: 5,
        borderWidth:1,
        borderColor:'#ccc'
      }}
    >
      <Text style={{fontSize:12}}>{props.date}</Text>
      <Text style={{fontSize:12}}>{props.price}</Text>
    </View>
  );
};

export default DateWithPrice;
