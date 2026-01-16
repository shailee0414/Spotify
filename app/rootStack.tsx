import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SCREEN_NAMES } from '@/constants/navigation';

import Profile from '@/screens/Profile';
import Tabs from './(tabs)/Tabs';
import AuthScreen from '@/screens/Login/AuthScreen';
import SignUp from '@/screens/SignUp';
import ChooseArtist from '@/screens/ChooseArtist';

const Stack = createNativeStackNavigator();
function RootStack() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Stack.Navigator>
      {!isLoggedIn ? (
        <>
          <Stack.Screen
            name={SCREEN_NAMES.AUTH}
            component={AuthScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={SCREEN_NAMES.SIGNUP}
            component={SignUp}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={SCREEN_NAMES.ARTIST}
            component={ChooseArtist}
            options={{ headerShown: false }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name={SCREEN_NAMES.HOME}
            component={Tabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={SCREEN_NAMES.ARTIST}
            component={ChooseArtist}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={SCREEN_NAMES.PROFILE}
            component={Profile}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
export default RootStack;
