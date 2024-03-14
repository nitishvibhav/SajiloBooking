import { View, Text } from 'react-native'
import React from 'react'

const OfferFilter = (props) => {
  return (
    <View
    style={{
      alignItems:'center',
      borderRadius: 6,
      borderWidth:1,
      borderColor:'grey',
      paddingHorizontal:10,
      marginBottom:10,
      marginLeft:10,
      marginTop:10,
      justifyContent:'center',
      height:30,
      backgroundColor:'white'
    }}
  >
    <Text style={{fontSize:12, color:'black',}}>{props.name}</Text>
  </View>
  )
}

export default OfferFilter