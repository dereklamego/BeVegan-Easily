import React from 'react';
import Estilo from '../components/estilo';
import GlobalStyles from '../components/GlobalStyles';
import { Text, View, TouchableOpacity, SafeAreaView, Image, StyleSheet,ScrollView} from 'react-native'

export default ({navigation}) => {
    return(
        //conteudo da pagina
        <SafeAreaView style={[Estilo.AppPrincipal, GlobalStyles.AndroidSafeArea]}>
            {/*Header da pagina */}
            <View style={[Estilo.HeadColor]}>
                    <TouchableOpacity style={{flexDirection:'row'}} >
                        <Text onPress={() => navigation.goBack()} style={[Estilo.HeadAlign, Estilo.txtBack,{textDecorationLine: 'underline'}] }>Voltar</Text>
                        <Text style={[Estilo.HeadAlign, Estilo.txtBack]}>Saiba mais sobre o veganismo</Text >
                    </TouchableOpacity> 
                    </View>

                    <View style={[Estilo.BtnContainer, EstiloLocal.BtnContainer]}>
                    
                    <TouchableOpacity style={EstiloLocal.Btn} onPress={() => navigation.navigate('whatis')}><Text>O que é</Text></TouchableOpacity>
                    <TouchableOpacity style={EstiloLocal.Btn}><Text>Dicas</Text></TouchableOpacity>
                    <TouchableOpacity style={EstiloLocal.Btn}><Text>Impactos ambientais</Text></TouchableOpacity>
                    
                </View>
                    {/*Footer da pagina */}
                    <View style={Estilo.BottomColor}></View>
        </SafeAreaView>
    )
}

//abaixo temos um pouco de estilo local
const EstiloLocal = StyleSheet.create({
    Btn:{
            fontSize:30,
            // marginTop: 75,

            height: 80,
            backgroundColor: 'white',
            borderRadius: 15,
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
            flex:1,
            // flexDirection: 'column-reverse',
            justifyContent: 'space-evenly',
             //top: "-4%",
        },
    
})