import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import LoginScreen from '../views/LoginScreen'
import RegisterScreen from '../views/RegisterScreen'
import WelcomeScreen from '../views/WelcomeScreen'
import PrincipalScreen from '../views/PrincipalScreen'
import HelpScreen from '../views/HelpScreen'
import MapScreen from '../views/MapScreen'
import LearnMoreScreen from '../views/LearnMoreScreen'
import RecipesScreen from '../views/RecipesScreen'
import WhatIsScreen from '../views/WhatIsScreen'
import TipsScreen from '../views/TipsScreen'
import EnviromentalImpactsScreen from '../views/EnviromentalImpactsScreen'
import IdRecipes from '../views/IdRecipes'
import {SafeAreaView,Text} from 'react-native'
import pao from '../views/receitas/pao'
import macarrao from '../views/receitas/macarrao'
import grao from '../views/receitas/grao'
import EmpadaoV from '../views/receitas/EmpadaoV'

const Stack = createStackNavigator()

export default props => (
   
    <SafeAreaView style={{flex:1}}>
        <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{headerShown: false}}> 
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="cadastro" component={RegisterScreen}/>
            <Stack.Screen name="welcome" component={WelcomeScreen}/>
            <Stack.Screen name="principal" component={PrincipalScreen}/>
            <Stack.Screen name="help" component={HelpScreen}/>
            <Stack.Screen name="map" component={MapScreen}/>
            <Stack.Screen name='learn' component={LearnMoreScreen}/>
            <Stack.Screen name='recipes' component={RecipesScreen}/>
            <Stack.Screen name='whatis' component={WhatIsScreen}/>
            <Stack.Screen name='tips' component={TipsScreen}/>
            <Stack.Screen name='enviroment' component={EnviromentalImpactsScreen}/>
            <Stack.Screen name="idpage" component = {IdRecipes} value={({params})=> params.nav}/>

            <Stack.Screen name='pao' component={pao}/>
            <Stack.Screen name='macarrao' component={macarrao}/>
            <Stack.Screen name='grao' component ={grao} />
            <Stack.Screen name='EmpadaoV' component={EmpadaoV} />
        </Stack.Navigator> 
    </SafeAreaView>    
    
)

