import { View, Text, Image } from 'react-native'
import React from 'react'

const LocationCard = () => {
  return (
    <View
    style={{
      height: 200,
      width: 330,
      borderRadius: 6,
      backgroundColor: "white",
      justifyContent: "center",
      margin: 10,
      elevation: 5,
      shadowColor: "grey",
    }}
  >

    <Image 
    source={require('../../images/hawamahal.jpg')}
    style={{ width:'100%', alignSelf:'center', borderRadius:10, height:200 }}/>
  
  </View>
  )
}

export default LocationCard