import { View, Text, StatusBar, TextInput, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react';
import { Colors } from '@/components/colors'
import { router, Stack, Tabs } from 'expo-router';
import { drink1, drink2, drink3,drink4 } from '@/database';
import { Ionicons } from '@expo/vector-icons';
import description from '../description';

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
  function printText() {
    console.log("Hello World");
  }
  return (
    <View className="flex-1 px-8 pt-5" style ={{backgroundColor: Colors.primary}}>
      <ScrollView contentContainerStyle ={{paddingBottom: 20}} showsVerticalScrollIndicator = {false}>
        <StatusBar backgroundColor={Colors.primary}/>
        <View className='flex flex-row justify-center mb-12 gap-2'>
          <Text className='text-[#877b74] text-[32px]'>déjà</Text>
          <Text className='text-white text-[32px]'>Brew</Text>
        </View>
        <View className='rounded-xl bg-[#171017] h-50 text-[18px] text-white flex-row px-[15px] mb-12 gap-5 md:h-[40px]'>
          <Image source={require('@/assets/images/search.png')} className='top-[15px] md:top-[10px]'/>
          <TextInput placeholder='Browse your favorite coffee ...' placeholderTextColor={"#877b74"} className='ml-15 text-[18px] text-white w-[80%]'/>
        </View>
        <View className='h-50'>
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
          <View className='flex-row flex-wrap justify-between'>
            { cappuccino == 1 && 
                drink1.slice(0,6).map((item,index) => {
                  return (
                    <TouchableOpacity onPress = {() => router.push({pathname: '/description', params: {image: item.image, name: item.name, price: item.price, ratings: item.ratings, description: item.description, subTitle: item.subTitle, isFavorite: item.isFavorite.toString()}})} key={index} className='w-[48%] h-[300px] bg-[#362c36] px-5 rounded-xl py-5 mt-5'>
                      <Image source={item.image} style={{ width: 120, height: 150, objectFit: "cover"}} className='mx-auto'/>
                      <Text className='mt-3 text-white text-xl md:mx-auto h-[50px]'>{item.name}</Text>
                      <View className='w-full mt-3 h-10 bg-[#463d46] rounded-xl flex flex-row justify-between'>
                        <Text className='py-1 text-white text-2xl font-bold mx-auto'>${item.price}</Text>
                        <TouchableOpacity className='w-10 h-10 border bg-[#efe3c8] rounded-xl'>
                          <Ionicons name ="add" size ={32} color ={Colors.secondary}/>
                        </TouchableOpacity>
                      </View>
                    </TouchableOpacity>
                  );
                })
            }
            {
              latte == 1 && 
              drink2.slice(0,6).map((item,index) => {
                return (
                  <TouchableOpacity className='w-[48%] h-[300px] bg-[#362c36] px-5 rounded-xl py-5 mt-5' key={index} onPress={printText}>
                    <Image source={item.image} style={{ width: 120, height: 150, objectFit: "cover"}} className='mx-auto'/>
                    <Text className='mt-3 text-white text-xl md:mx-auto h-[50px]'>{item.name}</Text>
                    <View className='w-full mt-3 h-10 bg-[#463d46] rounded-xl flex flex-row justify-between'>
                      <Text className='py-1 text-white text-2xl font-bold mx-auto'>${item.price}</Text>
                      <TouchableOpacity className='w-10 h-10 border bg-[#efe3c8] rounded-xl'>
                        <Text className='text-5xl text-center md:top-[-10px]'>+</Text>
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                );
              })
            }
            {
              americano == 1 && 
              drink3.slice(0,6).map((item,index) => {
                return (
                  <TouchableOpacity className='w-[48%] h-[300px] bg-[#362c36] px-5 rounded-xl py-5 mt-5' key={index} onPress={printText}>
                    <Image source={item.image} style={{ width: 120, height: 150, objectFit: "cover"}} className='mx-auto'/>
                    <Text className='mt-3 text-white text-xl md:mx-auto h-[50px]'>{item.name}</Text>
                    <View className='w-full mt-3 h-10 bg-[#463d46] rounded-xl flex flex-row justify-between'>
                      <Text className='py-1 text-white text-2xl font-bold mx-auto'>${item.price}</Text>
                      <TouchableOpacity className='w-10 h-10 border bg-[#efe3c8] rounded-xl'>
                        <Text className='text-5xl text-center md:top-[-10px]'>+</Text>
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                );
              })
            }
            {
              espresso == 1 && 
              drink4.slice(0,6).map((item,index) => {
                return (
                  <TouchableOpacity className='w-[48%] h-[300px] bg-[#362c36] px-5 rounded-xl py-5 mt-5' key={index} onPress={printText}>
                    <Image source={item.image} style={{ width: 120, height: 150, objectFit: "cover"}} className='mx-auto'/>
                    <Text className='mt-3 text-white text-xl md:mx-auto h-[50px]'>{item.name}</Text>
                    <View className='w-full mt-3 h-10 bg-[#463d46] rounded-xl flex flex-row justify-between'>
                      <Text className='py-1 text-white text-2xl font-bold mx-auto'>${item.price}</Text>
                      <TouchableOpacity className='w-10 h-10 border bg-[#efe3c8] rounded-xl'>
                        <Text className='text-5xl text-center md:top-[-10px]'>+</Text>
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                );
              })
            }
          </View>
        </View>
        </ScrollView>
    </View> 
  )
}  