import React from 'react';
import Estilo from '../components/estilo';
import GlobalStyles from '../components/GlobalStyles';
import { Text, View, TouchableOpacity, SafeAreaView, Image, StyleSheet,ScrollView} from 'react-native'
export default ({navigation}) => {
    return(
        //conteudo da pagina
        <SafeAreaView style={[Estilo.AppPrincipal, GlobalStyles.AndroidSafeArea]}>
            {/*Header da pagina */}
            <View style={[Estilo.HeadColor, {flexDirection:'row'}]}>
                    <TouchableOpacity onPress={() => navigation.goBack()} >
                        <Text  style={[Estilo.txtBack,{textDecorationLine: 'underline'}] }>Voltar</Text>
                    </TouchableOpacity>
                    <Text style={[Estilo.HeadAlign]}>Veganismo</Text >
 
            </View>
            {/* <Header /> */}

                    {/*Botão da pagina */}
                    <TouchableOpacity style={[Estilo.btnDuvidoso]} title="Entrar">
                        <Text style={[Estilo.txtBtnG]}>Continuar</Text>
                    </TouchableOpacity>
        </SafeAreaView>
    )
}