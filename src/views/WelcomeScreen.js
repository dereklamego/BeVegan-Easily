import React from 'react';
import Estilo from '../components/estilo';
import GlobalStyles from '../components/GlobalStyles';
import { Text, View, TouchableOpacity, SafeAreaView, Image, StyleSheet } from 'react-native'

export default ({navigation}) => {
    return(

        <SafeAreaView style={[Estilo.App, GlobalStyles.AndroidSafeArea]}>
            <View >
                <View style={[Estilo.HeadColor]}>
                <TouchableOpacity >
                        <Text onPress={() => navigation.navigate('Login')} style={[Estilo.txtBack,{textDecorationLine: 'underline'}] }>Sair</Text>
                    </TouchableOpacity> 
                </View>
                <View style={[Estilo.imgView, EstiloLocal.imgView]}>
                <Image source={require('../img/bevegan-logo.png')}
                style={Estilo.img} 
                />
                </View>
                <Text style={padding(20),Estilo.txtM}>Que bom te ver aqui! nós iremos te ajudar com o seu novo estilo de vida, te auxiliando com suas refeições, dicas de receitas e sugestões de locais veganos para você fazer suas compras!</Text>
                <View style={Estilo.BtnContainer}>
                    <TouchableOpacity  style={[Estilo.btnDuvidoso]} title="Entrar">
                        <Text style={[Estilo.txtBtnG]}>Permitir Localização</Text>
                    </TouchableOpacity>
                        
                    <TouchableOpacity >
                        <Text style={[Estilo.txtP,{textDecorationLine: 'underline'}] }>Ignorar por enquanto</Text>
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