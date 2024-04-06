import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const Meals = () => {
  return (
    <View style={{backgroundColor:'white'}}>
    <View
            style={{
              marginTop: 20,
              marginLeft: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              style={{height: 16, width: 16, marginRight: 10}}
              source={require('../../../assets/fork.png')}
            />
            <Text style={{fontSize: 16, fontWeight: 700, color: '#000'}}>
              Day Meals
            </Text>
          </View>
          <Text
            style={{
              color: '#4f4f4f',
              marginTop: 10,
              fontWeight: '500',
              fontSize: 16,
              marginLeft: 10,
            }}>
            Breakfast : {''}
            <Text style={{color: '#666666', fontWeight: '400', fontSize: 14}}>
              Included at Resort Terra Paraiso - A Beach Property, Goa
            </Text>
          </Text>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#eaf1d2', '#e7f6e3', '#e6faf8']}
            style={styles.containerGradient}>
            <Text style={{color: '#52584c'}}>
              Spend time at leisure or add an activity to your day!
            </Text>
          </LinearGradient>
          <TouchableOpacity
            style={{
              borderWidth: 1.5,
              borderColor: '#3d7fb9',
              width: '60%',
              alignSelf: 'center',
              alignItems: 'center',
              borderRadius: 6,
              paddingVertical: 10,
              marginTop:-20,
              backgroundColor:'white',
              marginBottom:20
            }}>
            <Text style={{color: '#3d7fb9', fontSize: 16, fontWeight: '700'}}>
              ADD ACTIVITY TO DAY
            </Text>
          </TouchableOpacity>
          </View>
  )
}

export default Meals

const styles = StyleSheet.create({
    containerGradient: {
        width: '100%',
        marginTop: 20,
        paddingBottom: 25,
        paddingTop:10,
        borderTopWidth: 1,
        borderTopColor: '#d6d6d6',
        alignItems: 'center',
      },
})