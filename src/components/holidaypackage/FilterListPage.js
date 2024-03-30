import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

const FilterListPage = ({icon,category}) => {
  return (
    <View
    style={{
      height: 40,
      marginLeft:10,
      alignItems:'center',
      borderRadius: 6,
      borderWidth:1,
      borderColor:'#d7d7d7',
      padding:10
    }}
  >
  <View style={{flexDirection:'row'}}>
    <Text style={{fontSize:12, marginRight:10, color:'#5b5b5b', fontWeight:'500'}}>{category}</Text>
    <Image source={icon}
    style={{height:12,width:12,alignSelf:'center', tintColor:'#5b5b5b'}}/>
    </View>
  </View>
  )
}

export default FilterListPage

const styles = StyleSheet.create({})