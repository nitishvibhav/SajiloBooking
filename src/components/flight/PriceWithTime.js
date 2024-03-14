import { View, Text } from 'react-native'
import React from 'react'

const PriceWithTime = (props) => {
  return (
    <View
      style={{
        height: 35,
        width: 100,
        alignItems:'center',
        borderRadius: 6,
        marginRight: 5,
        borderWidth:1,
        borderColor:'#abdef5'
      }}
    >
    <View style={{alignItems:'center',justifyContent:'center', }}>
      <Text style={{fontSize:12, fontWeight:600}}>{props.type}</Text>
      <Text style={{fontSize:12,}}>{props.price} | {props.time}</Text>
      </View>
    </View>
  )
}

export default PriceWithTime