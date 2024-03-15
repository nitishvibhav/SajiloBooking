import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const SearchPageOfferBannerCard = ({icon}) => {
  return (
    <View>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#95eff7', '#beebd7', '#ffdf94']}
        style={styles.container}>
        <Image style={styles.image} source={icon} />
        <Text>Refer your Friend & Earn Holiday Gift Card worth INR 5000</Text>
        <Image
          source={require('../../images/next.png')}
          style={styles.rightimage}
        />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '95%',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  image: {
    height: 40,
    width: '60',
  },
  rightimage: {
    height: 20,
    width: 20,
  },
});

export default SearchPageOfferBannerCard;
