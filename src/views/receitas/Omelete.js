import React, {useRef} from 'react';
import Estilo from '../../components/estilo';
import GlobalStyles from '../../components/GlobalStyles';
import { Text, View, TouchableOpacity, SafeAreaView, Image, StyleSheet,ScrollView} from 'react-native'
import Unorderedlist from 'react-native-unordered-list';
import estiloRecipe from '../../components/estiloRecipe';
import {Modalize} from 'react-native-modalize';
import {DataTable} from 'react-native-paper';
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
                        <Text style={[Estilo.TextHead,{textAlign:'center'}]}>Omelete Vegano</Text>
                </View>
            </View>
             <View > 
                

                <ScrollView style = {[estiloRecipe.SView]} showsVerticalScrollIndicator={false}>
                     
                    <Image source={require('../../img/imgRecipe/omelete.jpg')} style={[estiloRecipe.img]}/>
                    
                    <View style={[estiloRecipe.textContainer]}>
                        <Text style = {[estiloRecipe.txtTitles]}>INGREDIENTES</Text> 

                        <View>
                            <>
                                
                                
                                {/* Estilizar texto de forma não manual */}
                                
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>1 xícara de grão-de-bico (já deixado de molho na água de um dia para o outro)</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>2 colheres (sopa) de aveia em flocos</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>1 colher (sopa) de cúrcuma</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>2 xícaras de água</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>Cebolinha, salsinha, gergelim, cebola picada e outras ervas a gosto</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>Sal a gosto</Text></Unorderedlist>
                                
                                

                                <Text style = {[estiloRecipe.txtTitles]}>MODO DE PREPARO</Text>
                                <Text style = {[estiloRecipe.txt]}>1. Escorra a água do grão-de-bico que estava de molho e coloque uma xícara do grão no liquidificador.</Text>
                                <Text style = {[estiloRecipe.txt]}>2. Acrescente a água, a aveia em flocos e a cúrcuma e bata até obter uma massa homogênea</Text>
                                <Text style = {[estiloRecipe.txt]}>3. Transfira a massa para outro recipiente, acrescente o restante dos ingredientes, temperos, o sal na quantidade que preferir e misture bem.</Text>
                                <Text style = {[estiloRecipe.txt]}>4. Coloque uma frigideira no fogo baixo, de preferência com teflon ou a que você possua que grude menos. Coloque apenas 1 fio de óleo para untar.</Text>
                                <Text style = {[estiloRecipe.txt]}>5. Despeje a quantidade de massa na frigideira e frite, como panquecas.</Text>
                                <Text style = {[estiloRecipe.txt]}>6. Se você coloca uma quantidade espessa, use uma tampa na frigideira para que cozinhe mais rápido. Tenha paciência, ela demora mais do que os omeletes normais para que fique dourado ou crocante.</Text>
                                <Text style = {[estiloRecipe.txt]}>7. Verifique pelas bordas antes de virar a massa, se elas já puderem se desgrudar da frigideira, então vire delicadamente a massa e, caso necessário, passe a espátula em baixo da massa para ter certeza de que ela não grudou; se o meio ainda estiver mole, ela quebra.</Text>
                                <Text style = {[estiloRecipe.txt]}>8. Então controle bem o fogo para que as bordas não queimem e o meio mais espesso fique cru.</Text>
                                <Text style = {[estiloRecipe.txt]}>9. Pode ser servido puro ou com o recheio que preferir</Text>
                                
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
                                 <DataTable.Title>PORÇÃO 60 G</DataTable.Title>
                                 <DataTable.Title numeric>Quantidade</DataTable.Title>
                                 <DataTable.Title numeric>%VD</DataTable.Title>
                             </DataTable.Header>
                             <DataTable.Row>
                                 <DataTable.Cell>Calorias</DataTable.Cell>
                                 <DataTable.Cell numeric>248 Kcal</DataTable.Cell>
                                 <DataTable.Cell numeric>12%</DataTable.Cell>
                             </DataTable.Row>
                             <DataTable.Row>
                                 <DataTable.Cell>Carboidratos</DataTable.Cell>
                                 <DataTable.Cell numeric>44 G</DataTable.Cell>
                                 <DataTable.Cell numeric>15%</DataTable.Cell>
                             </DataTable.Row>
                             <DataTable.Row>
                                 <DataTable.Cell>Proteínas</DataTable.Cell>
                                 <DataTable.Cell numeric>8,4 G</DataTable.Cell>
                                 <DataTable.Cell numeric>11%</DataTable.Cell>
                             </DataTable.Row>
                             <DataTable.Row>
                                 <DataTable.Cell>Gorduras totais</DataTable.Cell>
                                 <DataTable.Cell numeric>4,1 G</DataTable.Cell>
                                 <DataTable.Cell numeric>8%</DataTable.Cell>
                             </DataTable.Row>
                             <DataTable.Row>
                                 <DataTable.Cell>Gorduras Saturadas</DataTable.Cell>
                                 <DataTable.Cell numeric>0,3 G</DataTable.Cell>
                                 <DataTable.Cell numeric>1%</DataTable.Cell>
                             </DataTable.Row>
                             <DataTable.Row>
                                 <DataTable.Cell>Gorduras trans</DataTable.Cell>
                                 <DataTable.Cell numeric>Zero G</DataTable.Cell>
                                 <DataTable.Cell numeric>**</DataTable.Cell>
                             </DataTable.Row>
                             <DataTable.Row>
                                 <DataTable.Cell>Fibras alimentares</DataTable.Cell>
                                 <DataTable.Cell numeric>4,2 G</DataTable.Cell>
                                 <DataTable.Cell numeric>17%</DataTable.Cell>
                             </DataTable.Row>
                             <DataTable.Row>
                                 <DataTable.Cell>Sódio</DataTable.Cell>
                                 <DataTable.Cell numeric>46 MG</DataTable.Cell>
                                 <DataTable.Cell numeric>2%</DataTable.Cell>
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