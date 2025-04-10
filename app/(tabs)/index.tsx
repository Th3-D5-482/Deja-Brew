import { View, Text, StatusBar, TextInput, Image } from 'react-native'
import React from 'react';
import {styles} from '@/styles/style'
import { Colors } from '@/components/colors'
import { stylesIndex } from '@/styles/index'

export default function index() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.primary}/>
      <Text style ={stylesIndex.text1}>déjà</Text>
      <Text style = {stylesIndex.text2}>Brew</Text>
      <View style={stylesIndex.searchBar}>
        <Image source={require('@/assets/images/search.png')} style = {stylesIndex.image}/>
        <TextInput style ={stylesIndex.input} placeholder='Browse your favorite coffee ...' placeholderTextColor={"#877b74"}/>
      </View>
    </View> 
  )
}