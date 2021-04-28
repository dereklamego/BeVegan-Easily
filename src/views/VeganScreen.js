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
                        <Text style={[Estilo.HeadAlign, Estilo.txtBack]}>Veganismo</Text >
                    </TouchableOpacity> 
                    </View>
                    {/*Botão da pagina */}
                    <TouchableOpacity style={[Estilo.btnDuvidoso]} title="Entrar">
                        <Text style={[Estilo.txtBtnG]}>Continuar</Text>
                    </TouchableOpacity>
        </SafeAreaView>
    )
}