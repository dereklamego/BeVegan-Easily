import React, {useState} from 'react';
import Estilo from './components/estilo'; 
import {View, SafeAreaView,StyleSheet,Text,TouchableOpacity,Image} from 'react-native';
//verificar imports redundantes
import GlobalStyles from './components/GlobalStyles';
import FormLogin from './components/FormLogin';

export default () => {
  const [login,onChangeText] = useState("");
  return(
    // Tag safeareaview não funcionou sem o estilo
    <SafeAreaView style={[ GlobalStyles.AndroidSafeArea]}> 
      {/* Padding na area total do app*/}
      <View style={[style.App,padding(20)]}>  

        <View style={style.imgView}>
          <Image source={require('./img/bevegan-logo.png')}
          style={style.img} 
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
  
const style = StyleSheet.create({

  App:{
    flexGrow: 1,
    backgroundColor: '#75D221',
    justifyContent: 'center',
    color:'#544F1F'
  },
  img:{
    marginBottom:50,
    width: 250, height: 210
  },
  imgView:{
    alignItems:"center",
  }
  
})

function padding(a, b, c, d) {
  return {
    paddingTop: a,
    paddingRight: b ? b : a,
    paddingBottom: c ? c : a,
    paddingLeft: d ? d : (b ? b : a)
  }
}


 
   


