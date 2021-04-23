import React, {useState} from 'react';
import Estilo from './components/estilo'; 
import FormLogin from './components/FormLogin';
//verificar imports redundantes
import GlobalStyles from './components/GlobalStyles';
import {View, SafeAreaView,StyleSheet,Text,TouchableOpacity,Image} from 'react-native';

export default () => {
  const [login,onChangeText] = useState("");
  return(
    // Tag safeareaview não funcionou sem o estilo
    <SafeAreaView style={[Estilo.App, GlobalStyles.AndroidSafeArea]}> 
      {/* Padding na area total do app*/}
      <View style={[padding(20)]}>  

        <View style={Estilo.imgView}>
          <Image source={require('./img/bevegan-logo.png')}
          style={Estilo.img} 
          />
        </View>
          

        {/* Componente do formulario login, feito em arquivo separado */}
        <FormLogin/>
        
        {/* Usando o TouchableOpacity no lugar do button, o button nao aceita estilização na stylesheet */}

        <View style={Estilo.BtnContainer}>
            <TouchableOpacity style={[Estilo.btnEnter]} title="Entrar">
              <Text style={Estilo.txtBtnG}>Entrar</Text>
            </TouchableOpacity>
            <Text style={[Estilo.txtP,{textDecorationLine: 'underline'}]}> Esqueceu a senha?</Text>
            <Text style={[Estilo.txtP,{textDecorationLine: 'underline'}]}>Cadastre-se</Text>
        </View>  

      </View>

    </SafeAreaView>
  )
    
} 
  
function padding(a, b, c, d) {
  return {
    paddingTop: a,
    paddingRight: b ? b : a,
    paddingBottom: c ? c : a,
    paddingLeft: d ? d : (b ? b : a)
  }
}


 
   


