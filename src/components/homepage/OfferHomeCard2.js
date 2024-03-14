import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const OfferHomeCard2 = (props, ) => {

  const navigation= useNavigation();
  return (
    <TouchableOpacity
    style={{
      width: 250,
      borderRadius: 6,
      backgroundColor: "white",
      alignSelf: "center",
      padding: 10,
      borderWidth:1,
      borderColor:'#e2e7ed',
      margin:10,
    }}

    onPress={()=>navigation.navigate("offer")}
  >
    <View style={{ flexDirection: "row" }}>
      <Image
        source={props.offerImage}
        style={{ height: 80, width: 80, borderRadius: 6 }}
      />
      <View>
        <Text style={{ color: "#5b5b5b", marginLeft: 10 }}>{props.category}</Text>
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
              width: "80%",
              fontWeight: "700",
            }}
          >
            Get upto 35% OFF on international hotels!
          </Text>
          
        </View>
        <Text
          style={{
            color: "#515151",
            fontSize: 12,
            marginLeft: 10,
            marginTop: 5,
          }}
        >
          Valid till {props.date}
        </Text>
      </View>
    </View>
  
   
  </TouchableOpacity>
  )
}

export default OfferHomeCard2