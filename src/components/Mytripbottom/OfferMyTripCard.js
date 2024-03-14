import { View, Text, Image } from 'react-native'
import React from 'react'

const OfferMytripCard = () => {
  return (
    <View
    style={{
      width: 300,
      borderRadius: 6,
      backgroundColor: "white",
      alignSelf: "center",
      padding: 10,
      borderWidth:1,
      borderColor:'#e2e7ed',
      margin:10,
    }}
  >
    <View style={{ flexDirection: "row" }}>
      <Image
        source={require("../../../assets/offerimage.jpg")}
        style={{ height: 80, width: 80, borderRadius: 6 }}
      />
      <View>
        <Text style={{ color: "#5b5b5b", marginLeft: 10 }}>Hotels</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginRight: 20,
          }}
        >
          <Text
            style={{
              color: "#000",
              marginLeft: 10,
              width: "67%",
              fontWeight: "700",
            }}
          >
            Get upto 35% OFF on international hotels!
          </Text>
          <Image
            source={require("../../../assets/next.png")}
            style={{ height: 20, width: 20 ,}}
          />
        </View>
        <Text
          style={{
            color: "#515151",
            fontSize: 12,
            marginLeft: 10,
            marginTop: 5,
          }}
        >
          Valid till 6th March'24
        </Text>
      </View>
    </View>
    <View
      style={{
        borderStyle: "dashed",
        borderWidth: 1,
        borderRadius: 1,
        marginTop: 10,
        borderColor: "#ececec",
      }}
    />
    <View
      style={{
        flexDirection: "row",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <Text
        style={{
          marginTop: 10,
          fontSize: 12,
          fontWeight: 700,
          color: "#1f70db",
        }}
      >
        Copy & Book: DONTMISS
      </Text>
      <Image
        style={{
          height: 14,
          width: 14,
          resizeMode: "contain",
          alignSelf: "center",
          marginLeft: 5,
          marginTop: 10,
          tintColor: "#1f70db",
        }}
        source={require("../../../assets/copy.png")}
      />
    </View>
  </View>
  )
}

export default OfferMytripCard