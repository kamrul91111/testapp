import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator(); 

//screens
import Home from '../screens/Home'
import Details from '../screens/Details'



const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Details' component={Details} />
        </Stack.Navigator>
    )
}

export default StackNavigator
