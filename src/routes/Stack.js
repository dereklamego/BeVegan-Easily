import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import LoginScreen from '../views/LoginScreen'
import RegisterScreen from '../views/RegisterScreen'
import WelcomeScreen from '../views/WelcomeScreen'
import { SafeAreaView,Text} from 'react-native'


const Stack = createStackNavigator()

export default props => (
   
    <SafeAreaView style={{flex:1}}>
        <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{headerShown: false}}> 
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="cadastro" component={RegisterScreen}/>
            <Stack.Screen name="welcome" component={WelcomeScreen}/>
        </Stack.Navigator>
    </SafeAreaView>    
    
)

