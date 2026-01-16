import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '@/screens/Home';
import Profile from '@/screens/Profile';
import Feed from '@/screens/Feed';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Feed" component={Feed} />
    </Tab.Navigator>
  );
}

export default Tabs;
