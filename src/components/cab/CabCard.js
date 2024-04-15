import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import CustomButton from '../CustomButton';
import {useNavigation} from '@react-navigation/native';

const CabCard = ({carname, price, distance, icon, seat, bags}) => {

  const navigation = useNavigation()
  return (
    <View style={styles.miniContainer}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.LeftView}>
          <Text style={{fontSize: 20, color: 'black', fontWeight: '600'}}>
            {carname}
          </Text>
          <Text
            style={{
              fontSize: 24,
              color: 'orange',
              fontWeight: '600',
              marginVertical: 5,
            }}>
            {price}
          </Text>
          <Text style={{fontSize: 14, color: 'black', fontWeight: '500'}}>
            {distance}
          </Text>
          <Text style={{fontSize: 12, color: 'gray', fontWeight: '500'}}>
            All Inclusive
          </Text>
        </View>
        <View style={styles.RightView}>
          <Image style={styles.mainImage} source={icon} />
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <View style={styles.imageView}>
                <Image
                  style={styles.imagesmall}
                  source={require('../../../assets/seat.png')}
                />
              </View>
              <Text style={styles.textsmall}>{seat}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <View style={styles.imageView}>
                <Image
                  style={styles.imagesmall}
                  source={require('../../../assets/bags.png')}
                />
              </View>
              <Text style={styles.textsmall}>{bags}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <View style={styles.imageView}>
                <Image
                  style={styles.imagesmall}
                  source={require('../../../assets/ac.png')}
                />
              </View>
              <Text style={styles.textsmall}>AC</Text>
            </View>
          </View>
        </View>
      </View>

      <CustomButton title="Select Car" width="98%" onPress={()=>navigation.navigate('ReviewCab')}/>
    </View>
  );
};

export default CabCard;

const styles = StyleSheet.create({
  miniContainer: {
    width: '95%',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: 'grey',
    padding: 10,
    marginBottom:10
  },
  mainImage: {
    height: 120,
    width: '100%',
    borderRadius: 10,
  },
  RightView: {
    width: '65%',
  },
  LeftView: {
    width: '35%',
  },
  imageView: {
    height: 16,
    width: 16,
    borderRadius: 50,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    marginRight: 5,
  },
  imagesmall: {
    height: 12,
    width: 12,
    borderRadius: 50,
    tintColor: 'orange',
    alignSelf: 'center',
  },
  textsmall: {
    fontSize: 12,
    color: 'black',
    fontWeight: '500',
  },
});
