import { View, Text, Image  } from 'react-native'
import React from 'react'

const ImportantInformation = () => {
  return (
    <View
    style={{
      height: 210,
      width: "95%",
      borderRadius: 6,
      backgroundColor: "white",
      margin: 10,
      elevation: 5,
      shadowColor: "grey",
      alignSelf: "center",
    }}
  >
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 10,
        marginRight: 20,
        marginLeft: 20,
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: 700 }}>Important Information</Text>
      
    </View>
    <View
      style={{
        flexDirection: "row",
        marginBottom: 7,
       marginTop:10,
        alignItems: "center",
        width:'90%'
      }}
    >
      <Image
        source={require("../../images/bag.png")}
        style={{ height: 20, width: 20, tintColor: "grey", marginLeft: 20 }}
      />
      <Text style={{ marginLeft: 10, fontSize: 14, fontWeight: 700 }}>
      Check travel guidelines and baggage information below:
      </Text>
      
    </View>
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        width:'90%'
      }}
    >
    <Text style={{  marginLeft: 30, fontSize:26 }}>•</Text>
      <Text style={{ marginLeft: 10, fontSize: 12, fontWeight: 600 , textDecorationLine: 'underline'}}>
      Carry no more than 1 check-in baggage and 1 hand baggage per passenger. If violated, airline may levy extra charges.
      
      </Text>
     
      
    </View>
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        width:'90%'
      }}
    >
    <Text style={{  marginLeft: 30 , fontSize:26}}>•</Text>
      <Text style={{ marginLeft: 10, fontSize: 12 }}>
      Wearing a mask/face cover is no longer mandatory. However, all travellers are advised to do so as a precautionary measure.
      </Text>
      
    </View>
  </View>
  )
}

export default ImportantInformation