import { View, Text , StyleSheet, Button, SafeAreaView, ScrollView,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import Accordion from 'react-native-collapsible/Accordion';
import { useState } from 'react';

const CollapseItinerary = ({day}) => {
    const [ activeSections, setActiveSections ] = useState([]);
    const sections = [
        {
          title: <TouchableOpacity
          style={{
            padding: 10,
            width: '95%',
            justifyContent: 'space-between',
            flexDirection: 'row',
            backgroundColor: 'white',
            alignSelf: 'center',
            borderRadius: 10,
            marginTop: 10,
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../../assets/maps.png')}
              style={{height: 16, width: 16, tintColor: 'black'}}
            />
            <Text
              style={{
                marginLeft: 5,
                color: '#000',
                fontWeight: '700',
                fontSize: 14,
              }}>
              {day}
            </Text>
          </View>
          <Image
            source={require('../../../assets/down.png')}
            style={{height: 20, width: 20, tintColor: 'black'}}
          />
        </TouchableOpacity>,
          content: <Text style={styles.textSmall}>
            React Native lets you create truly native apps and
            doesn't compromise your users' experiences. It provides a core set of platform
            agnostic native components
          </Text>
        },
        
      ];

      function renderHeader(section, _, ) {
        return (
          <View style={styles.accordHeader}>
            <Text style={styles.accordTitle}>{ section.title }</Text>
          </View>
        );
      };

      function renderContent(section, _, ) {
        return (
          <View style={styles.accordBody}>
            {section.content}
          </View>
        );
      }
      return (
        <SafeAreaView style={styles.container}>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.container}>
              <Accordion
                align="bottom"
                sections={sections}
                activeSections={activeSections}
                renderHeader={renderHeader}
                renderContent={renderContent}
                onChange={(sections) => setActiveSections(sections)}
                sectionContainerStyle={styles.accordContainer}
              />
          </ScrollView>
        </SafeAreaView>
      );
    }

export default CollapseItinerary
const styles = StyleSheet.create({
    container: {
    flex:1,
    width:'95%'
      
    },
    
    accordContainer:{
        width:'95%'
    }
    });