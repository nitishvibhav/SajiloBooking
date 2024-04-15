import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from 'react-native';
import React from 'react';
import CabFairs from '../../components/cab/CabFairs';
import CustomButton from '../../components/holidaypackage/CustomButton';

const ReviewCab = () => {
  return (
    <ScrollView>
      <View style={styles.Container}>
        <Text style={styles.Heading}>Your Booking Details</Text>
        <Image
          source={require('../../../assets/goaMumbai.png')}
          style={{
            width: '95%',
            height: 10,
            alignSelf: 'center',
            marginBottom: 5,
          }}
        />
        <View style={styles.bookingDetailsView}>
          <Text style={{color: '#4b4b4b'}}>Mumbai</Text>
          <Text style={{color: '#4b4b4b'}}>Goa</Text>
        </View>
        <View style={styles.bottomLine} />
        <View style={styles.bookingDetailsView}>
          <Text style={{color: '#0a8374'}}>Total Fare</Text>
          <Text style={{color: '#0a8374'}}> ₹ 11,465</Text>
        </View>
        <View style={styles.bottomLine} />
        <View style={styles.bookingDetailsView}>
          <Text style={{color: '#4b4b4b'}}>Trip Type</Text>
          <Text style={{color: '#4b4b4b'}}>Airport | One Way</Text>
        </View>
        <View style={styles.bottomLine} />
        <View style={styles.bookingDetailsView}>
          <Text style={{color: '#4b4b4b'}}>Pick Up Date & Time</Text>
          <Text style={{color: '#4b4b4b'}}>13-04-2024 | 04:00 PM</Text>
        </View>
        <View style={styles.bottomLine} />
        <View style={styles.bookingDetailsView}>
          <Text style={{color: '#4b4b4b'}}>Drop Date</Text>
          <Text style={{color: '#4b4b4b'}}>13-04-2024 </Text>
        </View>
        <View style={styles.bottomLine} />
        <View style={styles.bookingDetailsView}>
          <Text style={{color: '#4b4b4b'}}>Car Type</Text>
          <Text style={{color: '#4b4b4b'}}>Toyota Etios & Equivalent</Text>
        </View>
      </View>
      <View style={styles.Container}>
      <Text style={styles.Heading}>Contact Details</Text>
        <TextInput
          placeholder="Name"
          style={styles.textInput}
          placeholderTextColor="black"
        />
        <TextInput
          placeholder="Email"
          style={styles.textInput}
          placeholderTextColor="black"
        />
        <TextInput
          placeholder="Mobile"
          style={styles.textInput}
          placeholderTextColor="black"
        />
      </View>
      <View style={{marginTop:10}}>
      <CustomButton title="Proceed" width="95%"/>
      </View>
      <CabFairs/>
    </ScrollView>
  );
};

export default ReviewCab;

const styles = StyleSheet.create({
  Container: {
    width: '95%',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: 'grey',
    padding: 10,
    paddingBottom:20
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '95%',
    alignSelf: 'center',
    borderRadius: 6,
    paddingHorizontal: 20,
    marginVertical: 5,
    color: 'black',
    fontWeight: '600',
    fontFamily: 'Quicksand-Bold',
  },
  Heading: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 10,
  },
  bottomLine: {
    borderBottomColor: '#d6d6d6',
    borderBottomWidth: 1,
    margin: 10,
  },
  bookingDetailsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
});
