import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Profile from '@/screens/Profile';
import Tabs from './(tabs)/Tabs';
import AuthScreen from '@/screens/Login/AuthScreen';
import screenName from '@/constants/screens/screenName.json';

const Stack = createNativeStackNavigator();

function RootStack() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Stack.Navigator>
      {!isLoggedIn ? (
        <Stack.Screen
          name={screenName.Auth.title}
          component={AuthScreen}
          options={{ headerShown: false }}
        />
      ) : (
        <>
          <Stack.Screen
            name={screenName.Home.title}
            component={Tabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={screenName.Profile.title}
            component={Profile}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
export default RootStack;
