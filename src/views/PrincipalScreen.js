import React from 'react';
import Estilo from '../components/estilo';
import GlobalStyles from '../components/GlobalStyles';
import { Text, View, TouchableOpacity, SafeAreaView, Image, StyleSheet,ScrollView} from 'react-native'


export default ({navigation}) => {
    return(
        //parte principal do código "(main)"
        <SafeAreaView style={[Estilo.AppPrincipal, GlobalStyles.AndroidSafeArea]}>
            {/* <View style={{flex:1}}> */}
                {/*view abaixo contém header e botão de volta */}
                <View style={[Estilo.HeadColor, {flexDirection:'row'}]}>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')} style={[Estilo.txtBack]} >
                        <Text  style={[ Estilo.txtBack,{textDecorationLine: 'underline'}] }>Sair</Text>
                        
                    </TouchableOpacity> 
                    <Text style={[Estilo.HeadAlign]}>Pagina inicial</Text >
                </View>
                {/*View abaixo contem os botões que irão indicar para as principais funcionalidades do app */}
        
                <View style={[Estilo.BtnContainer, EstiloLocal.BtnContainer]}>
                    
                    <TouchableOpacity style={EstiloLocal.Btn} onPress={() => navigation.navigate('recipes')}><Text style = {[Estilo.txtBtn]}>Receitas</Text></TouchableOpacity>
                    <TouchableOpacity style={EstiloLocal.Btn} onPress={() => navigation.navigate('map')}><Text style = {[Estilo.txtBtn]}>Enconte produtos veganos</Text></TouchableOpacity>
                    <TouchableOpacity style={EstiloLocal.Btn} onPress={() => navigation.navigate('learn')}><Text style = {[Estilo.txtBtn]}>Saiba mais sobre o veganismo</Text></TouchableOpacity>
                    {/*usando pagina ajuda para testar o botão continuar da pagina sobre veganismo */}
                    <TouchableOpacity style={EstiloLocal.Btn}onPress={() => navigation.navigate('vegan')}><Text style = {[Estilo.txtBtn]}>Ajuda</Text></TouchableOpacity>
                    
                </View>
            {/* </View> */}
            
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