import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  Pressable,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import SmallCard from '../../components/hotel/SmallCard';


const Flight = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [infantCount, setInfantCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);
  const [adultCount, setAdultCount] = useState(1);
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);

  const handleInfantIncrement = () => {
    setInfantCount(infantCount + 1);
  };
  const handleInfantDecrement = () => {
    if (infantCount <= 0) {
      return;
    } else setInfantCount(infantCount - 1);
  };
  const handleChildrenIncrement = () => {
    setChildrenCount(childrenCount + 1);
  };
  const handleChildrenDecrement = () => {
    if (childrenCount <= 0) {
      return;
    }
    setChildrenCount(childrenCount - 1);
  };
  const handleAdultIncrement = () => {
    setAdultCount(adultCount + 1);
  };

  const handleAdultDecrement = () => {
    if (adultCount <= 1) {
      return;
    }
    setAdultCount(adultCount - 1);
  };

  return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <View
        style={{
          paddingBottom: 20,
          width: '100%',
          backgroundColor: 'white',
          marginTop: 10,
          alignSelf: 'center',
          borderRadius: 6,
        }}>
        <View
          style={{
            height: 35,
            width: '95%',
            backgroundColor: 'white',
            alignItems: 'center',
            marginTop: 10,
            justifyContent: 'space-around',
            alignSelf: 'center',
            borderRadius: 10,
            flexDirection: 'row',
            elevation: 5,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: selectedTab == 0 ? 'orange' : 'white',
              width: '33%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
            }}
            onPress={() => setSelectedTab(0)}>
            <Text>ONE WAY</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: '33%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: selectedTab == 1 ? 'orange' : 'white',
            }}
            onPress={() => setSelectedTab(1)}>
            <Text>ROUNDTRIP</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: '33%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: selectedTab == 2 ? 'orange' : 'white',
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
            }}
            onPress={() => setSelectedTab(2)}>
            <Text>MULTICITY</Text>
          </TouchableOpacity>
        </View>
      <SmallCard/>
        <View
          style={{
            height: 30,
            width: 20,
            borderWidth: 1,
            borderColor: '#eaeaea',
            backgroundColor: 'white',
            position: 'absolute',
            top: 175,
            alignSelf: 'flex-end',
            right: 20,
            zIndex: 1,
            borderRadius: 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../images/updown.png')}
            style={{height: 15, width: 15, tintColor: '#2d84cb'}}
          />
        </View>
        <TouchableOpacity
          style={{
            height: 70,
            width: '95%',
            flexDirection: 'row',
            alignSelf: 'center',
            marginTop: 10,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#dadada',
            alignItems: 'center',
            backgroundColor: '#f7f7f7',
          }}
          onPress={() => navigation.navigate('FlightSearch')}>
          <View style={{height: '90%', width: '15%'}}>
            <Image
              source={require('../../../assets/from_icon.png')}
              style={{
                height: 20,
                width: 20,
                alignSelf: 'center',
                marginTop: 10,
               
              }}
            />
          </View>
          <View>
            <Text style={{color: 'grey', fontSize: 12, fontWeight: 500}}>
              FROM
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <Text style={{fontSize: 18, fontWeight: 700, marginRight: 5}}>
                New Delhi
              </Text>
              <Text style={{fontSize: 14, color: '#5b5b5b'}}>DEL</Text>
            </View>

            <Text style={{fontSize: 12, color: 'grey'}}>
              Indira Gandhi International Airport
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            height: 70,
            width: '95%',
            flexDirection: 'row',
            alignSelf: 'center',
            marginTop: 10,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#dadada',
            alignItems: 'center',
            backgroundColor: '#f7f7f7',
          }}>
          <View style={{height: '90%', width: '15%'}}>
            <Image
              source={require('../../../assets/to_icon.png')}
              style={{
                height: 20,
                width: 20,
                alignSelf: 'center',
                marginTop: 10,
                tintColor: '#939393',
              }}
            />
          </View>

          <View>
            <Text style={{color: 'grey', fontSize: 12, fontWeight: 500}}>
              To
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <Text style={{fontSize: 18, fontWeight: 700, marginRight: 5}}>
                Mumbai
              </Text>
              <Text style={{fontSize: 14, color: '#5b5b5b'}}>BOM</Text>
            </View>
            <Text style={{fontSize: 12, color: 'grey'}}>
              Chhatrapati Shivaji International Airport
            </Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignSelf: 'center',
            width: '95%',
          }}>
          <TouchableOpacity
            style={{
              height: 45,
              width: '49%',
              flexDirection: 'row',
              alignSelf: 'center',
              marginTop: 10,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#dadada',
              alignItems: 'center',
              backgroundColor: '#f7f7f7',
            }}>
            <View
              style={{
                width: 35,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../../../assets/startingdate_icon.png')}
                style={{
                  height: 20,
                  width: 20,
                  alignSelf: 'center',
                  tintColor: '#939393',
                }}
              />
            </View>
            <View
              style={{
                marginRight: 10,
                justifyContent: 'center',
                marginLeft: 10,
              }}>
              <Text style={{color: 'grey', fontSize: 12, fontWeight: 500}}>
                DEPARTURE DATE
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: 700, marginRight: 5}}>
                  8 Feb
                </Text>
                <Text style={{fontSize: 12, color: 'grey'}}>Thu, 2024</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 45,
              width: '49%',
              marginTop: 10,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#dadada',
              backgroundColor: '#f7f7f7',
              justifyContent: 'center',
            }}>
            <View
              style={{
                alignSelf: 'center',
                justifyContent: 'space-between',
                height: '90%',
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('MyDatePicker')}>
                <Text style={{color: 'grey', fontSize: 12, fontWeight: 500}}>
                  +ADD RETURN DATE
                </Text>
                <Text style={{fontSize: 12, color: 'grey', marginBottom: 5}}>
                  Save more on round trips!
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignSelf: 'center',
            width: '95%',
          }}>
          <TouchableOpacity
            style={{
              height: 45,
              width: '49%',
              flexDirection: 'row',
              marginTop: 10,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#dadada',
              alignItems: 'center',
              backgroundColor: '#f7f7f7',
            }}
            onPress={() => setModalVisible(true)}>
            <View style={{height: '90%', width: '15%'}}>
              <Image
                source={require('../../images/user.png')}
                style={{
                  height: 20,
                  width: 20,
                  alignSelf: 'center',
                  marginTop: 10,
                  tintColor: '#939393',
                  marginLeft: 10,
                }}
              />
            </View>
            <View style={{marginLeft: 10}}>
              <Text style={{color: 'grey', fontSize: 12, fontWeight: 500}}>
                TRAVELLERS
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 14, fontWeight: 600}}>
                  {adultCount} Adult, {childrenCount} Children
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 45,
              width: '49%',
              flexDirection: 'row',
              alignSelf: 'center',
              marginTop: 10,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#dadada',
              alignItems: 'center',
              backgroundColor: '#f7f7f7',
              paddingLeft: 10,
              paddingRight: 10,
            }}
            onPress={() => setModalVisible1(true)}>
            <View style={{height: '90%', width: '15%'}}>
              <Image
                source={require('../../../assets/travelclass_icon.png')}
                style={{
                  height: 20,
                  width: 20,
                  alignSelf: 'center',
                  marginTop: 10,
                 
                }}
              />
            </View>
            <View style={{marginLeft: 10}}>
              <Text style={{color: 'grey', fontSize: 12, fontWeight: 500}}>
                TRAVEL CLASS
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 14, fontWeight: 600}}>Economy</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            height: 40,
            width: '95%',
            backgroundColor: 'orange',
            marginTop: 20,
            borderRadius: 6,
            alignSelf: 'center',
          }}
          onPress={() => navigation.navigate('PriceFlight')}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              marginTop: 5,
              fontSize: 20,
              fontWeight: 700,
            }}>
            Search
          </Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View
          style={{
            backgroundColor: 'rgba(0,0,0,0.5)',
            flex: 1,
            justifyContent: 'center',
          }}>
          <View
            style={{
              alignSelf: 'center',
              backgroundColor: '#ffffff',
              margin: 50,
            }}>
            <View>
              <Text
                style={{
                  marginLeft: 20,
                  fontSize: 18,
                  marginTop: 20,
                  marginBottom: 10,
                }}>
                Add passengers
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 20,
                marginBottom: 20,
              }}>
              <View style={{marginRight: 60}}>
                <Text style={{fontSize: 16}}> {adultCount} Adults</Text>
                <Text style={{fontSize: 12, color: 'grey', fontWeight: 600}}>
                  12 years old and above
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: 10,
                }}>
                <TouchableOpacity
                  onPress={handleAdultDecrement}
                  style={{
                    height: 15,
                    width: 15,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={require('../../images/minus.png')}
                    style={{
                      height: 10,
                      width: 10,
                      tintColor: 'blue',
                      marginRight: 10,
                    }}
                  />
                </TouchableOpacity>
                <Text style={{marginRight: 10}}>{adultCount}</Text>
                <TouchableOpacity
                  onPress={handleAdultIncrement}
                  style={{
                    height: 15,
                    width: 15,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={require('../../images/plus.png')}
                    style={{height: 10, width: 10, tintColor: 'blue'}}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 20,
                marginBottom: 20,
              }}>
              <View style={{marginRight: 60}}>
                <Text style={{fontSize: 16}}>{childrenCount} Children</Text>
                <Text style={{fontSize: 12, color: 'grey', fontWeight: 600}}>
                  2 to 12 years old
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: 10,
                }}>
                <TouchableOpacity
                  onPress={handleChildrenDecrement}
                  style={{
                    height: 15,
                    width: 15,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={require('../../images/minus.png')}
                    style={{
                      height: 10,
                      width: 10,
                      tintColor: 'blue',
                      marginRight: 10,
                    }}
                  />
                </TouchableOpacity>
                <Text style={{marginRight: 10}}>{childrenCount}</Text>
                <TouchableOpacity
                  onPress={handleChildrenIncrement}
                  style={{
                    height: 15,
                    width: 15,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={require('../../images/plus.png')}
                    style={{height: 10, width: 10, tintColor: 'blue'}}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 20,
                marginBottom: 20,
              }}>
              <View style={{marginRight: 60}}>
                <Text style={{fontSize: 16}}>{infantCount} Infants</Text>
                <Text style={{fontSize: 12, color: 'grey', fontWeight: 600}}>
                  Less than 2 years
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: 10,
                }}>
                <TouchableOpacity
                  onPress={handleInfantDecrement}
                  style={{
                    height: 15,
                    width: 15,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={require('../../images/minus.png')}
                    style={{
                      height: 10,
                      width: 10,
                      tintColor: 'blue',
                      marginRight: 10,
                    }}
                  />
                </TouchableOpacity>
                <Text style={{marginRight: 10}}>{infantCount}</Text>
                <TouchableOpacity
                  onPress={handleInfantIncrement}
                  style={{
                    height: 15,
                    width: 15,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={require('../../images/plus.png')}
                    style={{height: 10, width: 10, tintColor: 'blue'}}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
                marginBottom: 10,
              }}>
              <Pressable
                style={{
                  width: '40%',
                  margin: 10,
                  backgroundColor: '#e8f0fc',
                }}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={{textAlign: 'center', padding: 5, color: 'blue'}}>
                  OK
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible1}
        onRequestClose={() => {
          setModalVisible1(!modalVisible1);
        }}>
        <View
          style={{
            backgroundColor: 'rgba(0,0,0,0.5)',
            flex: 1,
            justifyContent: 'center',
          }}>
          <View
            style={{
              alignSelf: 'center',
              backgroundColor: '#ffffff',
              width: '70%',
            }}>
            <View>
              <Text
                style={{
                  marginLeft: 20,
                  fontSize: 18,
                  marginTop: 20,
                  marginBottom: 20,
                  fontWeight: 600,
                }}>
                Select a Class
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: 20,
                alignItems: 'center',
              }}>
              <Image
                source={require('../../images/non-selected.png')}
                style={{height: 20, width: 20, tintColor: '#2b2b2b'}}
              />
              <Text
                style={{
                  color: '#2b2b2b',
                  marginLeft: 20,
                  fontSize: 16,
                  fontWeight: 400,
                }}>
                Economy
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: 20,
                marginTop: 20,
                alignItems: 'center',
              }}>
              <Image
                source={require('../../images/non-selected.png')}
                style={{height: 20, width: 20, tintColor: '#2b2b2b'}}
              />
              <Text
                style={{
                  color: '#2b2b2b',
                  marginLeft: 20,
                  fontSize: 16,
                  fontWeight: 400,
                }}>
                Business
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: 20,
                marginTop: 20,
                alignItems: 'center',
              }}>
              <Image
                source={require('../../images/non-selected.png')}
                style={{height: 20, width: 20, tintColor: '#2b2b2b'}}
              />
              <Text
                style={{
                  color: '#2b2b2b',
                  marginLeft: 20,
                  fontSize: 16,
                  fontWeight: 400,
                }}>
                First Class
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: 20,
                marginTop: 20,
                marginBottom: 20,
                alignItems: 'center',
              }}>
              <Image
                source={require('../../images/non-selected.png')}
                style={{height: 20, width: 20, tintColor: '#2b2b2b'}}
              />
              <Text
                style={{
                  color: '#2b2b2b',
                  marginLeft: 20,
                  fontSize: 16,
                  fontWeight: 400,
                }}>
                Premium Economy
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default Flight;
