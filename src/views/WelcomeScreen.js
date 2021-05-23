import React, {useState} from 'react';
import Estilo from '../components/estilo';
import GlobalStyles from '../components/GlobalStyles';
import { Text, View, TouchableOpacity, SafeAreaView, Image, StyleSheet } from 'react-native'

// import * as Permissions from 'expo-permissions'

export default ({navigation}) => {

    return(

        <SafeAreaView style={[GlobalStyles.AndroidSafeArea,{backgroundColor: '#75D221'}]}>
            <View style={[Estilo.HeadColor,{flexDirection:'row'}]}>
                <TouchableOpacity  >
                        <Text onPress={() => navigation.navigate('Login')} style={[Estilo.txtBack] }>Sair</Text>
                </TouchableOpacity> 
            </View>

            <View style={[Estilo.App,padding(20)]}>

                <View style={[Estilo.imgView, EstiloLocal.imgView]}>
                    <Image source={require('../img/bevegan-logo2.png')}
                    style={Estilo.img}/>
                </View>

                <Text style={[Estilo.txtP,EstiloLocal.infoTxt]}>Que bom te ver aqui! nós iremos te ajudar com o seu novo estilo de vida, te auxiliando com suas refeições, dicas de receitas e sugestões de locais veganos para você fazer suas compras!</Text>
                <View style={Estilo.BtnContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('principal')}  style={[Estilo.btnDuvidoso]} title="Entrar">
                        <Text style={Estilo.txtBtnG}>Continuar</Text>
                    </TouchableOpacity>
                        
                 
                </View>
            </View>
            
        </SafeAreaView>
    )
}

const EstiloLocal = StyleSheet.create({
    imgView:{
        marginTop:0,

    },
    
    infoTxt:{
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold'
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