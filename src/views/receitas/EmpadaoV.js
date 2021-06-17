import React, {useRef} from 'react';
import Estilo from '../../components/estilo';
import GlobalStyles from '../../components/GlobalStyles';
import { Text, View, TouchableOpacity, SafeAreaView, Image,ScrollView} from 'react-native'
import Unorderedlist from 'react-native-unordered-list';
import estiloRecipe from '../../components/estiloRecipe';
import {Modalize} from 'react-native-modalize';
import { DataTable} from 'react-native-paper';
import YoutubePlayer from 'react-native-youtube-iframe';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';

export default ({navigation}) => {

    const modalizeRef = useRef(null);

    onOpen = () =>{
        modalizeRef.current?.open()
    }

    return(
        //conteudo da pagina
        <SafeAreaView style={[Estilo.AppPrincipal, GlobalStyles.AndroidSafeArea]}>
            {/*Header da pagina */}
            <View style={[Estilo.HeadColor, {flexDirection:'row'}]}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text  style={[Estilo.txtBack,{textDecorationLine: 'underline'}] }>Voltar</Text>                        
                </TouchableOpacity> 
                <View style={[Estilo.HeadAlign]}>
                        <Text style={[Estilo.TextHead,{textAlign:'center'}]}>Empadão Vegano</Text>
                </View>
            </View>
             <View > 
                

                <ScrollView style = {[estiloRecipe.SView]} showsVerticalScrollIndicator={false}>
                     
                    <Image source={require('../../img/imgRecipe/emapadaoV.jpeg')} style={[estiloRecipe.img]}/>
                    
                    <View style={[estiloRecipe.textContainer]}>
                        <Text style = {[estiloRecipe.txtTitles]}>Ingredientes</Text> 

                        <View>
                            <>
                                <Text style = {[estiloRecipe.subtTitles]}>Recheio</Text>
                                
                                {/* Estilizar texto de forma não manual */}
                                
                                <Unorderedlist><Text style = {[estiloRecipe.txt]} >240 g de palmito pupunha</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>50 g de vagem bem picadinha</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>1 lata de seleta de legumes</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>50 gramas de azeitona preta fatiada</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>100 g de cebola</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>30 ml de azeite</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>2 g de orégano</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>120 ml de água</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>1 colher(sopa) de amido de milho</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>sal a gosto</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>pimenta-do-reino a gosto</Text></Unorderedlist>
                                
                                <Text style = {[estiloRecipe.subtTitles]}>Massa</Text>

                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>1 caixinha de grão-de-bico</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>20 ml de azeite</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>sal a gosto</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>3 g de cúrcuma</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>150 g de farinha de arroz</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>60 ml de água</Text></Unorderedlist>

                                <Text style = {[estiloRecipe.txtTitles]}>MODO DE PREPARO</Text>
                                <Text style = {[estiloRecipe.txt]}>1. Para o recheio, refogue a cebola com azeite</Text>
                                <Text style = {[estiloRecipe.txt]}>2. Acrescente o palmito, a vagem, a cenoura e o orégano; cozinhe com a água até que fique ao dente. Tempere com sal e pimenta</Text>
                                <Text style = {[estiloRecipe.txt]}>3. Coloque o amido de milho dissolvido em um pouco de água, mexendo sempre até incorporar no recheio.</Text>
                                <Text style = {[estiloRecipe.txt]}>4. Acrescente a azeitona e desligue o fogo.</Text>
                                <Text style = {[estiloRecipe.txt]}>5. No processador, coloque o grão-de-bico, o azeite, sal, água e a cúrcuma; processe para misturar.</Text>
                                <Text style = {[estiloRecipe.txt]}>6.Na tigela com a farinha de arroz, adicione a mistura e mexa com a ajuda das mãos até formar uma massa firme.</Text>
                                <Text style = {[estiloRecipe.txt]}>7. Forre o fundo de pequenos recipientes com parte da massa.</Text>
                                <Text style = {[estiloRecipe.txt]}>8. Coloque o recheio.</Text>
                                <Text style = {[estiloRecipe.txt]}>9. Cubra com uma outra parte da massa.</Text>
                                <Text style = {[estiloRecipe.txt]}>10. Leve ao forno preaquecido a 180° C por aproximadamente 30 minutos.</Text>

                            
                            </>
                        </View>
                            <View style={[Estilo.BtnContainer]}>
                                <TouchableOpacity style={[estiloRecipe.btnRecipe]} onPress={()=>this.onOpen()} title="Entrar">
                                <Text style={[Estilo.txtBtnG]}>Tabela Nutricional</Text>
                                </TouchableOpacity>
                            </View>
                            
                    </View>
       

                </ScrollView>
                <Modalize 
                    ref={modalizeRef}
                    snapPoint={500}
                    modalHeight={500}
                > 
                    <View 
                        style={{ 
                            height:500,
                        }}>

                         <>
                         <Text style = {[estiloRecipe.txtTitles]}>Tabela Nutricional</Text>
                         </>
                         <ScrollView style = {[estiloRecipe.SViewT]} showsVerticalScrollIndicator={false}>
                         <DataTable style={{flex:1}}>
                             <DataTable.Header>
                                 <DataTable.Title>PORÇÃO 260 G</DataTable.Title>
                                 <DataTable.Title numeric>Quantidade</DataTable.Title>
                                 <DataTable.Title numeric>%VD</DataTable.Title>
                             </DataTable.Header>
                             <DataTable.Row>
                                 <DataTable.Cell>Calorias</DataTable.Cell>
                                 <DataTable.Cell numeric>691 Kcal</DataTable.Cell>
                                 <DataTable.Cell numeric>35%</DataTable.Cell>
                             </DataTable.Row>
                             <DataTable.Row>
                                 <DataTable.Cell>Carboidratos</DataTable.Cell>
                                 <DataTable.Cell numeric>74 G</DataTable.Cell>
                                 <DataTable.Cell numeric>25%</DataTable.Cell>
                             </DataTable.Row>
                             <DataTable.Row>
                                 <DataTable.Cell>Proteínas</DataTable.Cell>
                                 <DataTable.Cell numeric>13 G</DataTable.Cell>
                                 <DataTable.Cell numeric>17%</DataTable.Cell>
                             </DataTable.Row>
                             <DataTable.Row>
                                 <DataTable.Cell>Gorduras totais</DataTable.Cell>
                                 <DataTable.Cell numeric>38 G</DataTable.Cell>
                                 <DataTable.Cell numeric>40%</DataTable.Cell>
                             </DataTable.Row>
                             <DataTable.Row>
                                 <DataTable.Cell>Gorduras Saturadas</DataTable.Cell>
                                 <DataTable.Cell numeric>20 G</DataTable.Cell>
                                 <DataTable.Cell numeric>91%</DataTable.Cell>
                             </DataTable.Row>
                             <DataTable.Row>
                                 <DataTable.Cell>Gorduras trans</DataTable.Cell>
                                 <DataTable.Cell numeric>Zero</DataTable.Cell>
                                 <DataTable.Cell numeric>**</DataTable.Cell>
                             </DataTable.Row>
                             <DataTable.Row>
                                 <DataTable.Cell>Fibras alimentares</DataTable.Cell>
                                 <DataTable.Cell numeric>9,3 G</DataTable.Cell>
                                 <DataTable.Cell numeric>37%</DataTable.Cell>
                             </DataTable.Row>
                             <DataTable.Row>
                                 <DataTable.Cell>Sódio</DataTable.Cell>
                                 <DataTable.Cell numeric>2045 MG</DataTable.Cell>
                                 <DataTable.Cell numeric>85%</DataTable.Cell>
                             </DataTable.Row>
                         </DataTable>

                         <Text>** VD não estabelecido</Text>
                         </ScrollView>

                    </View>
                </Modalize>
                    
             </View> 
            <View style={Estilo.BottomColor}>
                <MaterialCommunityIcons name="heart" size={30} color="white" />
                <Feather name="search" size={30} color="white" />
                <Feather name="user" size={30} color="white" />
            </View>
            </SafeAreaView>
    )
}