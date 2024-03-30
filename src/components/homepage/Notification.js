import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Notification = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          marginVertical: 10,
          marginHorizontal: 20,
        }}
      >
        <View
          style={{
            borderWidth: 1,
            borderColor: "grey",
            marginRight: 10,
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 6,
            backgroundColor: "white",
          }}
        >
          <Text>All</Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "grey",
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 6,
            backgroundColor: "white",
          }}
        >
          <Text>Offer</Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "white",
          width: "100%",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            backgroundColor: "orange",
            height: 40,
            width: 40,
            borderRadius: 50,
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 10,
            marginTop: 10,
            marginRight: 20,
          }}
        >
          <Image
            style={{ height: 25, width: 25 }}
            source={require("../../images/hotel5.png")}
          />
        </View>
        <View style={{marginTop:10, width:'80%'}}>
          <Text style={{ fontSize: 16 , marginBottom:5,fontWeight:700}}>Kyu Karna hai Adjust?</Text>
          <Text style={{ color: "#717171" }}>
            ...when you get FLAT 25% OFF* on booking Hourly stays for 3, 6 & 9
            Hours! Use Code: NOADJUST
          </Text>
          <Text style={{ color: "#b4b4b4" , marginBottom:10}}>1 hour ago</Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "white",
          width: "100%",
          flexDirection: "row",
          marginTop:10
        }}
      >
        <View
          style={{
            backgroundColor: "orange",
            height: 40,
            width: 40,
            borderRadius: 50,
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 10,
            marginTop: 10,
            marginRight: 20,
          }}
        >
          <Image
            style={{ height: 25, width: 25 }}
            source={require("../../images/hotel5.png")}
          />
        </View>
        <View style={{marginTop:10, width:'80%'}}>
          <Text style={{ fontSize: 16 , marginBottom:5,fontWeight:700}}>Kyu Karna hai Adjust?</Text>
          <Text style={{ color: "#717171" }}>
            ...when you get FLAT 25% OFF* on booking Hourly stays for 3, 6 & 9
            Hours! Use Code: NOADJUST
          </Text>
          <Text style={{ color: "#b4b4b4" , marginBottom:10}}>1 hour ago</Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "white",
          width: "100%",
          flexDirection: "row",
          marginTop:10
        }}
      >
        <View
          style={{
            backgroundColor: "orange",
            height: 40,
            width: 40,
            borderRadius: 50,
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 10,
            marginTop: 10,
            marginRight: 20,
          }}
        >
          <Image
            style={{ height: 25, width: 25 }}
            source={require("../../images/hotel5.png")}
          />
        </View>
        <View style={{marginTop:10, width:'80%'}}>
          <Text style={{ fontSize: 16 , marginBottom:5,fontWeight:700}}>Kyu Karna hai Adjust?</Text>
          <Text style={{ color: "#717171" }}>
            ...when you get FLAT 25% OFF* on booking Hourly stays for 3, 6 & 9
            Hours! Use Code: NOADJUST
          </Text>
          <Text style={{ color: "#b4b4b4" , marginBottom:10}}>1 hour ago</Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "white",
          width: "100%",
          flexDirection: "row",
          marginTop:10
        }}
      >
        <View
          style={{
            backgroundColor: "orange",
            height: 40,
            width: 40,
            borderRadius: 50,
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 10,
            marginTop: 10,
            marginRight: 20,
          }}
        >
          <Image
            style={{ height: 25, width: 25 }}
            source={require("../../images/hotel5.png")}
          />
        </View>
        <View style={{marginTop:10, width:'80%'}}>
          <Text style={{ fontSize: 16 , marginBottom:5,fontWeight:700}}>Kyu Karna hai Adjust?</Text>
          <Text style={{ color: "#717171" }}>
            ...when you get FLAT 25% OFF* on booking Hourly stays for 3, 6 & 9
            Hours! Use Code: NOADJUST
          </Text>
          <Text style={{ color: "#b4b4b4" , marginBottom:10}}>1 hour ago</Text>
        </View>
      </View>
    </View>
  )
}

export default Notification

const styles = StyleSheet.create({})