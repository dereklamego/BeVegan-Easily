import React, {Component} from 'react';
import Estilo from '../components/estilo';
import GlobalStyles from '../components/GlobalStyles';
import { Text, View, TouchableOpacity, SafeAreaView, Image, StyleSheet,ScrollView,navigation} from 'react-native';
import receitas from '../views/RecipesTable';

export default class recipeList extends React.Component {

        render(){
        const params = this.props.navigation.state.params;
    
    return(
        <SafeAreaView style={[Estilo.AppPrincipal, GlobalStyles.AndroidSafeArea]}>
            <View style={[Estilo.HeadColor, {flexDirection:'row'}]}>
                <TouchableOpacity >
                    <Text onPress={() => this.props.navigation.goBack()} style={[Estilo.txtBack,{textDecorationLine: 'underline'}] }>Voltar</Text>
                </TouchableOpacity> 
                <View  style={[Estilo.HeadAlign]}></View>
                 {receitas.map(receitas => (
                     
                <Text key={receitas.id} style={Estilo.TextHead}>{receitas.title}</Text>

                ))} 
                 {/* <Text  style={Estilo.TextHead}>
                    {}
                </Text>  */}
                </View>
                
        </SafeAreaView>
    )
            }                      
}