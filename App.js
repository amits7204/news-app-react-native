import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import News from './screens/news';
import {NavigationContainer, DarkTheme, DefaultTheme} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import NewsDescription from './screens/NewsDescription';

import {Provider} from 'react-redux'
import store from './redux/store'
const stack = createStackNavigator()
export default function App() {
const scheme = useColorScheme()
  return (
    <Provider store={store}>
      <NavigationContainer theme={scheme === 'dark' ? DefaultTheme : DarkTheme}>
        <stack.Navigator initialRouteName='News'>
          <stack.Screen name='News' component={News} />
          <stack.Screen name='descriptions' component={NewsDescription} />
        </stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
