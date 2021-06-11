import React, { Component } from 'react';
import Estilo from '../components/estilo';
import GlobalStyles from '../components/GlobalStyles';
import { Text, View, TouchableOpacity, SafeAreaView, Image, StyleSheet,ScrollView} from 'react-native'
import receitas from '../views/RecipesTable';

export default class ListReceitas extends React.Component {

    onRecipes = (receitas) =>{
        this.props.navigation.navigate(receitas);
    };
    
    render(){
    return(
        //conteudo da pagina
        <SafeAreaView style={[Estilo.AppPrincipal, GlobalStyles.AndroidSafeArea]}>
            {/*Header da pagina */}
            <View style={[Estilo.HeadColor, {flexDirection:'row'}]}>
                <TouchableOpacity >
                    <Text onPress={() => this.props.navigation.goBack()} style={[Estilo.txtBack,{textDecorationLine: 'underline'}] }>Voltar</Text>
                </TouchableOpacity>

                <View style={[Estilo.HeadAlign]}>
                    <Text style={Estilo.TextHead}>Receitas</Text>
                </View>
                
            </View>
            <ScrollView style={[ EstiloLocal.containerScroll]}>
                {/*mapeamento para passar informações do array */}
                <View style={[Estilo.BtnContainer, EstiloLocal.BtnContainer]}>
                    {receitas.sort(function(receitasA, receitasB){
                        
                        if (receitasA.title.toUpperCase() == receitasB.title.toUpperCase())
                            return 0;
                        if (receitasA.title.toUpperCase() < receitasB.title.toUpperCase())
                            return -1
                        if (receitasA.title.toUpperCase() > receitasB.title.toUpperCase())
                            return 1
                    }) .map(receitas=>(
                                        
                        <TouchableOpacity key={receitas.id} style={EstiloLocal.Btn} onPress={() => this.onRecipes(receitas.src)}>
                        <View style={EstiloLocal.txtWrap}>
                            <Text style ={[Estilo.txtM]}>{receitas.title}</Text>
                        </View>
                        </TouchableOpacity>
        ))}
                </View>
            </ScrollView>
            {/*Footer da pagina */}
            <View style={Estilo.BottomColor}></View>
        </SafeAreaView>
    )
}
}
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
        marginTop: "20%"
    },
    BtnContainer:{
        height:'95%',
        //flex:1,
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
    },
    containerScroll:{
        flex: 1,
    }
})