import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TermsAndConditions = () => {
  return (
    <View style={styles.maincontainer}>
      <View style={styles.ViewImage}>
        <Text style={{marginRight: 10, color: 'black'}}>•</Text>
        <Text style={styles.text}>
          Your trip has a KM limit. If your usage exceeds this limit, you will
          be charged for the excess KM used.
        </Text>
      </View>
      <View style={styles.ViewImage}>
        <Text style={{marginRight: 10, color: 'black'}}>•</Text>
        <Text style={styles.text}>
          The Airport Entry/Parking Charge, if applicable is not included in the
          fair and will be charged extra.
        </Text>
      </View>
      <View style={styles.ViewImage}>
        <Text style={{marginRight: 10, color: 'black'}}>•</Text>
        <Text style={styles.text}>
          Your trip includes one pick up in pick-up city and one drop to
          destination city. It doesn't include within city travel.
        </Text>
      </View>
      <View style={styles.ViewImage}>
        <Text style={{marginRight: 10, color: 'black'}}>•</Text>
        <Text style={styles.text}>
          If your Trip has Hill climbs, cab AC may be switched off during such
          climbs
        </Text>
      </View>
    </View>
  );
};

export default TermsAndConditions;

const styles = StyleSheet.create({
  maincontainer: {
    width: '95%',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: -1,
    padding: 10,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },

  ViewImage: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 13,
    color: 'black',
    fontWeight: '500',
    marginRight: 10,
  },
});
