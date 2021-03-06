import React, {useRef} from 'react';
import Estilo from '../../components/estilo';
import GlobalStyles from '../../components/GlobalStyles';
import { Text, View, TouchableOpacity, SafeAreaView, Image ,ScrollView} from 'react-native'
import Unorderedlist from 'react-native-unordered-list';
import estiloRecipe from '../../components/estiloRecipe';
import {Modalize} from 'react-native-modalize';
import { DataTable} from 'react-native-paper';
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
                        <Text style={[Estilo.TextHead,{textAlign:'center'}]}>Bolinho de Arroz</Text>
                </View>
            </View>
             <View > 
                

                <ScrollView style = {[estiloRecipe.SView]} showsVerticalScrollIndicator={false}>
                     
                    <Image source={require('../../img/imgRecipe/bolinhoArroz.jpg')} style={[estiloRecipe.img]}/>
                    
                    <View style={[estiloRecipe.textContainer]}>
                        <Text style = {[estiloRecipe.txtTitles]}>INGREDIENTES</Text> 

                        <View>
                            <>
                                <Text style = {[estiloRecipe.subtTitles]}>Massa</Text>
                                
                                {/* Estilizar texto de forma não manual */}
                                
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>3 colheres de farinha de trigo integral</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>Sal a gosto</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>2 colheres de amido de batata dissolvido em 3 colheres (sopa) de água (substituindo 1 ovo)</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>2 colheres de levedura nutricional (substituindo o queijo ralado)</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>1 colher (sopa) de azeite de oliva (ajuda a dar mais liga)</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>Salsinha seca</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>Pimenta-do-reino a gosto</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>1/2 xícara de água</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>1 colher (chá) de sementes de erva-doce</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>Pitada de estragão em pó</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>2 xícaras de arroz branco ou integral cozido (aquele que sobrou do dia anterior e foi pra geladeira, sabe)</Text></Unorderedlist>

                                
                                

                                <Text style = {[estiloRecipe.txtTitles]}>MODO DE PREPARO</Text>
                                <Text style = {[estiloRecipe.txt]}>1. Com exceção do arroz, misture todos os ingredientes acima muito bem e então adicione o arroz no final.</Text>
                                <Text style = {[estiloRecipe.txt]}>2. Misture bem novamente. Frite em óleo quente a colheradas. Eu usei óleo de canola numa panela de ferro.</Text>
                                <Text style = {[estiloRecipe.txt]}>3. Minha mãe enrola cada bolinho na mão e passa na farinha de rosca (ou de pão) antes de fritar. Também fica delicioso.</Text>
                            
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
                                 <DataTable.Title>PORÇÃO 100 G</DataTable.Title>
                                 <DataTable.Title numeric>Quantidade</DataTable.Title>
                                 <DataTable.Title numeric>%VD</DataTable.Title>
                             </DataTable.Header>
                             <DataTable.Row>
                                 <DataTable.Cell>Calorias</DataTable.Cell>
                                 <DataTable.Cell numeric>340 Kcal</DataTable.Cell>
                                 <DataTable.Cell numeric>17%</DataTable.Cell>
                             </DataTable.Row>
                             <DataTable.Row>
                                 <DataTable.Cell>Carboidratos</DataTable.Cell>
                                 <DataTable.Cell numeric>46,7 G</DataTable.Cell>
                                 <DataTable.Cell numeric>16%</DataTable.Cell>
                             </DataTable.Row>
                             <DataTable.Row>
                                 <DataTable.Cell>Proteínas</DataTable.Cell>
                                 <DataTable.Cell numeric>8,66 G</DataTable.Cell>
                                 <DataTable.Cell numeric>12%</DataTable.Cell>
                             </DataTable.Row>
                             <DataTable.Row>
                                 <DataTable.Cell>Gorduras totais</DataTable.Cell>
                                 <DataTable.Cell numeric>13,6 G</DataTable.Cell>
                                 <DataTable.Cell numeric>23%</DataTable.Cell>
                             </DataTable.Row>
                             <DataTable.Row>
                                 <DataTable.Cell>Gorduras Saturadas</DataTable.Cell>
                                 <DataTable.Cell numeric>1,8 G</DataTable.Cell>
                                 <DataTable.Cell numeric>8%</DataTable.Cell>
                             </DataTable.Row>
                             <DataTable.Row>
                                 <DataTable.Cell>Gorduras trans</DataTable.Cell>
                                 <DataTable.Cell numeric>0,06 G</DataTable.Cell>
                                 <DataTable.Cell numeric>**</DataTable.Cell>
                             </DataTable.Row>
                             <DataTable.Row>
                                 <DataTable.Cell>Fibras alimentares</DataTable.Cell>
                                 <DataTable.Cell numeric>1,73 G</DataTable.Cell>
                                 <DataTable.Cell numeric>7%</DataTable.Cell>
                             </DataTable.Row>
                             <DataTable.Row>
                                 <DataTable.Cell>Sódio</DataTable.Cell>
                                 <DataTable.Cell numeric>58,9 MG</DataTable.Cell>
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