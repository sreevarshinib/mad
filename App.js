import React, { useState } from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer, DrawerActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './src/screens/Login'
import Signup from './src/screens/Signup'
import InputForm from './src/screens/InputForm'
import Display from './src/screens/Display'
import Edit from './src/screens/Edit'
import Logout from './src/components/Logout'
import ListUsers from './src/screens/ListUsers'
import HomePage from './src/screens/HomePage'
const Stack = createStackNavigator()
export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="StartScreen" screenOptions={{ headerShown: false, }}>
          {/* <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='SignupScreen' component={Signup}/> */}
          <Stack.Screen name='HomePage' component={HomePage}/>
          <Stack.Screen name='InputForm' component={InputForm}/>
          <Stack.Screen name='Display' component={Display}/>
          <Stack.Screen name='Edit' component={Edit}/>          
          <Stack.Screen name='Logout' component={Logout}/>         
          <Stack.Screen name='ListUsers' component={ListUsers}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
