import { View, Text, Image } from "react-native";
import React from "react";

const TripSecureComment = () => {
  return (
    <View
      style={{
        backgroundColor: "#f7f7f7",
        width: 200,
        marginTop: 5,
        marginBottom: 10,
        paddingBottom: 10,
        marginRight: 5,
      }}
    >
      <Image
        source={require("../../images/quotation.png")}
        style={{ width: 20, height: 20, tintColor: "#e2e2e2", marginLeft: 10 }}
      />
      <Text
        style={{
          color: "#4b4b4b",
          fontSize: 12,
          marginLeft: 10,
          marginRight: 5,
        }}
      >
        Your willingness to go above and beyond what was expected made a
        significante......
      </Text>
      <Text style={{fontSize:12, fontWeight:600, color:'#4b4b4b', alignSelf:'flex-end', marginRight:10}}> ~ Amit Paul</Text>
    </View>
  );
};

export default TripSecureComment;
