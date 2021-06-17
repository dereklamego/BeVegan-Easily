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
                        <Text style={[Estilo.TextHead,{textAlign:'center'}]}>Lasanha Vegana</Text>
                </View>
            </View>
             <View > 
                

                <ScrollView style = {[estiloRecipe.SView]} showsVerticalScrollIndicator={false}>
                     
                    <Image source={require('../../img/imgRecipe/lasanha.jpg')} style={[estiloRecipe.img]}/>
                    
                    <View style={[estiloRecipe.textContainer]}>
                        <Text style = {[estiloRecipe.txtTitles]}>INGREDIENTES</Text> 

                        <View>
                            <>
                                
                                
                                {/* Estilizar texto de forma não manual */}
                                
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>1 caixinha de massa de lasanha sem ovos (eu costumo usar 12 folhas da massa)</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>2 caixinhas de molho de tomate (dá mais ou menos 1 kg de molho)</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>1 cebola pequena</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>4 dentes de alho</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>1 abobrinha italiana pequena</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>2 berinjelas pequenas </Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>3 colheres (sopa) rasas de sal</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>1 colher (café) rasa de curry</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>1 colher (café) rasa páprica picante</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>2 colheres (sobremesa) rasas de orégano</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>1 maço pequeno de cheiro verde</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>1 colher (café) rasa de açúcar</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>2 palmitos</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>10 castanhas-do-pará</Text></Unorderedlist>

                                <Text style = {[estiloRecipe.txtTitles]}>MODO DE PREPARO</Text>

                                <Text style = {[estiloRecipe.txt]}>1. Pique a cebola e os dentes de alho em pedaços bem pequenos e reserve.</Text>
                                <Text style = {[estiloRecipe.txt]}>2. Rale a abobrinha e reserve. Corte as beringelas em rodelas bem finas e reserve.</Text>
                                <Text style = {[estiloRecipe.txt]}>3. Em uma panela grande coloque as 3 colheres de óleo e a cebola picada e refogue, Antes de ficar amarela, coloque o alho e refogue rapidamente, antes que fique amarelo.</Text>
                                <Text style = {[estiloRecipe.txt]}>4. Coloque a abobrinha e mexa até começar a soltar água. Coloque 1 das colheres de sal, o curry, a páprica picante e o orégano. </Text>
                                <Text style = {[estiloRecipe.txt]}>5. Mexa bem, adicione as 2 caixinhas de molho de tomate e adicione o restante do sal e o açúcar..</Text>
                                <Text style = {[estiloRecipe.txt]}>6. Mexa bem, feche a panela e deixe ferver, Enquanto isso, pique o maço de cheiro verde (umas 15 folhas de cebolinha e umas 10 folhas de salsinha) em pedaços bem pequenos..</Text>
                                <Text style = {[estiloRecipe.txt]}>7.Pique também o palmito em rodelas e depois em quatro. Reserve. Desligue o molho e adicione o palmito e o cheiro verde (isso deve demorar uns 5 minutos). Coloque um fio de óleo numa frigideira e frite rapidamente as fatias de berinjelas. Não precisa fritar muito já que a berinjela vai cozinhar no forno. Faça isso até fritar todas as fatias.</Text>
                                <Text style = {[estiloRecipe.txt]}>8.Procure deixar as fatias do mesmo tamanho para que o cozimento seja igual.</Text>
                                <Text style = {[estiloRecipe.txt]}>9.Antes da montagem pré-aqueça o forno a 180ºC.</Text>
                                

                                <Text style = {[estiloRecipe.txtTitles]}>MONTAGEM</Text>

                                <Text style = {[estiloRecipe.txt]}>1. Forre a forma com o molho e coloque 4 folhas da massa da lasanha. Distribua em cima dessa massa as fatias de berinjela. Jogue mais molho em cima da berinjela. Repita o processo mais 2 vezes.</Text>
                                <Text style = {[estiloRecipe.txt]}>2. Se desejar, coloque as castanhas-do-pará no liquidificador e triture. Jogue por cima da lasanha, para substituir o queijo parmesão, por exemplo.</Text>
                                <Text style = {[estiloRecipe.txt]}>3. A forma que eu uso mede 15cm x 30 cm. Deixe no forno a 230ºC por cerca de 40 minutos..</Text>
                                <Text style = {[estiloRecipe.txt]}>4. É importante colocar bastante molho para que as folhas da massa cozinhem..</Text>
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
                                 <DataTable.Title>PORÇÃO 80 G</DataTable.Title>
                                 <DataTable.Title numeric>Quantidade</DataTable.Title>
                                 <DataTable.Title numeric>%VD</DataTable.Title>
                             </DataTable.Header>
                             <DataTable.Row>
                                 <DataTable.Cell>Calorias</DataTable.Cell>
                                 <DataTable.Cell numeric>250 Kcal</DataTable.Cell>
                                 <DataTable.Cell numeric>15%</DataTable.Cell>
                             </DataTable.Row>
                             <DataTable.Row>
                                 <DataTable.Cell>Carboidratos</DataTable.Cell>
                                 <DataTable.Cell numeric>61 G</DataTable.Cell>
                                 <DataTable.Cell numeric>20%</DataTable.Cell>
                             </DataTable.Row>
                             <DataTable.Row>
                                 <DataTable.Cell>Proteínas</DataTable.Cell>
                                 <DataTable.Cell numeric>5,1 G</DataTable.Cell>
                                 <DataTable.Cell numeric>7%</DataTable.Cell>
                             </DataTable.Row>
                             <DataTable.Row>
                                 <DataTable.Cell>Gorduras totais</DataTable.Cell>
                                 <DataTable.Cell numeric>3,4 G</DataTable.Cell>
                                 <DataTable.Cell numeric>6%</DataTable.Cell>
                             </DataTable.Row>
                             <DataTable.Row>
                                 <DataTable.Cell>Gorduras Saturadas</DataTable.Cell>
                                 <DataTable.Cell numeric>1,1 G</DataTable.Cell>
                                 <DataTable.Cell numeric>5%</DataTable.Cell>
                             </DataTable.Row>
                             <DataTable.Row>
                                 <DataTable.Cell>Gorduras trans</DataTable.Cell>
                                 <DataTable.Cell numeric>Zero</DataTable.Cell>
                                 <DataTable.Cell numeric>**</DataTable.Cell>
                             </DataTable.Row>
                             <DataTable.Row>
                                 <DataTable.Cell>Fibras alimentares</DataTable.Cell>
                                 <DataTable.Cell numeric>1,9 G</DataTable.Cell>
                                 <DataTable.Cell numeric>8%</DataTable.Cell>
                             </DataTable.Row>
                             <DataTable.Row>
                                 <DataTable.Cell>Sódio</DataTable.Cell>
                                 <DataTable.Cell numeric>56 MG</DataTable.Cell>
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