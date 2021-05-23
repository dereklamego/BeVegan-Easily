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
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text  style={[Estilo.txtBack,{textDecorationLine: 'underline'}] }>Voltar</Text>                        
                </TouchableOpacity> 
                <View style={[Estilo.HeadAlign]}>
                        <Text style={[Estilo.TextHead,{textAlign:'center'}]}> Dicas</Text>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainer}>
                <Text style={[Estilo.txtP,{color:'#ffff'}]}>MACARRÃO MACARRÃO MACARRÃO MACARRÃO MACARRÃO MACARRÃO MACARRÃO MACARRÃO MACARRÃO MACARRÃO  </Text>  
                
            </ScrollView>
            {/*Footer da pagina */}
           <View style={Estilo.BottomColor}></View>
        </SafeAreaView>
    )
}

{/*Estilização local do Scroll View  */}
const styles = StyleSheet.create({
    contentContainer: {
      paddingVertical: 20,
      marginBottom:20,

    }

  })