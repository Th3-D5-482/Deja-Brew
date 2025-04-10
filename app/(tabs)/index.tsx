import { View, Text, StatusBar } from 'react-native'
import React from 'react';
import {styles} from '@/styles/style'
import { Colors } from '@/components/colors'

export default function index() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.primary}/>
      <Text style ={styles.text}>déjà Brew</Text>
    </View>
  )
}