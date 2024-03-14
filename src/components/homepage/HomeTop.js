import { View, Text, TouchableOpacity, Image, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";



const HomeTop = () => {
  const navigation = useNavigation();
  return (

    
      <TouchableOpacity
        style={{
          width: "95%", 
          flexDirection:'row',
          justifyContent:'space-around',
          marginTop:20, 
          alignSelf:'center',
        }}
      >
      
        <TouchableOpacity
          style={{
           paddingHorizontal:10,
           paddingVertical:10,
            backgroundColor: "white",
            borderRadius: 10,
            alignSelf: "center",
            elevation: 5,
            shadowColor: 'grey',
            
          }}
          onPress={() => navigation.navigate("Hotel")}
        >
          <Image
            source={require("../../../assets/hotelcolor.png")}
            style={{
              height: 50,
              width: 50,
              alignSelf: "center",
              
            }}
          />
          <Text
            style={{
              alignSelf: "center",
              justifyContent: "center",
              marginTop: 5,
              color: "black",
              fontSize: 12,
              fontWeight: 600,
            }}
          >
            Hotels
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingHorizontal:10,
            paddingVertical:10,
            backgroundColor: "white",
            borderRadius: 10,
            alignSelf: "center",
            fontSize: 12,
            fontWeight: 600,
            elevation: 5,
            shadowColor: 'grey',
          }} 
          onPress={()=> navigation.navigate('Flight')}>
        
          <Image
            source={require("../../../assets/flightcolor.png")}
            style={{
              height: 50,
              width: 50,
              alignSelf: "center",
              resizeMode:'contain'
            }}
          />
          <Text
            style={{
              alignSelf: "center",
              justifyContent: "center",
              marginTop: 5,
              color: "black",
              fontSize: 12,
              fontWeight: 600,
            }}
          >
            Flights
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingHorizontal:10,
           paddingVertical:10,
            backgroundColor: "white",
            borderRadius: 10,
            alignSelf: "center",
            elevation: 5,
            shadowColor: 'grey',
          }}
          onPress={()=> navigation.navigate('HolidayPackageSearchPage')}>
          <Image
            source={require("../../../assets/tourcolor.png")}
            style={{
              height: 50,
              width: 50,
              alignSelf: "center",
            }}
          />
          <Text
            style={{
              alignSelf: "center",
              justifyContent: "center",
              marginTop: 5,
              color: "black",
              fontSize: 12,
              fontWeight: 600,
            }}
          >
            Holidays
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={{
          paddingHorizontal:10,
           paddingVertical:10,
          backgroundColor: "white",
          borderRadius: 10,
          alignSelf: "center",
          elevation: 5,
          shadowColor: 'grey',
        }}
        onPress={()=> navigation.navigate('Hotel')}>
        <Image
          source={require("../../../assets/crusecolor.png")}
          style={{
            height: 50,
            width: 50,
            alignSelf: "center",
          }}
        />
        <Text
          style={{
            alignSelf: "center",
            justifyContent: "center",
            marginTop: 5,
            color: "black",
            fontSize: 12,
            fontWeight: 600,
          }}
        >
          Cruise
        </Text>
      </TouchableOpacity>
       
      </TouchableOpacity>
      
      
    

  );
};

export default HomeTop;
