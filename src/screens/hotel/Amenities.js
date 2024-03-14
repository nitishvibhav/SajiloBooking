import { View, Text, Image, ScrollView } from "react-native";
import React from "react";

/*const bulletPoints = [
    'Item 1: This is the first bullet point.',
    'Item 2: Another bullet point here.',
    'Item 3: And one more for good measure.',
  ];
*/
const Amenities = () => {
  return (
    /* <View style={styles.container}>
          {bulletPoints.map((point, index) => (
            <View key={index} style={styles.bulletContainer}>
              <Text style={styles.bullet}>•</Text>
              <Text>{point}</Text>
            </View>
          ))}
        </View>*/
    <View style={{flex:1,}}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding:10,
          alignItems: "center",
          backgroundColor: "#fff",
          width: "100%",
          elevation:5,
          shadowColor:'grey',
          paddingLeft:20,
          paddingRight:20
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              height: 20,
              width: 20,
              resizeMode: "contain",
              marginRight: 20,
              tintColor:'#757575'
            }}
            source={require("../../images/back.png")}
          />
          <View>
            <Text style={{fontWeight:600, fontSize:16}}>Amenities</Text>
            <Text style={{color:'#9b9b9b'}}>NPG HOTEL</Text>
          </View>
        </View>
        <Image
          style={{ height: 16, width: 20, resizeMode: "contain",tintColor:'#757575' }}
          source={require("../../images/search.png")}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          width: "95%",
          borderRadius: 6,
          backgroundColor: "#fff",
          alignSelf: "center",
          marginTop: 10,
          elevation: 5,
          shadowColor: "grey",
          paddingBottom:10,
          marginBottom:10
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: 600,
            marginLeft: 10,
            marginTop: 10,
          }}
        >
          Highlighted Amenities
        </Text>
        <View style={{ flexDirection: "row" ,marginTop:10, alignItems:'center'}}>
          <Text style={{ marginLeft: 20, marginRight: 10,fontSize:20,color: "#4a4a4a"  }}>•</Text>
          <Text style={{ color: "#4a4a4a" }}>Spa <Text style={{color:'#767676'}}>(paid)</Text></Text>
        </View>
        <View style={{ flexDirection: "row" ,alignItems:'center'}}>
        <Text style={{ marginLeft: 20, marginRight: 10,fontSize:20 ,color: "#4a4a4a" }}>•</Text>
        <Text style={{ color: "#4a4a4a" }}>Restaurant</Text>
      </View>
      <View style={{ flexDirection: "row" ,alignItems:'center'}}>
      <Text style={{ marginLeft: 20, marginRight: 10, fontSize:20 ,color: "#4a4a4a"}}>•</Text>
      <Text style={{ color: "#4a4a4a" }}>Lounge</Text>
    </View>
   
      </View>
      <View
      style={{
        width: "95%",
        borderRadius: 6,
        backgroundColor: "#fff",
        alignSelf: "center",
       
        elevation: 5,
        shadowColor: "grey",
        paddingBottom:10,
      
      }}
    >
      <Text
        style={{
          fontSize: 16,
          fontWeight: 600,
          marginLeft: 10,
          marginTop: 10,
        }}
      >
        Basic Facilities
      </Text>
      <View style={{ flexDirection: "row" ,marginTop:10, alignItems:'center'}}>
        <Text style={{ marginLeft: 20, marginRight: 10,fontSize:20,color: "#4a4a4a"  }}>•</Text>
        <Text style={{ color: "#4a4a4a" }}>Smoking Rooms</Text>
      </View>
      <View style={{ flexDirection: "row" ,alignItems:'center'}}>
      <Text style={{ marginLeft: 20, marginRight: 10,fontSize:20,color: "#4a4a4a"  }}>•</Text>
      <Text style={{ color: "#4a4a4a" }}>Room Service</Text>
    </View>
    <View style={{ flexDirection: "row" ,alignItems:'center'}}>
    <Text style={{ marginLeft: 20, marginRight: 10, fontSize:20,color: "#4a4a4a" }}>•</Text>
    <Text style={{ color: "#4a4a4a" }}>Air Conditioning</Text>
  </View>
  <View style={{ flexDirection: "row" ,alignItems:'center'}}>
  <Text style={{ marginLeft: 20, marginRight: 10,fontSize:20,color: "#4a4a4a"  }}>•</Text>
  <Text style={{ color: "#4a4a4a" }}>Elevator/Lift</Text>
</View>
<View style={{ flexDirection: "row" , alignItems:'center'}}>
<Text style={{ marginLeft: 20, marginRight: 10,fontSize:20,color: "#4a4a4a"  }}>•</Text>
<Text style={{ color: "#4a4a4a" }}>Laundry Service <Text style={{color:'#767676'}}>(paid)</Text></Text>
</View>
<View style={{ flexDirection: "row" ,alignItems:'center'}}>
  <Text style={{ marginLeft: 20, marginRight: 10,fontSize:20,color: "#4a4a4a"  }}>•</Text>
  <Text style={{ color: "#4a4a4a" }}>Power Backup</Text>
