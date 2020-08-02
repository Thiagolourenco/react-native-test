import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Welcome from '../pages/Welcome';
import ProfileUser from '../pages/ProfileUser';
import ChatMessage from '../pages/ChatMessage';
import Notifications from '../pages/Notifications';

import Home from './BottomNavigator';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfileUser"
        component={ProfileUser}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChatMessage"
        component={ChatMessage}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
