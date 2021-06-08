import React from 'react';
import Estilo from '../components/estilo';
import GlobalStyles from '../components/GlobalStyles';
import { Text, View, TouchableOpacity, SafeAreaView, Image, StyleSheet,ScrollView} from 'react-native'
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { MaterialIcons, FontAwesome  } from '@expo/vector-icons';


export default ({navigation}) => {
    return(
        //conteudo da pagina
        <SafeAreaView style={[Estilo.AppPrincipal, GlobalStyles.AndroidSafeArea]}>
            {/*Header da pagina */}
            <View style={[Estilo.HeadColor, {flexDirection:'row'}]}>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <Text  style={[Estilo.txtBack,{textDecorationLine: 'underline'}] }>Voltar</Text>
                </TouchableOpacity>

                <View style={[Estilo.HeadAlign]}>
                    <Text style={Estilo.TextHead}>Ajuda e Suporte</Text>
                </View>    
            </View>
            
            <View style={EstiloLocal.ContainerMain}>
            
                <View style={EstiloLocal.Container}>
                    <Text style={EstiloLocal.Title}>Em caso de dúvidas e sugestões, entre em contato conosco através:</Text>

                    <View style={EstiloLocal.TxtContainer}>
                        <MaterialIcons name="email" size={20} color="#544F1F"/> 
                        <Text style={EstiloLocal.Txt}> support@bevegan.com.br</Text>
                    </View>

                    <View style={EstiloLocal.TxtContainer}>
                        <FontAwesome name="phone" size={20} color="#544F1F" /> 
                        <Text style={EstiloLocal.Txt}> +55 71 99999-9999</Text>
                    </View>
                    <Text style={EstiloLocal.TxtVersion}> Versão 1.0.0.0</Text>
                    <Text style={EstiloLocal.TxtVersion}> ©Todos os direitos reservados.</Text>
                    

                    <Text> </Text>
                </View> 

            </View>
                

            <View style={Estilo.BottomColor}>
                <MaterialCommunityIcons name="heart" size={30} color="white" />
                <Feather name="search" size={30} color="white" />
                <Feather name="user" size={30} color="white" />
            </View>

        </SafeAreaView>
    )
}

const EstiloLocal= StyleSheet.create({
    ContainerMain:{
        marginTop: '30%',
        //justifyContent:"center",
        alignItems:"center",
        flex:1,
        
       
    },
    Container:{
        padding:20,
        width:'80%',
        height: '70%',
        backgroundColor: 'white',
        borderRadius:20,
        justifyContent:"space-between",
        alignItems:"center",
        
    },
    Title:{
        fontSize:17,
        fontWeight:'bold',
        color:'#544F1F',
    },
    TxtContainer:{
        marginTop:10,
        color:'#544F1F',
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent:'center'
    },
    Txt:{
        color:'#544F1F',
    },
    TxtVersion:{
        marginTop:20,
        color:'#544F1F',
        fontWeight:'bold',
        alignSelf:'center'
    }

})