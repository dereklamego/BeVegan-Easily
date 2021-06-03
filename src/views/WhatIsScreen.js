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
                        <Text style={[Estilo.TextHead,{textAlign:'center'}]}> O que é Veganismo</Text>
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} >
                {/* <View style={[EstiloLocal.imgContainer]}> */}
                    <Image source={require('../img/Whatisss.jpg')} style={[EstiloLocal.img]}/>
                {/* </View> */}
                <View style={[EstiloLocal.textContainer]}>
                
                    <Text style={[EstiloLocal.txtTitle]}>O que é Veganismo ?</Text>
                    <Text style={[EstiloLocal.txt]}>
                        É uma filosofia e estilo de vida que busca excluir, na medida do possível e praticável, todas as
                        formas de exploração e crueldade contra animais na alimentação, vestuário e qualquer outra
                        finalidade e por extensão, que promova o desenvolvimento e uso de alternativas livres de origem
                        animal para benefício de humanos, animais e meio ambiente.
            
                    </Text>
                    <Text style={[EstiloLocal.txt]}>
                        Assim, além de não consumir nenhum tipo de carne, os veganos também retiram da sua rotina todos os
                        alimentos e produtos de origem animal ou que tenham causado algum tipo de sofrimento aos animais.
                    </Text>
                    
                    <Text style={[EstiloLocal.txtTitle]}> o Video vai ser aqui </Text>
                    <Text style={[EstiloLocal.txt]}>
                        Por isso, o vegano também exclui da sua dieta os laticínios, ovos e mel. Além de não utilizar
                        nenhum tipo de produto de origem animal, seja de higiene, cosméticos, vestuário, medicinais, entre outros.
                    </Text>

                    <Text style={[EstiloLocal.txtTitle]}>Benefícios do Veganismo</Text>
                    <Text style={[EstiloLocal.txt]}>
                    De acordo com a Sociedade Vegetariana Brasileira (SVB) e com as nutricionistas especializadas Maria Julia Rosa 
                    e Isabel Andrade, o veganismo:
                    </Text>

                    <Text style = {[EstiloLocal.txtTopics]}>
                    - Previne doenças crônico-degenerativas, como Alzheimer e Parkinson
                    </Text>

                    <Text style = {[EstiloLocal.txtTopics]}>
                    - Diminui riscos de doenças cardiovasculares.
                    </Text>
                    
                    <Text style = {[EstiloLocal.txtTopics]}>
                    - Reduz o desenvolvimento de diabetes.
                    </Text>

                    <Text style = {[EstiloLocal.txtTopics]}>
                    - Abaixa a possibilidade de obesidade.
                    </Text>

                    <Text style={[EstiloLocal.txt]}>
                    A SVB comenta que as dietas veganas "trazem resultados benéficos na prevenção e no tratamento de diversas
                    doenças crônico-degenerativas não transmissíveis". A nutricionista Maria Julia Rosa complementa afirmando
                    que os adeptos ao veganismo têm menores riscos de doenças cardiovasculares, oculares, renais e câncer.
                    </Text>
                    
                    <Text style={[EstiloLocal.txtTitle]}> Vegetarianismo e Veganismo são a mesma coisa ?</Text>

                    <Text style = {[EstiloLocal.txt]}>
                    Não o Vegetarianismo é o regime alimentar que exclui os produtos de origem animal... terminar essa parte
                    </Text>
                
                </View>
            </ScrollView>
            {/*Footer da pagina */}
            <View style={Estilo.BottomColor}></View>
        </SafeAreaView>
    )
}

{/*Estilização local*/}
const EstiloLocal= StyleSheet.create({
    
        txt:{
            fontSize: 16,
            justifyContent: 'center',
            color: '#544F1F',
            margin: 10,
            textAlign: 'left',
        },

        txtTitle:{
            fontSize: 22,
            fontWeight: "bold",
            color:	'#544F1F',
            marginBottom: 10,
            marginLeft: 10
        },

        //estilizar 
        txtTopics:{
            fontSize: 16,
            paddingLeft:10,
            color:	'#544F1F',
            margin: 10
        },

        img:{
            width: '100%',
            height: '20%',
            top:-10

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
            marginTop:"-14%",
            paddingVertical:40,
            paddingBottom:"140%"
             
        }


})