import {View, Text} from 'react-native';
import React from 'react';

const AddOnn = () => {
  return (
    <View
      style={{
        width: '95%',
        borderRadius: 6,
        backgroundColor: 'white',
        alignSelf: 'center',
        marginTop: 10,
        elevation: 5,
        shadowColor: 'grey',
        marginBottom: 10,
        paddingBottom: 10,
      }}>
      <Text
        style={{marginLeft: 10, fontSize: 18, fontWeight: 700, marginTop: 10}}>
        Addons
      </Text>
      <Text
        style={{
          fontSize: 12,
          color: '#343434',
          marginLeft: 10,
          marginBottom: 10,
        }}>
        Inclusive of Taxes
      </Text>

      <View
        style={{
          marginHorizontal: 10,
        }}>
        <Text style={{color: '#4b4b4b'}}>
          Add Breakfast for ₹ 1301 for all guests
        </Text>
      </View>
      <View
        style={{
          borderBottomColor: '#d6d6d6',
          borderBottomWidth: 1,
          margin: 10,
        }}
      />
      <View
        style={{
          marginHorizontal: 10,
        }}>
        <Text style={{color: '#4b4b4b'}}>
          Add <Text stye>Breakfast + Lunch/Dinner</Text> for ₹ 2766 for all
          guests
        </Text>
      </View>
    </View>
  );
};

export default AddOnn;
