import React, { useState } from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer, DrawerActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './src/screens/Login'
import Signup from './src/screens/Signup'
import HomePage from './src/screens/HomePage'
const Stack = createStackNavigator()
export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="StartScreen" screenOptions={{ headerShown: false, }}>
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='SignupScreen' component={Signup}/>
          <Stack.Screen name='HomePage' component={HomePage}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
