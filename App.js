import React from 'react'
import { View, Text } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'

//stacks
import StackNavigator from './navigation/StackNavigator'


const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}

export default App
