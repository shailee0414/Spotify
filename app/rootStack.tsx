import * as React from 'react';
import { View, Text } from 'react-native';
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from '@react-navigation/elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '@/screens/Home';
import Profile from '@/screens/Profile';
import Tabs from './(tabs)/Tabs';
import AuthScreen from '@/screens/Login/AuthScreen';
const Stack = createNativeStackNavigator();

function RootStack() {
  const [isLLoggedIn, setIsLoggedIn] = React.useState(false);
  return (
    <Stack.Navigator>
      {!isLLoggedIn ? (
        <Stack.Screen
          name="Auth"
          component={AuthScreen}
          options={{ headerShown: false }}
        />
      ) : (
        <>
          <Stack.Screen
            name="Home"
            component={Tabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
export default RootStack;
