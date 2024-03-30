import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const TravelCard = ({image, price, destination}) => {
  return (
    <View>
      <View style={{marginLeft: 10, width: 150, marginVertical: 10}}>
        <Image
          source={image}
          style={{height: 150, width: 150, borderRadius: 10}}
        />

        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              color: '#727471',
              fontWeight: '500',
              fontFamily: 'Quicksand-Bold',
            }}>
            Starting at
          </Text>
          <Text style={{color: '#000', fontSize: 16, fontWeight: '700'}}>
            {price}
          </Text>
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          backgroundColor: '#ffefce',
          paddingHorizontal: 10,
          marginTop: 15,
          marginLeft: 8,
          borderRadius:4,
          paddingVertical:5
        }}>
        <Text style={{color: '#000', fontSize: 16, fontWeight: '700'}}>
          {destination}
        </Text>
      </View>
    </View>
  );
};

export default TravelCard;

const styles = StyleSheet.create({});
