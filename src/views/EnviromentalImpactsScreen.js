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
                        <Text style={Estilo.TextHead}> Impactos Ambientais</Text>
                </View>
            </View>
            <View>

            <Text style={[Estilo.txtP,{color:'#ffff'}]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris ligula, ornare quis justo a, tincidunt congue mi. Aliquam consequat metus commodo magna dapibus, id sollicitudin urna molestie. Pellentesque maximus eleifend mauris, ac condimentum lorem tristique sit amet. In dapibus egestas commodo. Maecenas laoreet tempor ipsum et gravida. Quisque et est a odio viverra maximus. Sed condimentum semper sapien, ac ultricies tellus volutpat vitae. Mauris accumsan volutpat mauris, non posuere augue facilisis id. Duis ut erat ut turpis interdum vulputate ac vitae leo. Phasellus urna sapien, tincidunt sit amet sem sit amet, aliquet posuere libero. Nulla at tincidunt metus, vitae laoreet orci. Nunc vitae scelerisque tortor. Integer congue malesuada maximus. Aenean id est vitae nulla euismod lobortis vitae et nibh. Nunc auctor et libero a accumsan. Nulla faucibus quis neque ut mollis.</Text>

            </View>
            {/*Footer da pagina */}
            <View style={Estilo.BottomColor}></View>
        </SafeAreaView>
    )
}