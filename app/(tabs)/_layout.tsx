import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/components/colors'

export default function _layout() {
  return (
    <Tabs screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
            backgroundColor: Colors.secondary,
            paddingTop: 5,
            borderTopWidth: 0,
        },
        tabBarActiveTintColor: Colors.activeTab,
        tabBarInactiveTintColor: Colors.inactiveTab,
        }}>
        <Tabs.Screen name="index" options={{
            title: "Home",
            tabBarIcon: ({size,color}) => (
                <Ionicons name ="home" size={size} color={color} />
            ),
            }} />
        <Tabs.Screen name="cart" options={{
            title: "Cart",
            tabBarIcon: ({size,color}) => (
                <Ionicons name ="cart" size={size} color={color} />
            ),
            }} />
        <Tabs.Screen name="favorites" options={{
            title: "Favorites",
            tabBarIcon: ({size,color}) => (
                <Ionicons name ="heart" size={size} color={color} />
            ),
            }} />
        <Tabs.Screen name="profile" options={{
            title: "Profile",
            tabBarIcon: ({size,color}) => (
                <Ionicons name ="person" size={size} color={color} />
            ),
            }} />
            
    </Tabs>
  )
}