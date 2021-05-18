import React from 'react';
import Estilo from '../components/estilo';
import GlobalStyles from '../components/GlobalStyles';
import { Text, View, TouchableOpacity, SafeAreaView, Image, StyleSheet,ScrollView} from 'react-native'
import receitas from '../views/RecipesTable';

export default ({navigation}) => {

    return(
        <SafeAreaView style={[Estilo.AppPrincipal, GlobalStyles.AndroidSafeArea]}>
            <View style={[Estilo.HeadColor, {flexDirection:'row'}]}>
                <TouchableOpacity >
                    <Text onPress={() => navigation.goBack()} style={[Estilo.txtBack,{textDecorationLine: 'underline'}] }>Voltar</Text>
                </TouchableOpacity> 
                <View style={[Estilo.HeadAlign]}></View>
                {/* {receitas.map((title, i) =>
                <Text key={i} style={Estilo.TextHead}>{title}</Text>

                )} */}
                <Text key={receitas.id} style={Estilo.TextHead}>{receitas.title}</Text>
                </View>
                
        </SafeAreaView>
    )
}