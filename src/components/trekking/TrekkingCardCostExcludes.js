import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TrekkingCardCostExcludes = () => {
  return (
    <View
      style={{
        width: '95%',
        borderRadius: 6,
        backgroundColor: 'white',
        alignSelf: 'center',
        marginTop: 10,
        elevation: 5,
        shadowColor: 'grey',
        marginBottom: 10,
        paddingBottom: 10,
      }}>
      <Text
        style={{
          marginTop: 10,
          fontSize: 18,
          fontWeight: 700,
          marginLeft: 10,
          color: '#000',
        }}>
        Cost Excludes :
      </Text>

      <View style={{flexDirection: 'row', width:'90%'}}>
        <Text
          style={{
            marginLeft: 20,
            marginRight: 10,
            fontSize: 16,
            color: '#4a4a4a',
          }}>
          •
        </Text>
        <Text style={{color: '#4a4a4a'}}>
        Lunch and dinner in Kathmandu
        </Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text
          style={{
            marginLeft: 20,
            marginRight: 10,
            fontSize: 16,
            color: '#4a4a4a',
          }}>
          •
        </Text>
        <Text style={{color: '#4a4a4a'}}>
        Personal equipment and wears for trekking
        </Text>
      </View>
      <View style={{flexDirection: 'row', width: '90%'}}>
        <Text
          style={{
            marginLeft: 20,
            marginRight: 10,
            fontSize: 16,
            color: '#4a4a4a',
          }}>
          •
        </Text>
        <Text style={{color: '#4a4a4a'}}>
        Personal expenses for the trekking
        </Text>
      </View>
      <View style={{flexDirection: 'row', width: '90%'}}>
        <Text
          style={{
            marginLeft: 20,
            marginRight: 10,
            fontSize: 16,
            color: '#4a4a4a',
          }}>
          •
        </Text>
        <Text style={{color: '#4a4a4a'}}>
        Bar bill and beverages
        </Text>
      </View>
      <View style={{flexDirection: 'row', width: '86%'}}>
        <Text
          style={{
            marginLeft: 20,
            marginRight: 10,
            fontSize: 16,
            color: '#4a4a4a',
          }}>
          •
        </Text>
        <Text style={{color: '#4a4a4a'}}>
        Mineral water
        </Text>
      </View>
      <View style={{flexDirection: 'row', width: '86%'}}>
        <Text
          style={{
            marginLeft: 20,
            marginRight: 10,
            fontSize: 16,
            color: '#4a4a4a',
          }}>
          •
        </Text>
        <Text style={{color: '#4a4a4a'}}>
        Tips
        </Text>
      </View>
      <View style={{flexDirection: 'row', width: '86%'}}>
        <Text
          style={{
            marginLeft: 20,
            marginRight: 10,
            fontSize: 16,
            color: '#4a4a4a',
          }}>
          •
        </Text>
        <Text style={{color: '#4a4a4a'}}>
        Emergency evacuation in case needed
        </Text>
      </View>
      <View style={{flexDirection: 'row', width: '86%'}}>
        <Text
          style={{
            marginLeft: 20,
            marginRight: 10,
            fontSize: 16,
            color: '#4a4a4a',
          }}>
          •
        </Text>
        <Text style={{color: '#4a4a4a'}}>
        Personal Insurance for travel
        </Text>
      </View>
      <View style={{flexDirection: 'row', width: '86%'}}>
        <Text
          style={{
            marginLeft: 20,
            marginRight: 10,
            fontSize: 16,
            color: '#4a4a4a',
          }}>
          •
        </Text>
        <Text style={{color: '#4a4a4a'}}>
        All the costs that are not mentioned in the cost include.
        </Text>
      </View>
    </View>
  )
}

export default TrekkingCardCostExcludes

const styles = StyleSheet.create({})