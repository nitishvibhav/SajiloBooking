import { StyleSheet, Text, View, Image,} from 'react-native'
import React from 'react'


const DayWisePlanDetails = ({Activity, ActivitHeading, ActivitySubheading,Activityicon}) => {
  return (
    <View
          style={{
            backgroundColor: 'white',
            width: '100%',
            borderBottomWidth:1,
            borderBottomColor:'#d6d6d6'
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 700,
              color: '#000',
              marginHorizontal: 10,
              marginTop: 20,
            }}>
           {Activity}
          </Text>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginLeft: 10,
            }}>
            <Image
              source={Activityicon}
              style={{height: 80, width: '35%', borderRadius: 10}}
            />
            <View style={{marginLeft: 10, width: '65%'}}>
              <Text style={{fontSize: 16, color: 'black', fontWeight: '700'}}>
                {ActivitHeading}
              </Text>
              <Text style={{marginTop: 10, color: '#717171'}}>
                {ActivitySubheading}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
              marginHorizontal: 10,
            }}>
            <View>
              <Text style={{color: '#0086fc', fontSize: 14, fontWeight: '600'}}>
                Remove <Text style={{color: '#d9d9d9'}}>|</Text> Change
              </Text>
            </View>
            <Text style={{color: '#0086fc', fontSize: 14, fontWeight: '600'}}>
              View Details
            </Text>
          </View>
          <View
            style={{
              borderBottomColor: '#d6d6d6',
              borderBottomWidth: 1,
              marginTop: 20,
            }}
          />
        </View>
  )
}

export default DayWisePlanDetails

const styles = StyleSheet.create({
   
})