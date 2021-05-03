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
                    <Text style={[Estilo.txtBack,{textDecorationLine: 'underline'}] }>Voltar</Text>
                </TouchableOpacity>

                <View style={[Estilo.HeadAlign]}>
                    <Text style={Estilo.TextHead}>Saiba mais</Text>
                </View>
                
            </View>

            <View style={[Estilo.BtnContainer, EstiloLocal.BtnContainer]}>
                    
                <TouchableOpacity style={EstiloLocal.Btn} onPress={() => navigation.navigate('whatis')}>
                    <View  style={EstiloLocal.txtWrap}>
                    <Text style = {[Estilo.txtM]}>O que é</Text>
                    </View>

                    <View style={EstiloLocal.imgContainer}>
                        <Image source={require('../img/prato.png')} style={EstiloLocal.img} />
                    </View>
                </TouchableOpacity>
                    
                <TouchableOpacity style={EstiloLocal.Btn}>
                    <View style={EstiloLocal.txtWrap}>
                    <Text style = {[Estilo.txtM]}>Dicas</Text>
                    </View>

                    <View style={EstiloLocal.imgContainer}>
                        <Image source={require('../img/lamp.png')} style={EstiloLocal.img} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={EstiloLocal.Btn}>
                    <View style={EstiloLocal.txtWrap}>
                    <Text style = {[Estilo.txtM]}>Impactos ambientais</Text>
                    </View>

                    <View style={EstiloLocal.imgContainer}>
                        <Image source={require('../img/tree.png')} style={EstiloLocal.img} />
                    </View>
                </TouchableOpacity>
                    
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
        flexDirection:'row',
        display:'flex',
        height: 80,
        backgroundColor: 'white',
        borderRadius: 15,
        
        color: '#00ff00',
        width: "80%",
        color:"#353535",
        fontWeight:"bold",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    BtnContainer:{
        height:'85%',
        //  flex:1,
        justifyContent: 'space-evenly',
        
    },
    img:{
        width:141,
        height:80,
        borderBottomRightRadius: 15,
        borderTopRightRadius:15 ,

       
    },
    imgContainer:{
        alignSelf:'center',
        marginLeft:10,

    },
    txtWrap:{
        flex: 1,
        width: '60%',
        alignItems:"center",
        justifyContent: 'center'
    }
})