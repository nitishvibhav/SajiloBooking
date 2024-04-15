import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CabCard from './CabCard'

const Sedan = () => {
  return (
    <CabCard
      carname="Sedan or Equivalent"
      price=" ₹ 875"
      distance="23.0 Kms"
      icon={require('../../../assets/sedan2.jpg')}
      seat="4 Seater"
      bags="3 Bags"
    />
  )
}

export default Sedan

const styles = StyleSheet.create({})