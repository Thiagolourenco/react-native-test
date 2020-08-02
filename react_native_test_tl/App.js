import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import FlashMessage from 'react-native-flash-message';

import './src/config/ReactotronConfig';

import Index from './src';
import {colors} from './src/constants/colors';
import {persistor, store} from './src/store';

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar
            backgroundColor={colors.primary}
            barStyle="light-content"
          />
          <FlashMessage position="top" floating={true} />
          <Index />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}
