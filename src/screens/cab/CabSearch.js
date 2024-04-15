import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Pressable,
  Image,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import CustomTouchableOpacity from '../../components/CustomTouchableOpacity';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';
import {Calendar} from 'react-native-calendars';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const CabSearch = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const [selected, setSelected] = useState('2024-04-25');

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    hideDatePicker();
  };
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
      <View style={styles.container}>
        <TouchableOpacity
          style={{
            backgroundColor: selectedTab == 0 ? 'orange' : 'white',
            width: '50%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
          }}
          onPress={() => setSelectedTab(0)}>
          <Text
            style={{
              color: '#000',
              fontSize: 16,
              fontWeight: '600',
              textTransform: selectedTab == 0 ? 'uppercase' : 'capitalize',
            }}>
            From Airport
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: '100%',
            width: '50%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: selectedTab == 1 ? 'orange' : 'white',
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
          }}
          onPress={() => setSelectedTab(1)}>
          <Text
            style={{
              color: '#000',
              fontSize: 16,
              fontWeight: '600',
              textTransform: selectedTab == 1 ? 'uppercase' : 'capitalize',
            }}>
            To Airport
          </Text>
        </TouchableOpacity>
      </View>
      <CustomTouchableOpacity
        icon={require('../../images/location.png')}
        text="AIRPORT"
        text2="New Delhi"
        width="95%"
      />
      <CustomTouchableOpacity
        icon={require('../../images/location.png')}
        text="DROP ADDRESS"
        text2="Rohini"
        width="95%"
      />
      <CustomTouchableOpacity
        icon={require('../../../assets/schedule.png')}
        text="PICK UP"
        text2={selected}
        width="95%"
        onPress={showDatePicker}
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <CustomTouchableOpacity
        icon={require('../../../assets/stop-watch.png')}
        text="PICK UP AT"
        text2="6:00 PM"
        width="95%"
        onPress={showDatePicker}
      />
      
      <CustomButton title="Explore Cabs" width="95%" onPress={()=>navigation.navigate('CabList')}/>
    </View>
  );
};

export default CabSearch;

const styles = StyleSheet.create({
  container: {
    height: 35,
    width: '95%',
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'space-between',
    alignSelf: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    elevation: 5,
  },
});
