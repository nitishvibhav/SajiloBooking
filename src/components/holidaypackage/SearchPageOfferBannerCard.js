import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const SearchPageOfferBannerCard = () => {
  return (
    <View style={{width:'95%',alignSelf:'center'}}> 
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#95eff7', '#beebd7', '#ffdf94']}
        style={styles.container}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
        <Image
          style={styles.image}
          source={require('../../images/goa.jpg')}
        />
        <Text style={styles.text}>Refer your Friend & Earn Holiday Gift Card worth INR 5000</Text>
        <Image
          source={require('../../images/next.png')}
          style={styles.rightimage}
        />
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:20,
    borderRadius:6,
    alignItems:'center',
    width:'100%',
  },
  image: {
    height: 50,
    width: 100,
    borderRadius:6,
    marginRight:10,
    width:'25%'
  },
  rightimage: {
    height: 20,
    width: 20,
    marginLeft:5
  },
  text:{
    fontSize:14,
    width:'65%',
    fontFamily:'Quicksand-regular',
    color:'#000'
    
  }
});

export default SearchPageOfferBannerCard;
