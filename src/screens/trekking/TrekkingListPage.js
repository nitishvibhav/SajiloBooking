import { StyleSheet, Text, ScrollView } from 'react-native'
import React from 'react'
import TrekkingListCard from '../../components/trekking/TrekkingListCard'
import {useNavigation} from '@react-navigation/native'

const TrekkingListPage = () => {
    const navigation = useNavigation()
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
     <TrekkingListCard onPress={()=>navigation.navigate('TrekkingDetailsPage')}/>
     <TrekkingListCard onPress={()=>navigation.navigate('TrekkingDetailsPage')}/>
    </ScrollView>
  )
}

export default TrekkingListPage

const styles = StyleSheet.create({})