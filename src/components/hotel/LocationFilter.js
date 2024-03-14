import { View, Text } from 'react-native'
import React from 'react'

const LocationFilter = (props) => {
  return (
    <View
    style={{
      
      marginLeft:10,
      alignItems:'center',
      borderRadius: 6,
      borderWidth:1,
      borderColor:'#3b81a3',
      padding:7,
      justifyContent:'center'
    }}
  >
    <Text style={{fontSize:14, color:'#0e88eb',fontWeight:700}}>{props.category}</Text>
  </View>
  )
}

export default LocationFilter