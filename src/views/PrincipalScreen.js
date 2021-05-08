import React from 'react';
import Estilo from '../components/estilo';
import GlobalStyles from '../components/GlobalStyles';
import { Text, View, TouchableOpacity, SafeAreaView, Image, StyleSheet,ScrollView} from 'react-native'


export default ({navigation}) => {
    return(
        //parte principal do código "(main)"
        <SafeAreaView style={[Estilo.AppPrincipal, GlobalStyles.AndroidSafeArea]}>
            
                {/*view abaixo contém header e botão de volta */}

                <View style={[Estilo.HeadColor, {flexDirection:'row'}]}>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')} >
                            <Text  style={[ Estilo.txtBack]}>Logout</Text>
                        </TouchableOpacity>

                        <View style={[Estilo.HeadAlign]}>
                            <Text style={Estilo.TextHead}>Pagina inicial</Text>
                        </View>
                            
                </View>

                {/*View abaixo contem os botões que irão indicar para as principais funcionalidades do app */}
        
                <View style={[Estilo.BtnContainer, EstiloLocal.BtnContainer]}>
                    
                    <TouchableOpacity style={EstiloLocal.Btn} onPress={() => navigation.navigate('recipes')}>
                        <View style={EstiloLocal.txtWrap} >
                            <Text style = {[Estilo.txtM]}>Receitas</Text>
                        </View>  
                            
                        <View style={EstiloLocal.imgContainer}>
                            <Image source={require('../img/menu.png')} style={EstiloLocal.img} />
                        </View>
                            
                    </TouchableOpacity>

                    <TouchableOpacity style={EstiloLocal.Btn} onPress={() => navigation.navigate('map')}>
                        
                            <View style={EstiloLocal.txtWrap}>
                                <Text style = {[Estilo.txtM]}>Enconte produtos veganos</Text>
                            </View>
                                
                            <View style={EstiloLocal.imgContainer}>
                                <Image source={require('../img/maps.png')} style={EstiloLocal.img} />
                            </View>

                        
                    </TouchableOpacity>

                    <TouchableOpacity style={EstiloLocal.Btn} onPress={() => navigation.navigate('learn')}>

                            <View style={EstiloLocal.txtWrap}>
                                <Text style ={[Estilo.txtM]}>Saiba mais sobre o veganismo</Text>
                            </View>

                            <View style={EstiloLocal.imgContainer}>
                                <Image source={require('../img/saibamais.png')} style={EstiloLocal.img} />
                            </View>
                        
                    </TouchableOpacity>

                    {/*usando pagina ajuda para testar o botão continuar da pagina sobre veganismo */}
                    <TouchableOpacity style={EstiloLocal.Btn} onPress={() => navigation.navigate('vegan')}>
                            <View style={EstiloLocal.txtWrap}>
                                <Text style ={[Estilo.txtM]}>Ajuda</Text>
                            </View>

                            <View style={EstiloLocal.imgContainer}>
                                <Image source={require('../img/ajuda.png')} style={EstiloLocal.img} />
                            </View>
                    </TouchableOpacity>
                    
                </View>
            
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