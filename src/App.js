import React, {useState} from 'react';
import Estilo from './components/estilo'; 
//verificar imports redundantes
import GlobalStyles from './components/GlobalStyles';
import {View, SafeAreaView} from 'react-native';
import RegisterScreen from './views/RegisterScreen';
import LoginScreen from './views/LoginScreen'

export default props => (
  
  // Tag safeareaview não funcionou sem o estilo AndroidSafeArea
  <SafeAreaView style={[Estilo.App, GlobalStyles.AndroidSafeArea]}> 
    {/* Padding na area total do app*/}
    <View style={[padding(20)]}>  

      <RegisterScreen/>
      <LoginScreen/>

    </View>
  </SafeAreaView>
  
)
  
function padding(a, b, c, d) {
  return {
    paddingTop: a,
    paddingRight: b ? b : a,
    paddingBottom: c ? c : a,
    paddingLeft: d ? d : (b ? b : a)
  }
}


 
   


