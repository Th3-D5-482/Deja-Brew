import { View, Text, StatusBar, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { Colors } from '@/components/colors'
import { Tabs } from 'expo-router';

export default function index() {
  const [cappuccino,setCappuccino] = useState(1);
  const [latte,setLatte] = useState(0);
  const [americano,setAmericano] = useState(0);
  const [espresso,setEspresso] = useState(0);
  function funCappuccino() {
    setCappuccino(1);
    setLatte(0);
    setAmericano(0);
    setEspresso(0);
  }
  function funLatte() {
    setCappuccino(0);
    setLatte(1);
    setAmericano(0);
    setEspresso(0);
  }
  function funAmericano() {
    setCappuccino(0);
    setLatte(0);
    setAmericano(1);
    setEspresso(0);
  }
  function funEspresso() {
    setCappuccino(0);
    setLatte(0);
    setAmericano(0);
    setEspresso(1);
  }
  return (
    <View className="flex-1 px-8 pt-5" style ={{backgroundColor: Colors.primary}}>
      <ScrollView>
        <StatusBar backgroundColor={Colors.primary}/>
        <View className='flex flex-row justify-center mb-12 gap-2'>
          <Text className='text-[#877b74] text-[32px]'>déjà</Text>
          <Text className='text-white text-[32px]'>Brew</Text>
        </View>
        <View className='rounded-xl bg-[#171017] h-50 text-[18px] text-white flex-row px-[15px] mb-12 gap-5'>
          <Image source={require('@/assets/images/search.png')} className='top-[15px]'/>
          <TextInput placeholder='Browse your favorite coffee ...' placeholderTextColor={"#877b74"} className='ml-15 text-[18px] text-white'/>
        </View>
        <View className='h-[580px]'>
          <View className='h-50 rounded-xl py-2 px-2 flex flex-row justify-between'>
            <TouchableOpacity onPress={funCappuccino}>
              <Text style ={[{fontSize: 16},{color: cappuccino == 1 ? "#EFE3C8" : "#7d6b65"}]}>Cappuccino</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={funLatte}>
              <Text style ={[{fontSize: 16},{color: latte == 1 ? "#EFE3C8" : "#7d6b65"}]}>Latte</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress ={funAmericano}>
              <Text style ={[{fontSize: 16},{color: americano == 1 ? "#EFE3C8" : "#7d6b65"}]}>Americano</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={funEspresso}>
              <Text style ={[{fontSize: 16},{color: espresso == 1 ? "#EFE3C8" : "#7d6b65"}]}>Espresso</Text>
            </TouchableOpacity>
          </View>
          <View className='grid grid-cols-2 mt-8 h-[520px]'>
            <View className='w-full h-[300px] flex flex-row'>
              <View className='w-1/2 border border-green h-[300px] bg-[#362c36] px-5 rounded-xl py-5'>
                <Image source={require('@/assets/images/coffee.png')} style ={{width: 120, height: 150}}/>
                <Text className='mt-2 text-white text-xl'>Cinnamon & Cocoa</Text>
                <View className='w-full mt-3 h-10 bg-[#463d46] rounded-xl flex flex-row justify-between'>
                  <Text className='px-8 py-1 text-white text-2xl font-bold'>$100</Text>
                  <TouchableOpacity className='w-10 h-10 border bg-[#efe3c8] rounded-xl'><Text className='text-5xl px-1'>+</Text></TouchableOpacity>
                </View>
              </View>
              <View className='w-1/2 border border-green h-[300px] bg-[#362c36] px-5 rounded-xl py-5'>
                <Image source={require('@/assets/images/coffee.png')} style ={{width: 120, height: 150}}/>
                <Text className='mt-2 text-white text-xl'>Cinnamon & Cocoa</Text>
                <View className='w-full mt-3 h-10 bg-[#463d46] rounded-xl flex flex-row justify-between'>
                  <Text className='px-8 py-1 text-white text-2xl font-bold'>$100</Text>
                  <TouchableOpacity className='w-10 h-10 border bg-[#efe3c8] rounded-xl'><Text className='text-5xl px-1'>+</Text></TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
        </ScrollView>
    </View> 
  )
}  