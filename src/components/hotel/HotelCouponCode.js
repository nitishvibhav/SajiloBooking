import { View, Text,Image, ScrollView } from 'react-native'
import React from 'react'
import CouponCode from './CouponCode'

const HotelCouponCode = () => {
  return (
    <View
    style={{
      width: "95%",
      borderRadius: 6,
      backgroundColor: "white",
      alignSelf: "center",
      marginTop: 10,
      elevation: 5,
      shadowColor: "grey",
      marginBottom: 10,
    }}
  >
    <Text
      style={{ marginTop: 10, fontSize: 18, fontWeight: 700, marginLeft: 10 }}
    >
      Coupon Codes
    </Text>
   <ScrollView showsHorizontalScrollIndicator={false} horizontal
   style={{width:'95%',alignSelf:'center'}}>
   <CouponCode/>
   <CouponCode/>
   </ScrollView>
  </View>
  )
}

export default HotelCouponCode