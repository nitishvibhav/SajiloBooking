import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const TopCard = (props) => {
  return (
    <View
          style={{
            height: 90,
            width: "80",
            backgroundColor: "white",
            alignSelf: "center",
            justifyContent:"space-between",
            flexDirection:'row',
            paddingLeft:45, 
            alignItems:'center'
          }}
        >
        
        <TouchableOpacity
        style={{ alignItems:'center'}}>
          <Image
          source={props.localImage}
          style={{height:30, width:30}}/>
          <View style={{marginTop:5, alignItems:'center'}}>
         <Text style={{fontSize:10, fontWeight:600}}>{props.firstname}</Text>
         <Text style={{fontSize:10, fontWeight:600}}>{props.secondname}</Text>
         </View>
         </TouchableOpacity>
        
        </View>
  )
}

export default TopCard