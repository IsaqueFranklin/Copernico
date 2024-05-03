import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ 
      tabBarActiveTintColor: 'white', 
      tabBarStyle: {backgroundColor: '#020b0d', borderTopWidth: 0}, 
      headerStyle: {backgroundColor: '#020b0d'},
      headerTintColor: 'white',
    }}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: true,
          headerShadowVisible: false, 
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          headerShown: true,
          headerShadowVisible: false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
    </Tabs>
  );
}
