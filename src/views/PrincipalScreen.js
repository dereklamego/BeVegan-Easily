import React from 'react';
import Estilo from '../components/estilo';
import GlobalStyles from '../components/GlobalStyles';
import { Text, View, TouchableOpacity, SafeAreaView, Image, StyleSheet, Button } from 'react-native'

export default ({navigation}) => {
    return(
        //parte principal do código "(main)"
        <SafeAreaView style={[Estilo.AppPrincipal, GlobalStyles.AndroidSafeArea]}>
            <View>
                {/*view abaixo contém header e botão de volta */}
            <View style={[Estilo.HeadColor]}>
                <TouchableOpacity style={{flexDirection:'row'}} >
                        <Text onPress={() => navigation.navigate('Login')} style={[Estilo.HeadAlign, Estilo.txtBack,{textDecorationLine: 'underline'}] }>Sair</Text>
                        <Text style={[Estilo.HeadAlign, Estilo.txtBack]}>Pagina inicial</Text >
                    </TouchableOpacity> 
                </View>
                {/*View abaixo contem os botões que irão indicar para as principais funcionalidades do app */}
                <View style={[Estilo.BtnContainer, EstiloLocal.BtnContainer]}>
                    <TouchableOpacity style={EstiloLocal.Btn}><Text>Receitas</Text></TouchableOpacity>
                    <TouchableOpacity style={EstiloLocal.Btn}><Text>Enconte produtos veganos</Text></TouchableOpacity>
                    <TouchableOpacity style={EstiloLocal.Btn}><Text>Saiba mais sobre o veganismo</Text></TouchableOpacity>
                </View>
       
            </View>
        </SafeAreaView>
    )
}
//abaixo temos um pouco de estilo local
const EstiloLocal = StyleSheet.create({
    Btn:{
            fontSize:30,
            marginTop: 100,
            
            backgroundColor: 'white',
            borderRadius: 5,
            padding: 12,
            color: '#00ff00',
            width: "80%",
            color:"#353535",
            fontWeight:"bold",
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,
    
            elevation: 6,
        },
        BtnContainer:{
            flex: 1,
        },
    
})