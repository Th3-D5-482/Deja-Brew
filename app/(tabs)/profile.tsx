import { View, Text,Image } from 'react-native'
import React from 'react'
import {Colors} from '@/components/colors'

export default function profile() {
  return (
    <View className='flex-1 px-16 pt-32' style ={{backgroundColor: Colors.primary}}>
      <Text className='text-white text-[24px] text-center font-bold underline mb-32'>Project: Lyon</Text>
      <Image source={require('@/assets/images/cofee_cup.png')} style = {{width: 300, height: 300}}className='relative mb-32'/>
      <Text className='text-white text-[24px] text-center font-bold underline mb-5'>Work In Progress</Text>
      <Text className='text-[20px] text-center text-white'>By: Th3_D5_482</Text>
    </View>
  )
}