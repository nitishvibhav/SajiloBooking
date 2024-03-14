import { View, Text, Image } from 'react-native'
import React from 'react'

const ReviewInfoCard = () => {
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
      paddingBottom:10
    }}
  >
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginRight: 10,
        paddingVertical: 10,
      }}
    >
      <View>
        <Text style={{ marginLeft: 10, fontSize: 18, fontWeight: 700 }}>
          Sharda Residency
        </Text>
        <View style={{ flexDirection: "row", marginLeft: 10 }}>
          <Image
            source={require("../../images/ratedstar.png")}
            style={{ height: 10, width: 10, marginRight: 2 }}
          />
          <Image
            source={require("../../images/ratedstar.png")}
            style={{ height: 10, width: 10, marginRight: 2 }}
          />
          <Image
            source={require("../../images/ratedstar.png")}
            style={{ height: 10, width: 10, marginRight: 2 }}
          />
          <Image
            source={require("../../images/star.png")}
            style={{ height: 10, width: 10, marginRight: 2 }}
          />
          <Image
            source={require("../../images/star.png")}
            style={{ height: 10, width: 10, marginRight: 2 }}
          />
        </View>
        <Text style={{ marginLeft: 10, marginTop: 10, color: "#474747" }}>
          Lohanipur, Patna
        </Text>
      </View>
      <Image
        source={require("../../images/hoteloyo.jpg")}
        style={{ height: 80, width: 80, borderRadius: 10 }}
      />
    </View>
    <View
      style={{
        borderBottomColor: "#d6d6d6",
        borderBottomWidth: 1,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
      }}
    />
    <View style={{ marginTop: 10, marginHorizontal: 10, flexDirection:'row',justifyContent:'space-between' }}>
      <Text style={{color:'#717171',fontSize:12}}>CHECK-IN</Text>
      <Text style={{color:'#717171',fontSize:12}}>CHECK-OUT</Text>
    </View>
    <View style={{  marginHorizontal: 10, flexDirection:'row',justifyContent:'space-between',alignItems:'center' }}>
      <Text style={{color:'#414141',fontSize:12}}><Text style={{color:'#000000', fontSize:16, fontWeight:700}}>29 Feb</Text> 2024, Thu</Text>
      <View style={{borderRadius:50,borderWidth:1, borderColor:'#dbdbdb', paddingHorizontal:10, paddingVertical:2}}><Text style={{color:'#717171',fontSize:12}}>1 Night</Text></View>
      <Text style={{color:'#414141',fontSize:12}}><Text style={{color:'#000000', fontSize:16, fontWeight:700}}>1 March</Text> 2024, Fri</Text>
    </View>
    <View style={{  marginHorizontal: 10, flexDirection:'row',justifyContent:'space-between' }}>
    <Text style={{color:'#414141',fontSize:12}}>12 PM</Text>
    <Text style={{color:'#414141',fontSize:12}}>11 AM</Text>
  </View>
  <View
      style={{
        borderBottomColor: "#d6d6d6",
        borderBottomWidth: 1,
        margin:10,
        marginTop:20
      }}
    />
    <Text style={{marginLeft:10, color:'#a2a2a2', fontWeight:700}}>Guests & Rooms</Text>
    <Text style={{marginLeft:10, color:'#000000', fontWeight:700,  fontSize:16}}>2 Adults • 2 Rooms</Text>
  </View>
  )
}

export default ReviewInfoCard