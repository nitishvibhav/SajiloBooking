import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
  TextInput,
  StyleSheet
} from 'react-native';
import React from 'react';

const CustomModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
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
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 10,
              marginTop: 20,
              justifyContent: 'space-between',
            }}>
            <Text style={{marginLeft: 10, fontSize: 16, fontWeight: 700}}>
              Add Adult1
            </Text>
            <Pressable
              style={{
                borderRadius: 50,
                height: 20,
                width: 20,
                marginRight: 20,
                backgroundColor: '#b5b5b5',
              }}
              onPress={() => setModalVisible1(!modalVisible1)}>
              <Image
                source={require('../../assets/reject.png')}
                style={{height: 20, width: 20, tintColor: 'white'}}
              />
            </Pressable>
          </View>
          <View
            style={{
              backgroundColor: '#fef8f8',
              paddingLeft: 20,
              paddingRight: 20,
              marginTop: 10,
              padding: 10,
            }}>
            <Text style={{color: '#ff9764', fontSize: 12}}>
              Double Check the spellings, to avoid modifications later{' '}
              <Text style={{color: '#362e2e', fontSize: 12}}>
                Ensure the name and spelling matches with that on the{' '}
              </Text>{' '}
              <Text style={{color: '#362e2e', fontSize: 12, fontWeight: 700}}>
                {' '}
                valid government ID
              </Text>{' '}
              <Text style={{color: '#362e2e', fontSize: 12}}>
                you will be carrying{' '}
              </Text>
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginLeft: 10, marginTop: 10}}>
            <View
              style={{
                flexDirection: 'row',
                marginRight: 20,
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/selected.png')}
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
                source={require('../../assets/non-selected.png')}
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
            style={{
              backgroundColor: '#f7f7f7',
              borderColor: '#e3e3e3',
              borderWidth: 1,
              width: '90%',
              alignSelf: 'center',
              padding: 10,
              color: '#a9a9a9',
              paddingLeft: 20,
              marginTop: 20,
              borderRadius: 6,
            }}
            placeholder="First & Middle Name"
          />
          <TextInput
            style={{
              backgroundColor: '#f7f7f7',
              borderColor: '#e3e3e3',
              borderWidth: 1,
              width: '90%',
              alignSelf: 'center',
              padding: 10,
              color: '#a9a9a9',
              paddingLeft: 20,
              marginTop: 20,
              borderRadius: 6,
            }}
            placeholder="Last Name"
          />
          <TouchableOpacity
            style={{
              width: '90%',
              alignSelf: 'center',
              backgroundColor: '#999999',
              height: 50,
              borderColor: '#e4e4e4',
              borderWidth: 1,
              borderRadius: 10,
              marginTop: 30,
              marginBottom: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: '#ffffff', fontSize: 16, fontWeight: 800}}>
              Save & Close
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({});
