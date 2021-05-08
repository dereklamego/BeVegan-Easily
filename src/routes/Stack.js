import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import LoginScreen from '../views/LoginScreen'
import RegisterScreen from '../views/RegisterScreen'
import WelcomeScreen from '../views/WelcomeScreen'
import PrincipalScreen from '../views/PrincipalScreen'
import VeganScreen from '../views/VeganScreen'
import MapScreen from '../views/MapScreen'
import LearnMoreScreen from '../views/LearnMoreScreen'
import RecipesScreen from '../views/RecipesScreen'
import WhatIsScreen from '../views/WhatIsScreen'
import TipsScreen from '../views/TipsScreen'
import EnviromentalImpactsScreen from '../views/EnviromentalImpactsScreen'
import { SafeAreaView,Text} from 'react-native'


const Stack = createStackNavigator()

export default props => (
   
    <SafeAreaView style={{flex:1}}>
        <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{headerShown: false}}> 
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="cadastro" component={RegisterScreen}/>
            <Stack.Screen name="welcome" component={WelcomeScreen}/>
            <Stack.Screen name="principal" component={PrincipalScreen}/>
            <Stack.Screen name="vegan" component={VeganScreen}/>
            <Stack.Screen name="map" component={MapScreen}/>
            <Stack.Screen name='learn' component={LearnMoreScreen}/>
            <Stack.Screen name='recipes' component={RecipesScreen}/>
            <Stack.Screen name='whatis' component={WhatIsScreen}/>
            <Stack.Screen name='tips' component={TipsScreen}/>
            <Stack.Screen name='enviroment' component={EnviromentalImpactsScreen}/>
        </Stack.Navigator>
    </SafeAreaView>    
    
)

