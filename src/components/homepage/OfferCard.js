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
        marginLeft: 10,
        borderColor: "#e2e7ed",
        borderWidth: 1,
      }}
    >
      <View style={{ alignSelf: "center" }}>
        <Image
          style={{ height: 110, width: 200, borderTopLeftRadius:6, borderTopRightRadius:6}}
          source={props.imagePlace}
        />
      </View>
      <Text style={styles.textHeader}>{props.place}</Text>
      <Text style={styles.title}>
        Register & Get Discount on First Booking Flight with us
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
    color:'#000'
  },
  title: {
    fontSize: 12,
    marginHorizontal: 10,
    marginTop: 5,
    color:'#000',
    fontWeight:'400'
  },
  text: {
    fontSize: 10,
    marginLeft: 10,
    marginBottom: 10,
    marginTop: 5,
    color:'#515151',
    fontWeight:'600'
  },
});

export default OfferCard;
