import { View, Text, ScrollView,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/components/colors'
import { router, useLocalSearchParams } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

export default function description() {
  const {image,name,price} = useLocalSearchParams();
  return (
    <View className ='flex-1 px-8 pt-5' style = {{backgroundColor: Colors.primary}}>
        <ScrollView showsVerticalScrollIndicator = {false}>
            <View className='border border-green-900 h-[450px] rounded-xl'>
            <Image source={require("@/assets/images/classic-cappuccino.png")} style={{ width: 400, height: 480, objectFit: 'contain' }} className='mx-auto' />
                <View className='rounded-full h-12 w-12 border border-red-900 top-[-460px] left-5 p-1'>
                  <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name='arrow-back' color={Colors.inactiveTab} size ={32}></Ionicons>
                  </TouchableOpacity>
                </View>
                <Text className='text-white'>{name}</Text>
            </View>
      </ScrollView>
    </View>
  )
}