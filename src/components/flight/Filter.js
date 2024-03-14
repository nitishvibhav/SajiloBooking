import { View, Text } from 'react-native'
import React from 'react'

const Filter = (props) => {
  return (
    <View
    style={{
      height: 40,
      marginLeft:10,
      alignItems:'center',
      borderRadius: 6,
      borderWidth:1,
      borderColor:'grey',
      padding:10
    }}
  >
    <Text style={{fontSize:12, color:'white',}}>{props.category}</Text>
  </View>
  )
}

export default Filter