import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import React from 'react';

const CustomDrawer = () => {

  
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          marginTop: 20,
          marginHorizontal: 10,
          backgroundColor: 'orange',
          borderRadius: 6,
          height: 80,
          flexDirection: 'row',
        }}>
        <View
          style={{
            height: 40,
            width: 40,
            backgroundColor: 'white',
            borderRadius: 50,
            alignSelf: 'center',
            marginLeft: 10,
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../../assets/user2.png')}
            style={{
              height: 20,
              width: 20,
              alignSelf: 'center',
              tintColor: 'grey',
            }}
          />
        </View>
        <View style={{alignSelf: 'center', marginLeft: 10}}>
          <Text style={{color: 'white', fontSize: 18, fontWeight: 700}}>
            Hi Sounak
          </Text>
          <Text style={{color: 'white', fontSize: 12}}>8617362082</Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 20,
          marginHorizontal: 10,
          borderRadius: 6,
          height: 80,
          flexDirection: 'row',
          borderColor: '#d9d9d9',
          borderWidth: 1,
          justifyContent: 'space-between',
          paddingRight: 10,
        }}>
        <View
          style={{
            alignSelf: 'center',
            alignItems: 'center',
            marginLeft: 10,
          }}>
          <Image
            source={require('../../../assets/my_account.png')}
            style={{height: 45, width: 45, resizeMode: 'contain'}}
          />
          <Text style={{fontSize: 12, color: '#000'}}>My Account</Text>
        </View>
        <View
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            marginLeft: 10,
            alignItems: 'center',
          }}>
          <Image
            source={require('../../../assets/support.png')}
            style={{height: 45, width: 45, resizeMode: 'contain'}}
          />
          <Text style={{fontSize: 12, color: '#000'}}>Support</Text>
        </View>
        <View
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            marginLeft: 10,
            alignItems: 'center',
          }}>
          <Image
            source={require('../../../assets/notivications.png')}
            style={{height: 45, width: 45, resizeMode: 'contain'}}
          />
          <Text style={{fontSize: 12, color: '#000'}}>Notification</Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 20,
          marginHorizontal: 10,
          borderRadius: 6,
          borderColor: '#d9d9d9',
          borderWidth: 1,
          paddingBottom: 10,
        }}>
        <Text
          style={{
            marginTop: 10,
            marginLeft: 10,
            marginBottom: 10,
            color: '#000',
          }}>
          My trips
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
            marginBottom: 15,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../../assets/view_manage_trips.png')}
              style={{
                height: 24,
                width: 24,
                marginRight: 10,
              }}
            />
            <Text style={{fontSize: 12, fontWeight: 600, color: '#000'}}>
              View/Manage Trips
            </Text>
          </View>
          <Image
            source={require('../../../assets/next.png')}
            style={styles.nextImage}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
            marginBottom: 15,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../../assets/wishlist.png')}
              style={{
                height: 24,
                width: 26,
                marginRight: 10,
              }}
            />
            <Text style={{fontSize: 12, fontWeight: 600, color: '#000'}}>
              Wishlist
            </Text>
          </View>
          <Image
            source={require('../../../assets/next.png')}
            style={styles.nextImage}
          />
        </View>
      </View>
      <View
        style={{
          marginTop: 20,
          marginHorizontal: 10,
          borderRadius: 6,
          borderColor: '#d9d9d9',
          borderWidth: 1,
          paddingBottom: 10,
        }}>
        <Text
          style={{
            marginTop: 10,
            marginLeft: 10,
            marginBottom: 10,
            color: '#000',
          }}>
          Rewards
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
            marginBottom: 15,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../../assets/gift_cards.png')}
              style={{
                height: 24,
                width: 24,
                marginRight: 10,
              }}
            />
            <Text style={{fontSize: 12, fontWeight: 600, color: '#000'}}>
              Gift Cards
            </Text>
          </View>
          <Image
            source={require('../../../assets/next.png')}
            style={styles.nextImage}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
            marginBottom: 15,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../../assets/rewards.png')}
              style={{
                height: 24,
                width: 24,
                marginRight: 10,
              }}
            />
            <Text style={{fontSize: 12, fontWeight: 600, color: '#000'}}>
              Rewards
            </Text>
          </View>
          <Image
            source={require('../../../assets/next.png')}
            style={styles.nextImage}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
            marginBottom: 15,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../../assets/refer&earn.png')}
              style={{
                height: 24,
                width: 24,
                marginRight: 10,
              }}
            />
            <Text style={{fontSize: 12, fontWeight: 600, color: '#000'}}>
              Refer & Earn
            </Text>
          </View>
          <Image
            source={require('../../../assets/next.png')}
            style={styles.nextImage}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
            marginBottom: 15,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../../assets/holiday_refer_eran.png')}
              style={{
                height: 24,
                width: 24,
                marginRight: 10,
              }}
            />
            <Text style={{fontSize: 12, fontWeight: 600, color: '#000'}}>
              Holidays Refer & earn
            </Text>
          </View>
          <Image
            source={require('../../../assets/next.png')}
            style={styles.nextImage}
          />
        </View>
      </View>
      <View
        style={{
          marginTop: 20,
          marginHorizontal: 10,
          borderRadius: 6,
          borderColor: '#d9d9d9',
          borderWidth: 1,
          paddingBottom: 10,
        }}>
        <Text
          style={{
            marginTop: 10,
            marginLeft: 10,
            marginBottom: 10,
            color: '#000',
          }}>
          Settings
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
            marginBottom: 15,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../../assets/language.png')}
              style={{
                height: 24,
                width: 24,
                marginRight: 10,
              }}
            />
            <Text style={{fontSize: 12, fontWeight: 600, color: '#000'}}>
              Language
            </Text>
          </View>
          <Image
            source={require('../../../assets/next.png')}
            style={styles.nextImage}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
            marginBottom: 15,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../../assets/country_icon.png')}
              style={{
                height: 24,
                width: 24,
                marginRight: 10,
              }}
            />
            <Text style={{fontSize: 12, fontWeight: 600, color: '#000'}}>
              Country
            </Text>
          </View>
          <Image
            source={require('../../../assets/next.png')}
            style={styles.nextImage}
          />
        </View>
      </View>
      <Text
        style={{
          alignSelf: 'center',
          marginTop: 20,
          fontSize: 10,
          color: '#0379d3',
          fontWeight: 600,
        }}>
        Rate Us • Privacy Policy{' '}
      </Text>
      <Text
        style={{
          alignSelf: 'center',
          marginBottom: 40,
          fontSize: 12,
          fontWeight: 500,
          color: '#000',
        }}>
        App Version 1.0.1
      </Text>
    </ScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  nextImage: {
    height: 12,
    width: 12,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
});


