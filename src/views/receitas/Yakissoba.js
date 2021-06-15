import React, {useRef} from 'react';
import Estilo from '../../components/estilo';
import GlobalStyles from '../../components/GlobalStyles';
import { Text, View, TouchableOpacity, SafeAreaView, Image, StyleSheet,ScrollView} from 'react-native'
import Unorderedlist from 'react-native-unordered-list';
import estiloRecipe from '../../components/estiloRecipe';
import {Modalize} from 'react-native-modalize';
import {DataTable} from 'react-native-paper';

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
                        <Text style={[Estilo.TextHead,{textAlign:'center'}]}>Yakissoba Vegano</Text>
                </View>
            </View>
             <View > 
                

                <ScrollView style = {[estiloRecipe.SView]} showsVerticalScrollIndicator={false}>
                     
                    <Image source={require('../../img/imgRecipe/yakissoba.jpg')} style={[estiloRecipe.img]}/>
                    
                    <View style={[estiloRecipe.textContainer]}>
                        <Text style = {[estiloRecipe.txtTitles]}>INGREDIENTES</Text> 

                        <View>
                            <>
                                <Text style = {[estiloRecipe.subtTitles]}>Massa</Text>
                                
                                {/* Estilizar texto de forma não manual */}
                                
                                <Unorderedlist><Text style = {[estiloRecipe.txt]} >1 caixa de macarrão sem ovo</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>1 cenoura fatiada em rodelas cozida</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>1 brócolis (pequeno) cortado em pedaços cozido</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>1/2 repolho roxo cortado em fatias finas</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>1 cebola média picada</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>2 colheres de (sopa) de óleo de gergelim torrado</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>1/2 pimentão vermelho picado</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>1/2 pimentão verde picado</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>1/2 pimentão amarelo picado</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>sal a gosto</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>cebolinha picada e alho em flocos a gosto</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>opcional tempero caseiro: (alho, semente de coentro e sal)</Text></Unorderedlist>
                                
                                <Text style = {[estiloRecipe.subtTitles]}>Molho</Text>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>2 colheres (sopa) de amido de milho</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>1 xícara (chá) de shoyu (molho de soja)</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>1 xícara (chá) de água</Text></Unorderedlist>


                                <Text style = {[estiloRecipe.txtTitles]}>MODO DE PREPARO</Text>
                                <Text style = {[estiloRecipe.txt]}>1. Cozinhe o macarrão al dente e reserve.</Text>
                                <Text style = {[estiloRecipe.txt]}>2.Cozinhe o brócolis e a cenoura em água com um pouco de sal separadamente e reserve.</Text>
                                <Text style = {[estiloRecipe.txt]}>3. Refogue cebola, alho, sal no óleo de gergelim; acrescente o repolho roxo e alho em flocos (misture até o repolho murchar) e reserve.</Text>
                                <Text style = {[estiloRecipe.txt]}>4. Refogue os pimentões no óleo e tempere a gosto em fogo baixo até ficarem macios.</Text>
                                <Text style = {[estiloRecipe.txt]}>5. Acrescente à mistura do repolho, misture tudo em um recipiente grande (exceto o macarrão).</Text>

                                <Text style = {[estiloRecipe.subtTitles]}>Molho de Soja:</Text>

                                <Text style = {[estiloRecipe.txt]}>6. Dissolva o amido de milho em uma xícara de água e acrescente uma xícara (chá) de shoyu.</Text>
                                <Text style = {[estiloRecipe.txt]}>7. Leve ao fogo até engrossar o molho, mexendo sempre.</Text>
                                <Text style = {[estiloRecipe.txt]}>8. Misture os legumes com macarrão e acrescente delicadamente o molho de shoyu.</Text>
                                <Text style = {[estiloRecipe.txt]}>9. Misture devagar e finalize com a cebolinha.</Text>

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
                                 <DataTable.Cell numeric>112,8 Kcal</DataTable.Cell>
                                 <DataTable.Cell numeric>6%</DataTable.Cell>
                             </DataTable.Row>
                             <DataTable.Row>
                                 <DataTable.Cell>Carboidratos</DataTable.Cell>
                                 <DataTable.Cell numeric>18,3 G</DataTable.Cell>
                                 <DataTable.Cell numeric>6%</DataTable.Cell>
                             </DataTable.Row>
                             <DataTable.Row>
                                 <DataTable.Cell>Proteínas</DataTable.Cell>
                                 <DataTable.Cell numeric>7,5 G</DataTable.Cell>
                                 <DataTable.Cell numeric>10%</DataTable.Cell>
                             </DataTable.Row>
                             <DataTable.Row>
                                 <DataTable.Cell>Gorduras totais</DataTable.Cell>
                                 <DataTable.Cell numeric>**</DataTable.Cell>
                                 <DataTable.Cell numeric>**</DataTable.Cell>
                             </DataTable.Row>
                             <DataTable.Row>
                                 <DataTable.Cell>Gorduras Saturadas</DataTable.Cell>
                                 <DataTable.Cell numeric>0,6 G</DataTable.Cell>
                                 <DataTable.Cell numeric>3%</DataTable.Cell>
                             </DataTable.Row>
                             <DataTable.Row>
                                 <DataTable.Cell>Gorduras trans</DataTable.Cell>
                                 <DataTable.Cell numeric>**</DataTable.Cell>
                                 <DataTable.Cell numeric>**</DataTable.Cell>
                             </DataTable.Row>
                             <DataTable.Row>
                                 <DataTable.Cell>Fibras alimentares</DataTable.Cell>
                                 <DataTable.Cell numeric>1,1 G</DataTable.Cell>
                                 <DataTable.Cell numeric>4%</DataTable.Cell>
                             </DataTable.Row>
                             <DataTable.Row>
                                 <DataTable.Cell>Sódio</DataTable.Cell>
                                 <DataTable.Cell numeric>793,8 MG</DataTable.Cell>
                                 <DataTable.Cell numeric>33%</DataTable.Cell>
                             </DataTable.Row>
                         </DataTable>

                         <Text>** VD não estabelecido</Text>
                         </ScrollView>
                    </View>
                </Modalize>
                    
             </View> 
            <View style={Estilo.BottomColor}></View>
            </SafeAreaView>
    )
}