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

                <ScrollView showsVerticalScrollIndicator={false} >
                    {/* <View style={[EstiloLocal.imgContainer]}> */}
                    <Image source={require('../img/deforestation.png')} style={[EstiloLocal.img]}/>

                    <View style={EstiloLocal.titleContainer}>
                        <Text  style={EstiloLocal.titlePage}>PRINCIPAIS CAUSAS DOS IMPACTOS AMBIENTAIS</Text>
                    </View>
                        
                    {/* </View> */}
                    <View style={[EstiloLocal.textContainer]}>
                    
                        <Text style={[EstiloLocal.txtTitle]}></Text>
                        <Text style={[EstiloLocal.txt]}>
                            É uma filosofia e estilo de vida que busca excluir, na medida do possível e praticável, todas as
                            formas de exploração e crueldade contra animais na alimentação, vestuário e qualquer outra
                            finalidade e por extensão, que promova o desenvolvimento e uso de alternativas livres de origem
                            animal para benefício de humanos, animais e meio ambiente.
                            É uma filosofia e estilo de vida que busca excluir, na medida do possível e praticável, todas as
                            formas de exploração e crueldade contra animais na alimentação, vestuário e qualquer outra
                            finalidade e por extensão, que promova o desenvolvimento e uso de alternativas livres de origem
                            animal para benefício de humanos, animais e meio ambiente.
                            É uma filosofia e estilo de vida que busca excluir, na medida do possível e praticável, todas as
                            formas de exploração e crueldade contra animais na alimentação, vestuário e qualquer outra
                            finalidade e por extensão, que promova o desenvolvimento e uso de alternativas livres de origem
                            animal para benefício de humanos, animais e meio ambiente.
                            É uma filosofia e estilo de vida que busca excluir, na medida do possível e praticável, todas as
                            formas de exploração e crueldade contra animais na alimentação, vestuário e qualquer outra
                            finalidade e por extensão, que promova o desenvolvimento e uso de alternativas livres de origem
                            animal para benefício de humanos, animais e meio ambiente.É uma filosofia e estilo de vida que busca excluir, na medida do possível e praticável, todas as
                            formas de exploração e crueldade contra animais na alimentação, vestuário e qualquer outra
                            finalidade e por extensão, que promova o desenvolvimento e uso de alternativas livres de origem
                            animal para benefício de humanos, animais e meio ambiente.
                            É uma filosofia e estilo de vida que busca excluir, na medida do possível e praticável, todas as
                            formas de exploração e crueldade contra animais na alimentação, vestuário e qualquer outra
                            finalidade e por extensão, que promova o desenvolvimento e uso de alternativas livres de origem
                            animal para benefício de humanos, animais e meio ambiente.
                            É uma filosofia e estilo de vida que busca excluir, na medida do possível e praticável, todas as
                            formas de exploração e crueldade contra animais na alimentação, vestuário e qualquer outra
                            finalidade e por extensão, que promova o desenvolvimento e uso de alternativas livres de origem
                            animal para benefício de humanos, animais e meio ambiente.
                            É uma filosofia e estilo de vida que busca excluir, na medida do possível e praticável, todas as
                            formas de exploração e crueldade contra animais na alimentação, vestuário e qualquer outra
                            finalidade e por extensão, que promova o desenvolvimento e uso de alternativas livres de origem
                            animal para benefício de humanos, animais e meio ambiente.
                            É uma filosofia e estilo de vida que busca excluir, na medida do possível e praticável, todas as
                            formas de exploração e crueldade contra animais na alimentação, vestuário e qualquer outra
                            finalidade e por extensão, que promova o desenvolvimento e uso de alternativas livres de origem
                            animal para benefício de humanos, animais e meio ambiente.
                            É uma filosofia e estilo de vida que busca excluir, na medida do possível e praticável, todas as
                            formas de exploração e crueldade contra animais na alimentação, vestuário e qualquer outra
                            finalidade e por extensão, que promova o desenvolvimento e uso de alternativas livres de origem
                            animal para benefício de humanos, animais e meio ambiente.
                            É uma filosofia e estilo de vida que busca excluir, na medida do possível e praticável, todas as
                            formas de exploração e crueldade contra animais na alimentação, vestuário e qualquer outra
                            finalidade e por extensão, que promova o desenvolvimento e uso de alternativas livres de origem
                            animal para benefício de humanos, animais e meio ambiente.
                            <Text style={[EstiloLocal.txt]}>
                            É uma filosofia e estilo de vida que busca excluir, na medida do possível e praticável, todas as
                            formas de exploração e crueldade contra animais na alimentação, vestuário e qualquer outra
                            finalidade e por extensão, que promova o desenvolvimento e uso de alternativas livres de origem</Text>
                            <Text style={[EstiloLocal.txt]}>
                            É uma filosofia e estilo de vida que busca excluir, na medida do possível e praticável, todas as
                            formas de exploração e crueldade contra animais na alimentação, vestuário e qualquer outra
                            finalidade e por extensão, que promova o desenvolvimento e uso de alternativas livres de origem</Text>
                            <Text style={[EstiloLocal.txt]}>
                            É uma filosofia e estilo de vida que busca excluir, na medida do possível e praticável, todas as
                            formas de exploração e crueldade contra animais na alimentação, vestuário e qualquer outra
                            finalidade e por extensão, que promova o desenvolvimento e uso de alternativas livres de origem</Text>
                            <Text style={[EstiloLocal.txt]}>
                            É uma filosofia e estilo de vida que busca excluir, na medida do possível e praticável, todas as
                            formas de exploração e crueldade contra animais na alimentação, vestuário e qualquer outra
                            finalidade e por extensão, que promova o desenvolvimento e uso de alternativas livres de origem</Text>
                            <Text style={[EstiloLocal.txt]}>
                            É uma filosofia e estilo de vida que busca excluir, na medida do possível e praticável, todas as
                            formas de exploração e crueldade contra animais na alimentação, vestuário e qualquer outra
                            finalidade e por extensão, que promova o desenvolvimento e uso de alternativas livres de origem</Text>
                            <Text style={[EstiloLocal.txt]}>
                            É uma filosofia e estilo de vida que busca excluir, na medida do possível e praticável, todas as
                            formas de exploração e crueldade contra animais na alimentação, vestuário e qualquer outra
                            finalidade e por extensão, que promova o desenvolvimento e uso de alternativas livres de origem</Text><Text style={[EstiloLocal.txt]}>
                            É uma filosofia e estilo de vida que busca excluir, na medida do possível e praticável, todas as
                            formas de exploração e crueldade contra animais na alimentação, vestuário e qualquer outra
                            finalidade e por extensão, que promova o desenvolvimento e uso de alternativas livres de origem</Text>
                
                        </Text>  
                    </View>
                </ScrollView>
            </View>
            {/*Footer da  pagina */}
            <View style={Estilo.BottomColor}></View>
        </SafeAreaView>
    )
}
/*Estilização local*/
const EstiloLocal= StyleSheet.create({
    
        txt:{
            fontSize: 16,
            
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
            width: '100%',
            height: '15%',
            
           /*  marginLeft:75,
            marginBottom: 15,
            marginEnd: 50 */

        },

        imgContainer:{
            width:'100%',
            height:'50%',

        },

        textContainer:{
            padding:20,
            height:"100%",
            borderTopLeftRadius:40,
            borderTopRightRadius:40,
            backgroundColor: 'white',
            marginTop:"-9%",
            paddingVertical:40,
            paddingBottom:"180%"
        },
        titleContainer:{
            padding:20,
            color:'white',
            position:'absolute',
            marginTop:60
        },
        titlePage:{
            lineHeight: 70,
            color:'white',
            fontSize:45,
            fontWeight:'bold'
        }


})