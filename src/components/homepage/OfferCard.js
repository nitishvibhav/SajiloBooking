import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const OfferCard = (props) => {
  return (
    <View
      style={{
        width: 200,
        borderRadius: 6,
        backgroundColor: "white",
        justifyContent: "center",
        margin: 10,
        borderColor: "#e2e7ed",
        borderWidth: 1,
      }}
    >
      <View style={{ alignSelf: "center" }}>
        <Image
          style={{ height: 120, width: 180, borderRadius: 6, marginTop: 10 }}
          source={props.imagePlace}
        />
      </View>
      <Text style={styles.textHeader}>{props.place}</Text>
      <Text style={styles.title}>
        Register & Get Discount on Booking First Flight with us
      </Text>
      <Text style={styles.text}>Valid till: {props.date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 10,
    marginTop: 10,
  },
  title: {
    fontSize: 11,
    marginHorizontal: 10,
    marginTop: 5,
  },
  text: {
    fontSize: 10,
    marginLeft: 10,
    marginBottom: 10,
    marginTop: 5,
    color:'#515151'
  },
});

export default OfferCard;
