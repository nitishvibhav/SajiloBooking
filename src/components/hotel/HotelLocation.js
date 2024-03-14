import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import LocationFilter from "./LocationFilter";

const HotelLocation = () => {
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
        paddingBottom: 10,
      }}
    >
      <Text
        style={{
          marginTop: 10,
          fontSize: 18,
          fontWeight: 700,
          marginLeft: 10,
          marginBottom: 10,
        }}
      >
        Location
      </Text>
      <Text style={{ marginLeft: 10, color: "#484848" }}>
       <Text style={{fontWeight:600}}>Address:</Text>  Plot No. CBD/2, Action Area-II New Town, Rajarhat,
        Kolkata-700156..
      </Text>
      <Text style={{ marginLeft: 10, color: "#484848" }}>
        9.3 km from Netaji Subhash Chandra Bose International Airport
      </Text>

      <MapView
        style={{
          height: 200,
          width: "95%",
          alignSelf: "center",
          marginTop: 10,
        }}
      >
        <Marker
          coordinate={{ latitude: 26.714718, longitude: 88.433372 }}
          title="Siliguri"
          description="City Of Joy"
          pinColor="Red"
        />
      </MapView>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 10 }}
      >
        <LocationFilter category="Key Landmark" />
        <LocationFilter category="Tourist Attractions" />
        <LocationFilter category="Airport" />
        <LocationFilter category="Railway Station" />
      </ScrollView>
      <View>
      <View style={{flexDirection:'row', marginLeft:10, marginTop:10, marginRight:10, justifyContent:'space-between'}}>
        <Text style={{ color:'#000000',fontWeight:700, fontSize:16,width:'70%'}}>Kolkata Railway Station</Text>
        <Text style={{ color:'#8b8b8b',fontSize:14}}>15.3 KM</Text>
      </View>
      <Text style={{marginLeft:10, color:'#8b8b8b'}}>Transit Point</Text>
      </View>
      <View
        style={{
          borderBottomColor: "#d6d6d6",
          borderBottomWidth: 1,
          marginLeft: 10,
          marginRight: 10,
          marginTop: 10,
        }}
      />
      
      <View style={{flexDirection:'row', marginLeft:10, marginTop:10, marginRight:10, justifyContent:'space-between', width:'95%'}}>
        <Text style={{ color:'#000000',fontWeight:700, fontSize:16, width:'70%'}}>Netaji Subhash Chandra Bose International Airport</Text>
        <Text style={{ color:'#8b8b8b',fontSize:14}}>9.0 KM</Text>
      </View>
      <Text style={{marginLeft:10, color:'#8b8b8b'}}>Airport</Text>
      
      <View
      style={{
        borderBottomColor: "#d6d6d6",
        borderBottomWidth: 1,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
      }}
    />
    <View style={{flexDirection:'row', marginLeft:10, marginTop:10, marginRight:10, justifyContent:'space-between'}}>
    <Text style={{ color:'#000000',fontWeight:700, fontSize:16,width:'80%'}}>Biswa Bangla Convention Center</Text>
    <Text style={{ color:'#8b8b8b',fontSize:14}}>1.3 KM</Text>
  </View>
  <Text style={{marginLeft:10, color:'#8b8b8b'}}>Industrial/Business Hub </Text>
  
  <View
  style={{
    borderBottomColor: "#d6d6d6",
    borderBottomWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  }}
/>
<View style={{flexDirection:'row', marginLeft:10, marginTop:10, marginRight:10, justifyContent:'space-between'}}>
<Text style={{ color:'#000000',fontWeight:700, fontSize:16}}>Mother's wax Museum, Kolkata</Text>
<Text style={{ color:'#8b8b8b',fontSize:14}}>880 m</Text>
</View>
<Text style={{marginLeft:10, color:'#8b8b8b'}}>Tourist Attraction</Text>

<View
  style={{
    borderBottomColor: "#d6d6d6",
    borderBottomWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  }}
/>
<TouchableOpacity
      >
        <Text
          style={{
            color: "#1499f4",
            fontSize: 16,
            fontWeight: 700,
            marginLeft: 10,
            marginTop: 10,
          }}
        >
          Show Nearby Places
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HotelLocation;
