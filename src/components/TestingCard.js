import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const TestingCard = () => {
  return (
    <View style={styles.cardContainer}>
      <ImageBackground
        source={require('../../assets/thailand.jpg')}
        style={styles.image}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>Thailand</Text>
        </View>
      </ImageBackground>
      <View style={styles.infoContainer}>
        <Text style={styles.price}>Starting at ₹70,300</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3,
    margin: 10,
  },
  image: {
    height: 200,
    justifyContent: 'flex-end',
  },
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  infoContainer: {
    padding: 10,
    backgroundColor: '#eee',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default TestingCard;
