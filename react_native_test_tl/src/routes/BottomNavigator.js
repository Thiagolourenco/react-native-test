import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IconIo from 'react-native-vector-icons/AntDesign';
import IconF from 'react-native-vector-icons/FontAwesome';

import HomePage from '../pages/HomePage';
import Settings from '../pages/Settings';

import {colors} from '../constants/colors';
const Tab = createBottomTabNavigator();

IconIo.loadFont();
IconF.loadFont();

const iconsClient = {
  HomePage: {
    lib: IconIo,
    name: 'home',
  },
  Settings: {
    lib: IconIo,
    name: 'user',
  },
};

export default function BottomNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => ({
        tabBarIcon: ({color, size, focused}) => {
          const {lib: Icon, name} = iconsClient[route.name];
          return <Icon name={name} color={color} size={size} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: colors.primary,
        },
        activeTintColor: colors.subTitle,
        inactiveTintColor: colors.title,
      }}>
      <Tab.Screen name="HomePage" component={HomePage} options={{ title: "Home"}}/>
      <Tab.Screen name="Settings" component={Settings} options={{ title: "Profile"}} />
    </Tab.Navigator>
  );
}
