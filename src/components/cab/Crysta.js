import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CabCard from './CabCard'

const Crysta = () => {
  return (
    <CabCard
    carname="Toyota  Crysta "
    price=" ₹ 2175"
    distance="23.0 Kms"
    icon={require('../../../assets/CrystaToyota.jpeg')}
    seat="6 Seater"
    bags="4 Bags"
  />
  )
}

export default Crysta

const styles = StyleSheet.create({})