import * as React from 'react';
import Splash from './screens/Splash';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screens/login/Login';
import SignUp from './screens/login/SignUp';
import ForgotPassword from './screens/login/ForgotPassword';
import MainScreen from './screens/MainScreen';
import Hotel from './screens/hotel/Hotel';
import Flight from './screens/flight/Flight';
import PriceFlight from './screens/flight/PriceFlight';
import FlightBook from './screens/flight/FlightBook';
import ReviewFlight from './screens/flight/ReviewFlight';
import MyDatePicker from './components/flight/MyDatePicker';
import FlightSearch from './screens/flight/FlightSearch';
import HotelList from './screens/hotel/HotelList';
import HotelInfo from './screens/hotel/HotelInfo';
import Amenities from './screens/hotel/Amenities';
import SelectRoom from './screens/hotel/SelectRoom';
import ReviewHotel from './screens/hotel/ReviewHotel';
import HolidayPackageSearchPage from './screens/HolidayPackage/HolidayPackageSearchPage';
import HolidayPackageListPage from './screens/HolidayPackage/HolidayPackageListPage';
import HolidayPackageDetails from './screens/HolidayPackage/HolidayPackageDetails';
import Notification from './components/homepage/Notification';

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Hotel"
          component={Hotel}
          options={{headerShown: true, title:"Hotels & Homestays"}}
        />
        <Stack.Screen
          name="Flight"
          component={Flight}
          options={{headerShown: true, title:'Flight Search'}}
        />
        <Stack.Screen
          name="PriceFlight"
          component={PriceFlight}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FlightBook"
          component={FlightBook}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="ReviewFlight"
          component={ReviewFlight}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyDatePicker"
          component={MyDatePicker}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FlightSearch"
          component={FlightSearch}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HotelList"
          component={HotelList}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HotelInfo"
          component={HotelInfo}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Amenities"
          component={Amenities}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SelectRoom"
          component={SelectRoom}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ReviewHotel"
          component={ReviewHotel}
          options={{headerShown: true, title: 'Review Booking'}}
        />
        <Stack.Screen
        name="HolidayPackageSearchPage"
        component={HolidayPackageSearchPage}
        options={{headerShown: true, title: "Holiday Packages"}}
      />
      <Stack.Screen
        name="HolidayPackageListPage"
        component={HolidayPackageListPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HolidayPackageDetails"
        component={HolidayPackageDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
          name="Notification"
          component={Notification}
          options={{ headerShown: true, title: "Notification" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