</View>
<View style={{ flexDirection: "row" ,alignItems:'center'}}>
  <Text style={{ marginLeft: 20, marginRight: 10,fontSize:20,color: "#4a4a4a"  }}>•</Text>
  <Text style={{ color: "#4a4a4a" }}>Free Wi-Fi</Text>
</View>
<View style={{ flexDirection: "row" ,alignItems:'center'}}>
  <Text style={{ marginLeft: 20, marginRight: 10,fontSize:20,color: "#4a4a4a"  }}>•</Text>
  <Text style={{ color: "#4a4a4a" }}>News Paper</Text>
</View>
<View style={{ flexDirection: "row" ,alignItems:'center'}}>
  <Text style={{ marginLeft: 20, marginRight: 10,fontSize:20,color: "#4a4a4a"  }}>•</Text>
  <Text style={{ color: "#4a4a4a" }}>Ironing Service</Text>
</View>
<View style={{ flexDirection: "row" ,alignItems:'center'}}>
  <Text style={{ marginLeft: 20, marginRight: 10,fontSize:20,color: "#4a4a4a"  }}>•</Text>
  <Text style={{ color: "#4a4a4a" }}>Refrigerator</Text>
</View>
<View style={{ flexDirection: "row" ,alignItems:'center'}}>
  <Text style={{ marginLeft: 20, marginRight: 10,fontSize:20,color: "#4a4a4a"  }}>•</Text>
  <Text style={{ color: "#4a4a4a" }}>Free Parking</Text>
</View>
<View style={{ flexDirection: "row" ,alignItems:'center'}}>
  <Text style={{ marginLeft: 20, marginRight: 10,fontSize:20,color: "#4a4a4a"  }}>•</Text>
  <Text style={{ color: "#4a4a4a" }}>Housekeeping</Text>
</View>
<View style={{ flexDirection: "row" ,alignItems:'center'}}>
  <Text style={{ marginLeft: 20, marginRight: 10,fontSize:20,color: "#4a4a4a"  }}>•</Text>
  <Text style={{ color: "#4a4a4a" }}>Kitchenette</Text>
</View>
    </View>
    <View
    style={{
      width: "95%",
      borderRadius: 6,
      backgroundColor: "#fff",
      alignSelf: "center",
      marginTop: 10,
      elevation: 5,
      shadowColor: "grey",
      paddingBottom:10,
      marginBottom:10
    }}
  >
    <Text
      style={{
        fontSize: 16,
        fontWeight: 600,
        marginLeft: 10,
        marginTop: 10,
      }}
    >
     Food & Drinks
    </Text>
    <View style={{ flexDirection: "row" ,marginTop:10, alignItems:'center'}}>
      <Text style={{ marginLeft: 20, marginRight: 10,fontSize:20  }}>•</Text>
      <Text style={{ color: "#4a4a4a" }}>Restaurant</Text>
    </View>
  </View>
  <View
  style={{
    width: "95%",
    borderRadius: 6,
    backgroundColor: "#fff",
    alignSelf: "center",
    elevation: 5,
    shadowColor: "grey",
    paddingBottom:10,
    marginBottom:10
  }}
>
  <Text
    style={{
      fontSize: 16,
      fontWeight: 600,
      marginLeft: 10,
      marginTop: 10,
    }}
  >
    Highlighted Amenities
  </Text>
  <View style={{ flexDirection: "row" ,marginTop:10, alignItems:'center'}}>
    <Text style={{ marginLeft: 20, marginRight: 10,fontSize:20  }}>•</Text>
    <Text style={{ color: "#4a4a4a" }}>Spa <Text style={{color:'#767676'}}>(paid)</Text></Text>
  </View>
  <View style={{ flexDirection: "row" ,alignItems:'center'}}>
  <Text style={{ marginLeft: 20, marginRight: 10,fontSize:20  }}>•</Text>
  <Text style={{ color: "#4a4a4a" }}>Restaurant</Text>
</View>
<View style={{ flexDirection: "row" ,alignItems:'center'}}>
<Text style={{ marginLeft: 20, marginRight: 10, fontSize:20 }}>•</Text>
<Text style={{ color: "#4a4a4a" }}>Lounge</Text>
</View>
<View style={{ flexDirection: "row" ,alignItems:'center'}}>
<Text style={{ marginLeft: 20, marginRight: 10,fontSize:20  }}>•</Text>
<Text style={{ color: "#4a4a4a" }}>Swimming Pool</Text>
</View>
</View>
</ScrollView>
    </View>
  );
};

export default Amenities;
