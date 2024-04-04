import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  Pressable,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import SmallCard from '../../components/hotel/SmallCard';
import CustomTouchableOpacity from '../../components/CustomTouchableOpacity';
import CustomButton from '../../components/CustomButton';

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
          paddingBottom: 10,
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
        <SmallCard />
        <View
          style={{
            height: 36,
            width: 36,
            borderWidth: 1,
            borderColor: '#eaeaea',
            backgroundColor: 'white',
            position: 'absolute',
            top: 172,
            alignSelf: 'flex-end',
            right: 20,
            zIndex: 1,
            borderRadius: 6,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../images/updown.png')}
            style={{height: 24, width: 24, tintColor: '#2d84cb'}}
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
            backgroundColor: '#eef3ef',
            padding: 10,
          }}
          onPress={() => navigation.navigate('FlightSearch')}>
          <View>
            <Image
              source={require('../../../assets/from_icon.png')}
              style={{
                height: 18,
                width: 18,
                alignSelf: 'center',
                marginRight: 10,
              }}
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 500,
                marginRight: 5,
                color: '#7b7d7a',
                fontFamily: 'Quicksand-Bold',
              }}>
              FROM
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  marginRight: 5,
                  color: '#000',
                }}>
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
            backgroundColor: '#eef3ef',
            padding: 10,
          }}>
          <View>
            <Image
              source={require('../../../assets/to_icon.png')}
              style={{
                height: 18,
                width: 18,
                alignSelf: 'center',
                marginRight: 10,
              }}
            />
          </View>

          <View>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 500,
                marginRight: 5,
                color: '#7b7d7a',
                fontFamily: 'Quicksand-Bold',
              }}>
              To
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  marginRight: 5,
                  color: '#000',
                }}>
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
          <CustomTouchableOpacity
            width="49%"
            text="DEPARTURE DATE"
            text2="8 Feb, 2024, Thu "
            icon={require('../../../assets/checkin_icon.png')}
          />
          <CustomTouchableOpacity
            width="49%"
            text="RETURN DATE"
            text2="Add Return Date"
            icon={require('../../../assets/checkout_icon.png')}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignSelf: 'center',
            width: '95%',
          }}>
          <CustomTouchableOpacity
            width="49%"
            text="TRAVELLER"
            text2={`${adultCount} Adult, ${childrenCount} Child`}
            icon={require('../../../assets/checkout_icon.png')}
            onPress={() => setModalVisible(true)}
          />
          <CustomTouchableOpacity
            width="49%"
            text="TRAVELLER CLASS"
            text2="Economy"
            icon={require('../../../assets/travelclass_icon.png')}
            onPress={() => setModalVisible1(true)}
          />
        </View>
        <CustomButton
          width="95%"
          title="search"
          onPress={() => navigation.navigate('PriceFlight')}
        />
      </View>
      <View style={styles.containerOffer}>
        <View style={styles.textContainer}>
          <Text style={styles.textHeader}>Offers For You</Text>
          <View style={styles.rightHeader}>
            <Text
              style={{
                fontSize: 12,
                color: '#488bf0',
                fontWeight: '700',
                marginRight: 10,
              }}>
              View All
            </Text>
            <Image
              style={styles.ImageRight}
              source={require('../../../assets/next2.png')}
            />
          </View>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Image
            source={require('../../../assets/flight_inside_banner.png')}
            style={styles.offerBanner}
          />
          <Image
            source={require('../../../assets/flight_banner.png')}
            style={styles.offerBanner}
          />
          <Image
            source={require('../../../assets/flight_inside_banner.png')}
            style={styles.offerBanner}
          />
          <Image
            source={require('../../../assets/hotel_inside_banner.png')}
            style={styles.offerBanner}
          />
        </ScrollView>
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
const styles = StyleSheet.create({
  offerBanner: {
    height: 150,
    width: 350,
    marginLeft: 10,
    resizeMode: 'contain',
    borderRadius: 10,
    marginTop: 10,
  },
  textContainer: {
    width: '95%',
    paddingLeft: 10,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  textHeader: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  textHeaderRight: {
    fontSize: 12,
    color: '#488bf0',
    fontWeight: '700',
  },
  ImageRight: {
    height: 20,
    width: 20,
    alignSelf: 'center',
  },
  rightHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageView: {
    height: 16,
    width: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#488bf0',
    marginLeft: 10,
    borderRadius: 10,
  },
  container: {
    width: '100%',
    alignSelf: 'center',
    marginTop: 10,
    shadowColor: 'grey',
    paddingBottom: 10,
  },
  container2: {
    width: '100%',
    alignSelf: 'center',
    marginBottom: 10,
    shadowColor: 'grey',
    marginTop: 10,
  },
  offerBanner: {
    height: 150,
    width: 350,
    marginLeft: 10,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  containerOffer: {
    width: '100%',
    alignSelf: 'center',
    shadowColor: 'grey',
    paddingBottom: 10,
    marginTop: 10,
  },
});
