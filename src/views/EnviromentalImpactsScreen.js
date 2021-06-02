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
                        <Text  style={EstiloLocal.titlePage}>IMPACTOS AMBIENTAIS E O VEGANISMO</Text>
                    </View>
                        
                    {/* </View> */}
                    <View style={[EstiloLocal.textContainer]}>
                    
                        <Text style={[EstiloLocal.txtTitle]}>O veganismo pode estagnar o aquecimento global?</Text>

                        <Text style={[EstiloLocal.txt]}>
                            As graves mudanças climaticas no nosso planeta, tem relações com aproximadamente 8 bilhões de pessoas no mundo vivendo através de consumo insustentável.
                        </Text>
                        <Text style={[EstiloLocal.txt]}>
                            Um estudo publicado na revista Science por pesquisadores da Universidade de Oxford (na Inglaterra), mostra que o principal agente pelos impactos ambientais é o consumo de produtos de origem animal.
                        </Text>
                        <Text style={[EstiloLocal.subtTitles]}>
                            Mas por que isso acontece?
                        </Text>
                        <Text style={[EstiloLocal.txt]}>
                            Atualmente segundo a Food and Agriculture Organization (FAO), órgão vinculado à ONU, o rebanho mundial é composto por cerca de 1,22 bilhões de cabeças de gado, 19 bilhões de frangos, e por volta de 980 milhões de porcos, que consomen milhões de recursos todos os dias.
                        </Text>
                        <Text style={[EstiloLocal.txt,{fontWeight:'bold'}]}>-Alto consumo de recursos hídricos</Text>
                        <Text style={[EstiloLocal.txt]}>
                             70% de toda a água consumida no mundo é usada na irrigação das lavouras, na pecuária e na aquicultura. A indústria responde pelo consumo de quase 20% e as residências, 12%. No Brasil, um dos maiores protagonistas nessa indústria, e que consome 20% de todo o agrotóxico do mundo só pra suprir essas demandas, usa 72% da água só pra agropecuária.
                        </Text>
                        <Text style={[EstiloLocal.txt]}> 
                             A média global da pegada hídrica de um quilo de carne bovina é de 15,5 mil litros de água.
                             A conta matemática realizada leva em consideração a quantidade de água usada na produção dos alimentos que os bois comem, da água que eles bebem, até mesma da água utilizada na limpeza dos currais onde ficam.
                        </Text>

                        <Text style={[EstiloLocal.txt,{fontWeight:'bold'}]}> -Desmatamento </Text>
                        
                        <Text style={[EstiloLocal.txt]}>
                            Segundo a Mapbiomas, a agropecuária foi responsável por 90% da perda de vegetação natural do Brasil entre os anos 1985 e 2019, equivalente a 10,25% do território nacional.
                        </Text>
                        <Text style={[EstiloLocal.txt]}>
                        Cerca de 80% do desmatamento global é resultado da produção agrícola, que também é a principal causa da destruição do habitat. A pecuária e alimentação animal é um importante fator de desmatamento

                        </Text>

                        <Text style={[EstiloLocal.txt]}>
                            Hoje no mundo, cerca de 122,647 milhões de hectares são desstinadas a plantação de soja. Onde cerca de 79% é esmagada para fazer ração animal e 18% para produção de óleo de soja. A demanda por carne tem aumentado a cada dia. Por isso, a demanda por soja para alimentar o gado também.
                        </Text>
                        <Text style={[EstiloLocal.txt,{fontWeight:'bold'}]}>-Emissão de gases  </Text>
                        <Text style={[EstiloLocal.txt]}>
                            No brasil, a agropecuária emitiu 598,7 milhões de toneladas de CO2 e em 2019, um aumento de 1,1% em relação às 592,3 milhões de toneladas emitidas em 2018. As emissões diretas do setor, fortemente ligadas ao rebanho bovino, representaram 28% do total de gases de efeito estufa do Brasil. As emissões de uso da terra representaram 44% do total nacional. Somados, os dois setores concentram 72% das emissões brasileiras.
                        </Text>
                        <Text style={[EstiloLocal.txt]}>
                        Durante a digestão, bois e vacas produzem muito metano, um gás que contribui com 23% do efeito estufa e é 21 vezes mais ativo que o gás carbônico na retenção dos raios solares que aquecem o globo. No Brasil, os rebanhos de bovinos e outros ruminantes são responsáveis por 90% do metano gerado no país – no mundo, esse índice cai para 28%. 

                        </Text>

                        <Text style={[EstiloLocal.subtTitles]}>
                            Quais os impactos o veganimso causaria ao planeta?
                        </Text>

                            <Text style={[EstiloLocal.txt]}>
                            
                                Os resultados da pesquisa, mostraram que, sem a produção de carnes e laticínios, o uso global de terras para alimentar toda a população do mundo poderia ser reduzido em mais de 75%. Essas terras equivalem a uma área do tamanho dos países China, Estados Unidos e Austrália somados a toda a União Europeia.
                            </Text>
                            <Text style={[EstiloLocal.txt]}>
                                Os cientistas de Oxford também desmentiram o argumento de que produtos animais são necessários para alimentar a população. Carnes e laticínios geram apenas 18% de todas as calorias ingeridas no planeta por seres humanos e dão apenas 37% de toda a proteína que precisamos. Ainda assim, esses produtos usam 83% de toda a área cultivável e produz 60% dos gases do efeito estufa produzidos no agronegócio.
                            </Text>
                            <Text style={[EstiloLocal.txt]}>
                                “Uma dieta vegana é provavelmente a melhor maneira de reduzir seu impacto no planeta Terra, não apenas gases do efeito estufa, mas acidificação global, eutrofização, uso da terra e uso da água. É muito mais efetivo do que cortar seus vôos ou comprar um carro elétrico.” – disse Joseph Poore, que liderou o estudo.
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
        // tem que botar a imagem alocada a tela toda de uma forma nao manual
        img:{
            width: '100%',
            height: '15%',
            top:-10
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
            marginTop:"-14%",
            paddingVertical:40,
            paddingBottom:"140%"
        },
        titleContainer:{
            padding:20,
            color:'white',
            position:'absolute',
            marginTop:50
        },
        titlePage:{
            lineHeight: 70,
            color:'white',
            fontSize:40,
            fontWeight:'bold'
        },
        subtTitles:{
            fontWeight:'bold',
            fontSize: 18,
            paddingLeft:10,
            color:	'#544F1F',
        }

})