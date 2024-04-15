import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Exclusion = () => {
  return (
    <View style={styles.maincontainer}>
      <View style={styles.ViewImage}>
        <View style={styles.imageView}>
          <Image
            style={styles.imagesmall}
            source={require('../../../assets/money.png')}
          />
        </View>
        <Text style={styles.text}>Pay ₹ 15/KM after 23 KM</Text>
      </View>
      <View style={styles.ViewImage}>
        <View style={styles.imageView}>
          <Image
            style={styles.imagesmall}
            source={require('../../../assets/location.png')}
          />
        </View>
        <Text style={styles.text}>Multiple Pickups/Drops</Text>
      </View>
      <View style={styles.ViewImage}>
        <View style={styles.imageView}>
          <Image
            style={styles.imagesmall}
            source={require('../../../assets/location.png')}
          />
        </View>
        <Text style={styles.text}>Airport Entry/Parking</Text>
      </View>
    </View>
  );
};

export default Exclusion;

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
  imageView: {
    height: 24,
    width: 24,
    borderRadius: 50,
    borderColor: 'orange',
    borderWidth: 1,
    justifyContent: 'center',
    marginRight: 10,
  },
  imagesmall: {
    height: 20,
    width: 20,
    borderRadius: 50,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  ViewImage: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    color: 'black',
    fontWeight: '500',
  },
});
