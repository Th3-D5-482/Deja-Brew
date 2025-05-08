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
            </View>
            <View className='border border-red-900 mt-[30px] h-[80px] flex flex-row'>
              <View className='w-[80%] border border-green-900 h-[80px]'>
                <Text className='text-white text-2xl font-bold'>{name}</Text>
              </View>
              <View className='w-[20%] border border-green-900 h-[80px] p-4'>
                <Ionicons name='heart' size={42} color ={Colors.inactiveTab}/>
              </View>
            </View>
      </ScrollView>
    </View>
  )
}