import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CabCard from './CabCard'

const Suv = () => {
  return (
    <CabCard
      carname="Toyota Etios or Equivalent"
      price=" ₹ 675"
      distance="23.0 Kms"
      icon={require('../../../assets/etios.jpeg')}
      seat="4 Seater"
      bags="2 Bags"
    />
  )
}

export default Suv

const styles = StyleSheet.create({})