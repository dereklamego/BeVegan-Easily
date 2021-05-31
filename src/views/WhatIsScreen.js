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
                        <Text style={[Estilo.TextHead,{textAlign:'center'}]}> O que é veganismo</Text>
                </View>
            </View>
            <View>
                <Image source={require('../img/oqueé.png')} style={[EstiloWhatIs.img]}/>
                <Text style={[EstiloWhatIs.txtTitle]}>Veganismo</Text>
                <Text style={[EstiloWhatIs.txt]}>
                    É uma filosofia e estilo de vida que busca excluir, na medida do possível e praticável, todas as
                    formas de exploração e crueldade contra animais na alimentação, vestuário e qualquer outra
                    finalidade e por extensão, que promova o desenvolvimento e uso de alternativas livres de origem
                    animal para benefício de humanos, animais e meio ambiente.
        
                </Text>
                <Text style={[EstiloWhatIs.txt]}>
                Assim, além de não consumir nenhum tipo de carne, os veganos também retiram da sua rotina todos os
                alimentos e produtos de origem animal ou que tenham causado algum tipo de sofrimento aos animais.
                </Text>
                
                <Text style={[EstiloWhatIs.txtTitle]}> o Video vai ser aqui </Text>
                <Text style={[EstiloWhatIs.txt]}>
                Por isso, o vegano também exclui da sua dieta os laticínios, ovos e mel. Além de não utilizar
                nenhum tipo de produto de origem animal, seja de higiene, cosméticos, vestuário, medicinais, entre outros.
                </Text>

                
              
            </View>
            {/*Footer da pagina */}
            <View style={Estilo.BottomColor}></View>
        </SafeAreaView>
    )
}

{/*Estilização local*/}
const EstiloWhatIs= StyleSheet.create({
    
        txt:{
            fontSize: 18,
            fontWeight: "bold",
            justifyContent: 'center',
            color: '#2B280D',
            margin: 10,
            
            textAlign: 'left',
        },

        txtTitle:{
            fontSize: 22,
            fontWeight: "bold",
            color:	"#000",
            marginBottom: 10,
            marginLeft: 10
        },
        // tem que botar a imagem alocada a tela toda de uma forma nao manual
        img:{
            width: 400,
            marginTop: 30
            
           /*  marginLeft:75,
            marginBottom: 15,
            marginEnd: 50 */

        }

})