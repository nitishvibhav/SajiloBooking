import {View, Text} from 'react-native';
import React from 'react';
import CustomTouchableOpacity from '../../components/CustomTouchableOpacity';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const TrekkingSearch = () => {
  const navigation= useNavigation()
  return (
    <View
      style={{
        width: '100%',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: 'white',
        paddingBottom: 10,
        marginTop: 10,
      }}>
      <CustomTouchableOpacity
        icon={require('../../images/location.png')}
        text="DESTINATION/TRIP NAME"
        text2="ANNPURNA"
        width="95%"
      />
      <CustomTouchableOpacity
          icon={require('../../images/location.png')}
          text="SELECT NATIONALITY"
          text2="INDIAN"
          width="95%"
        />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '95%',
        }}>
        <CustomTouchableOpacity
          icon={require('../../images/date.png')}
          text="DEPARTURE DATE"
          text2="12 Apr 2024, FRI"
          width="49%"
        />
        <CustomTouchableOpacity
          icon={require('../../images/user.png')}
          text="TRAVELLER"
          text2="1 Adult"
          width="49%"
        />
      </View>
      <CustomButton
        title="search"
        width="95%"
        onPress={() => navigation.navigate('TrekkingListPage')}
      />
    </View>
  );
};

export default TrekkingSearch;
