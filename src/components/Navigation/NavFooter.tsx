import * as React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from 'components/screens/HomeScreen';


const Tab   = createBottomTabNavigator();
function NavFooter() {  
  return (
    <NavigationContainer
    >
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}>
      <Tab.Screen name="Power" component={HomeScreen} options={{
          tabBarLabel: 'Home',
          }}/>
      <Tab.Screen name="WMS" component={HomeScreen} options={{
          tabBarLabel: 'Updates',
          tabBarBadge: 3,
        }}/>
    </Tab.Navigator>
    </NavigationContainer>
  );
}

export default NavFooter;
