import { View, Text, Image } from 'react-native'
import React from 'react'

const HotelFilter = (props) => {
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
  <View style={{flexDirection:'row'}}>
    <Text style={{fontSize:12, marginRight:4}}>{props.category}</Text>
    <Image source={require('../../images/down.png')}
    style={{height:12,width:12,alignSelf:'center'}}/>
    </View>
  </View>
  )
}

export default HotelFilter