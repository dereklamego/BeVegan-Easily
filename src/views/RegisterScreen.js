import React from 'react';
import Estilo from '../components/estilo';
import FormRegister from '../components/FormRegister';
import GlobalStyles from '../components/GlobalStyles';
import {View, SafeAreaView,Image,StyleSheet,TouchableOpacity,Text} from 'react-native';

export default () =>{
    return(
        <SafeAreaView style={[Estilo.App, GlobalStyles.AndroidSafeArea]}>
            <View style={padding(20)}>

                <View style={[Estilo.imgView, EstiloLocal.imgView]}>
                <Image source={require('../img/bevegan-logo.png')}
                style={Estilo.img} 
                />
                </View>

                <FormRegister/>
                
                <View style={Estilo.BtnContainer}>
                    <TouchableOpacity style={[Estilo.btnCadastrar]} title="Entrar">
                        <Text style={[Estilo.txtBtnG]}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            

            </View>  
        </SafeAreaView>
    )
}

const EstiloLocal = StyleSheet.create({
    imgView:{
        marginTop:0
    },
    
})


function padding(a, b, c, d) {
    return {
      paddingTop: a,
      paddingRight: b ? b : a,
      paddingBottom: c ? c : a,
      paddingLeft: d ? d : (b ? b : a)
    }
  }
  