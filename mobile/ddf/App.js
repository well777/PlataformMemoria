import React, { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Input, Icon, Button } from 'react-native-elements'
import styles from './Style/MainStyle'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreensA from './Screens/ScreensA';
import ScreensB from './Screens/ScreensB';
import Cadastro from './Screens/Cadastro'

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={ScreensA} />
      <Stack.Screen name="Principal" component={ScreensB} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Settings" component={ScreensA} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
