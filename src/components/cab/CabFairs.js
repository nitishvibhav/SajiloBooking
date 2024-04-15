import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Inclusion from './Inclusion';
import Exclusion from './Exclusion';
import TermsAndConditions from './TermsAndConditions';

const CabFairs = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <View style={styles.miniContainer}>
      <Text style={styles.heading}>Fair Details</Text>
      <View style={styles.mainView}>
        <TouchableOpacity
          style={[
            styles.touchableopacity,
            {backgroundColor: selectedTab == 0 ? 'orange' : 'white'},
          ]}
          onPress={() => setSelectedTab(0)}>
          <Text
            style={[
              styles.heading,
              {color: selectedTab == 0 ? 'white' : 'black'},
              {textTransform: selectedTab == 0 ? 'uppercase' : 'capitalize'},
            ]}>
            Inclusion
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.touchableopacity,
            {backgroundColor: selectedTab == 1 ? 'orange' : 'white'},
          ]}
          onPress={() => setSelectedTab(1)}>
          <Text
            style={[
              styles.heading,
              {color: selectedTab == 1 ? 'white' : 'black'},
              {textTransform: selectedTab == 1 ? 'uppercase' : 'capitalize'},
            ]}>
            Exclusion
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.touchableopacity,
            {backgroundColor: selectedTab == 2 ? 'orange' : 'white'},
          ]}
          onPress={() => setSelectedTab(2)}>
          <Text
            style={[
              styles.heading,
              {color: selectedTab == 2 ? 'white' : 'black'},
              {textTransform: selectedTab == 2 ? 'uppercase' : 'capitalize'},
            ]}>
            T&C
          </Text>
        </TouchableOpacity>
      </View>
      {selectedTab == 0 ? (
        <Inclusion />
      ) : selectedTab == 1 ? (
        <Exclusion />
      ) : (
        <TermsAndConditions />
      )}
    </View>
  );
};

export default CabFairs;

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
  heading: {
    fontSize: 16,
    color: '#000',
    fontWeight: '700',
  },
  mainView: {
    width: '95%',
    borderWidth: 1,
    borderColor: 'gray',
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 10,
    borderTopLeftRadius:6,
    borderTopRightRadius:6
  },
  touchableopacity: {
    flex: 1 / 3,
    alignItems: 'center',
    paddingVertical: 10,
    borderTopLeftRadius:6,
    borderTopRightRadius:6
  },
});
