import { View, Text, Image } from 'react-native'
import React from 'react'

const SmallCard = () => {
  return (
    <View
    style={{
      backgroundColor: '#c1f0dc',
      width: '95%',
      borderRadius: 6,
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'center',
      marginTop: 10,
      padding: 10,
    }}>
    <Image
      source={require('../../images/discount.png')}
      style={{
        height: 20,
        width: 20,
        tintColor: '#0a6057',
        marginRight: 20,
        marginLeft: 10,
      }}
    />
    <Text style={{color: '#207e70', fontSize: 12, marginRight: 10}}>
      Get FLAT 13% OFF* on your first flight booking! Use code:
      WELCOMESAJILO{' '}
    </Text>
  </View>
  )
}

export default SmallCard