import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DayWiseDetails = ({Day,Activity}) => {
  return (
    <View
          style={{
            marginTop: 20,
            backgroundColor: 'white',
            width: '95%',
            flexDirection: 'row',
            borderBottomEndRadius: 50,
            borderTopEndRadius: 50,
          }}>
          <View
            style={{
              backgroundColor: '#f0d3c5',
              paddingHorizontal: 10,
              paddingVertical: 5,
            }}>
            <Text style={{color: 'black'}}>{Day}</Text>
          </View>
          <View style={{paddingHorizontal: 10, paddingVertical: 5}}>
            <Text style={{color: 'black', fontWeight: 700}}>
              Included:{' '}
              <Text
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  fontWeight: 400,
                }}>
                {Activity}
              </Text>
            </Text>
          </View>
        </View>
  )
}

export default DayWiseDetails

const styles = StyleSheet.create({})