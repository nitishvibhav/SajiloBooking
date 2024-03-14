import React from "react";
import { View } from "react-native";
import { CalendarList } from "react-native-calendars";

const MyDatePicker = () => {
  return (
    <View>
      <CalendarList pastScrollRange={0} futureScrollRange={2} />
    </View>
  );
};

export default MyDatePicker;
