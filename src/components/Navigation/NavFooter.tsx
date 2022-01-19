import * as React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import PowerScreen from 'components/screens/PowerScreen';


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
      <Tab.Screen name="Power" component={PowerScreen} options={{
          tabBarLabel: 'Home',
          }}/>
      <Tab.Screen name="WMS" component={PowerScreen} options={{
          tabBarLabel: 'Updates',
          tabBarBadge: 3,
        }}/>
    </Tab.Navigator>
    </NavigationContainer>
  );
}

export default NavFooter;
