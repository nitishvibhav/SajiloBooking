import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Modal,
  Pressable,
  Image
} from 'react-native';
import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import {useState} from 'react';
import CustomModal from '../CustomModal';
import CustomButton from '../CustomButton';

const TravellerDetails = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.textHeading}>1/4 Traveller details</Text>
        <Text style={{color: 'red', fontWeight: '500'}}>Mandatory</Text>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: '#d5d5d5',
          marginVertical: 10,
        }}
      />
      <Text style={styles.text2}>2 Travellers</Text>
      <Text style={styles.text1}>1Room : 2Adults</Text>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: '#d5d5d5',
          marginVertical: 10,
          marginHorizontal: 10,
        }}
      />
      <Text style={styles.textHeading}>Booking For</Text>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
        <View
          style={{
            width: '50%',
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 5,
          }}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />
          <Text style={styles.text2}>Myself</Text>
        </View>
        <View
          style={{width: '50%', flexDirection: 'row', alignItems: 'center'}}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />
          <Text style={styles.text2}>Someone else</Text>
        </View>
      </View>
      <View style={{paddingHorizontal: 10, marginTop: 10}}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.textTraveller}>+ Traveller 1</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: '#d5d5d5',
          marginVertical: 10,
          marginHorizontal: 10,
        }}
      />
      <View style={{paddingHorizontal: 10}}>
        <Text style={styles.textTraveller}>+ Traveller 2</Text>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: '#d5d5d5',
          marginVertical: 10,
          marginHorizontal: 10,
        }}
      />
      <View style={{paddingHorizontal: 10}}>
        <Text style={styles.textTraveller}>+ Special Requests</Text>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: '#d5d5d5',
          marginVertical: 10,
          marginHorizontal: 10,
        }}
      />

      <Text style={styles.textHeading}>Contact Information</Text>
      <TextInput placeholder="EMAIL ID" style={styles.textinput} />
      <TextInput placeholder="MOBILE NO." style={styles.textinput} />
      <TextInput placeholder="CITY" style={styles.textinput} />
      <TextInput placeholder="GST STATE" style={styles.textinput} />
      <TextInput placeholder="GST ADDRESS" style={styles.textinput} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={{backgroundColor: 'rgba(0,0,0,0.5)', flex: 1}}>
          <View
            style={{
              width: '100%',
              backgroundColor: '#ffffff',
              bottom: 0,
              position: 'absolute',
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              paddingBottom:10
            }}>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: 10,
                marginTop: 20,
                justifyContent: 'space-between',
                marginBottom:10,
                alignItems:'center'
              }}>
              <Text style={{marginLeft: 10, fontSize: 16, fontWeight: 700, color:'#2370e6'}}>
                Add Traveller1
              </Text>
              <Pressable
                style={{
                  borderRadius: 50,
                  height: 16,
                  width: 16,
                  marginRight: 20,
                  backgroundColor: '#2370e6',
                }}
                onPress={() => setModalVisible(!modalVisible)}>
                <Image
                  source={require('../../../assets/reject.png')}
                  style={{height: 16, width: 16, tintColor: 'white'}}
                />
              </Pressable>
            </View>
            
            <View style={{flexDirection: 'row', marginLeft: 10, marginVertical: 10}}>
              <View
                style={{
                  flexDirection: 'row',
                  marginRight: 20,
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../../assets/selected.png')}
                  style={{
                    height: 20,
                    width: 20,
                    marginLeft: 10,
                    marginRight: 10,
                    tintColor: '#2370e6',
                  }}
                />
                <Text style={{color: '#212121', fontSize: 16, fontWeight: 600}}>
                  Male
                </Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={require('../../../assets/non-selected.png')}
                  style={{
                    height: 20,
                    width: 20,
                    marginLeft: 10,
                    marginRight: 10,
                    tintColor: '#778797',
                  }}
                />
                <Text style={{color: '#212121', fontSize: 16, fontWeight: 600}}>
                  Female
                </Text>
              </View>
            </View>
            <TextInput
              style={styles.textinput}
              placeholder="FIRST NAME"
            />
            <TextInput
              style={styles.textinput}
              placeholder="LAST NAME"
            />
            <TextInput style={styles.textinput} placeholder='DATE OF BIRTH'/>
            <CustomButton title="Save & Close" width="95%"/>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default TravellerDetails;

const styles = StyleSheet.create({
  textHeading: {
    fontSize: 18,
    color: '#000',
    fontWeight: '700',
    paddingHorizontal: 10,
  },
  text: {
    color: '#555555',
    marginTop: 5,
    paddingHorizontal: 10,
  },
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 20,
  },
  mainContainer: {
    width: '95%',
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: 'white',
    marginTop: 10,
    paddingVertical: 10,
  },
  text2: {
    color: 'black',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 10,
  },
  text1: {
    color: '#555555',
    paddingHorizontal: 10,
  },
  textTraveller: {
    color: '#0095ef',
    fontSize: 16,
    fontWeight: '800',
  },
  textinput: {
    borderWidth: 1,
    width: '95%',
    alignSelf: 'center',
    marginVertical: 10,
    borderRadius: 6,
    paddingHorizontal: 20,
    borderColor: '#d5d5d5',
  },
});
