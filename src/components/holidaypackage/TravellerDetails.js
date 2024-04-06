import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TravellerDetails = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.textHeading}>1/4 Traveller details</Text>
        <Text style={{color: 'red', fontWeight: '500'}}>Mandatory</Text>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: '#d5d5d5',
          marginVertical: 10,
        }}
      />
      <Text style={styles.text2}>2 Travellers</Text>
      <Text style={styles.text1}>1Room : 2Adults</Text>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: '#d5d5d5',
          marginVertical: 10,
          marginHorizontal: 10,
        }}
      />
      <Text style={styles.text2}>Booking For</Text>
    </View>
  );
};

export default TravellerDetails;

const styles = StyleSheet.create({
  textHeading: {
    fontSize: 18,
    color: '#000',
    fontWeight: '700',
    paddingHorizontal: 10,
  },
  text: {
    color: '#555555',
    marginTop: 5,
    paddingHorizontal: 10,
  },
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 20,
  },
  mainContainer: {
    width: '95%',
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: 'white',
    marginTop: 10,
    paddingVertical: 10,
  },
  text2: {
    color: 'black',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 10,
  },
  text1: {
    color: '#555555',
    paddingHorizontal: 10,
  },
});
