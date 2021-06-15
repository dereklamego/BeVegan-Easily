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

import {SafeAreaView,Text} from 'react-native'
import pao from '../views/receitas/pao'
import Mousse from '../views/receitas/Mousse'
import Pastel from '../views/receitas/Pastel'
import EmpadaoV from '../views/receitas/EmpadaoV'
import BolinhoDeArroz from '../views/receitas/BolinhoDeArroz'
import Yakissoba from '../views/receitas/Yakissoba'
import Cookie from '../views/receitas/Cookie'
import Omelete from '../views/receitas/Omelete'
import Nuggets from '../views/receitas/Nuggets'
import Lasanha from '../views/receitas/Lasanha'
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
        

            <Stack.Screen name='pao' component={pao}/>
            <Stack.Screen name='Mousse' component={Mousse}/>
            <Stack.Screen name='Pastel' component ={Pastel} />
            <Stack.Screen name='EmpadaoV' component={EmpadaoV} />
            <Stack.Screen name='BolinhoDeArroz' component={BolinhoDeArroz} />
            <Stack.Screen name='Yakissoba' component={Yakissoba} />
            <Stack.Screen name='Cookie' component={Cookie} />
            <Stack.Screen name='Omelete' component={Omelete} />
            <Stack.Screen name='Nuggets' component={Nuggets} />
            <Stack.Screen name='Lasanha' component={Lasanha} />
        </Stack.Navigator> 
    </SafeAreaView>    
    
)

