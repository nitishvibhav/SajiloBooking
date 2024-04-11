import {StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';
import {Calendar} from 'react-native-calendars';

const CabCalendar = () => {
    const [selected, setSelected] = useState('');
  return (
    <View>
      <Calendar
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          height: 350,
          width: '100%',
          dayTextColor: 'orange',
          alignSelf: 'center',
          marginTop: 10,
          selectedDayBackgroundColor: 'orange',
        }}
        theme={{
          backgroundColor: '#ffff',
          calendarBackground: '#000',
          textSectionTitleColor: 'white',
          selectedDayBackgroundColor: '#00adf5',
          selectedDayTextColor: 'red',
          todayTextColor: 'red',
          dayTextColor: '#2d4150',
        }}
        onDayPress={day => {
          setSelected(day.dateString);
          console.log(setSelected)
        }}
      />
      <Text>{selected}</Text>
    </View>
  );
};

export default CabCalendar;

const styles = StyleSheet.create({});
