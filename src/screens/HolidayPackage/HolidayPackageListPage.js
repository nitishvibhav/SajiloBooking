import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import HolidayPackageListHeader from '../../components/holidaypackage/HolidayPackageListHeader';
import FilterListPage from '../../components/holidaypackage/FilterListPage';
import ListCard from '../../components/holidaypackage/ListCard';

const HolidayPackageListPage = () => {
  return (
    
      <View style={{backgroundColor: '#fff', paddingBottom: 20}}>
        <HolidayPackageListHeader TripName="New Delhi To Goa" dateTime="7 May 2024, Tuesday | 2 Adult"/>
        <ScrollView
          horizontal
          style={{marginTop: 20}}
          showsHorizontalScrollIndicator={false}>
          <FilterListPage
            category="Sort"
            icon={require('../../../assets/filter.png')}
          />
          <FilterListPage
            category="Filters"
            icon={require('../../../assets/down.png')}
          />
          <FilterListPage
            category="Duration"
            icon={require('../../../assets/down.png')}
          />
          <FilterListPage
            category="Flights"
            icon={require('../../../assets/down.png')}
          />
          <FilterListPage
            category="Hotels"
            icon={require('../../../assets/down.png')}
          />
          <FilterListPage
          category="Holiday Package"
          icon={require('../../../assets/down.png')}
        />
        </ScrollView>
        <ListCard />
      </View>
     
      
  
  );
};

export default HolidayPackageListPage;

const styles = StyleSheet.create({});
