import { View, Text,Image } from 'react-native'
import React from 'react'

const HotelCard3 = () => {
  return (
    <View
    style={{
      width: "70%",
      borderRadius: 6,
      backgroundColor: "white",
      marginLeft:10,
      marginTop:20,
      borderColor:'#d3d7d8',
      paddingBottom:10, marginBottom:20,
      borderWidth:1,
    }}
   
  >
    <Image
      style={{
        height: 100,
        width: "100%",
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
      }}
      source={require("../images/hoteloyo.jpg")}
    />
   
    
    <View style={{ flexDirection: "row", justifyContent: "space-between" ,marginTop:10, marginBottom:10}}>
      <View>
        <View style={{ }}>
          <Text style={{fontSize:16, fontWeight:600}}> Regenta Inn Larica</Text>
          <Text style={{fontSize:16, fontWeight:600}}> Kolkata Rajarhat</Text>
        </View>
        
      </View>
      <View style={{ justifyContent: "flex-end", width:'40%' }}>
        <View style={{ marginRight: 10, alignItems: "flex-end" }}>
          <Text style={{ fontSize: 16, fontWeight: 700 }}>₹ 20,998</Text>
        </View>
        <View style={{ marginRight: 10, alignItems: "flex-end" }}>
          <Text style={{ fontSize: 12, color: "#626262", textAlign:'right' }}>
            Per Night for 2 Rooms
          </Text>
        </View>
      </View>
    </View>
    <View style={{marginLeft:10}}>
    <Text style={{fontSize:12}}>New Town | 9.3 km from</Text>
    <Text style={{fontSize:12}}>Shubhash Chandra Bose....</Text>
    </View>
   
    </View>
  )
}

export default HotelCard3