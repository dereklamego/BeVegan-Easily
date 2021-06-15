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
                        <Text style={[Estilo.TextHead,{textAlign:'center'}]}>Mousse Vegano</Text>
                </View>
            </View>
             <View > 
                

                <ScrollView style = {[estiloRecipe.SView]} showsVerticalScrollIndicator={false}>
                     
                    <Image source={require('../../img/imgRecipe/moussevegano.jpeg')} style={[estiloRecipe.img]}/>
                    
                    <View style={[estiloRecipe.textContainer]}>
                        <Text style = {[estiloRecipe.txtTitles]}>INGREDIENTES</Text> 

                        <View>
                            <>
                                
                                
                                {/* Estilizar texto de forma não manual */}
                                
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}> 1 abacate maduro </Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>2 colheres (sopa) de cacau em pó</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>1 pitada de canela em pó</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>4 colheres (sopa) de melado de cana</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>1 colher (chá) de essência de baunilha</Text></Unorderedlist>


                                <Text style = {[estiloRecipe.txtTitles]}>MODO DE PREPARO</Text>
                                <Text style = {[estiloRecipe.txt]}>1. No liquidificador, adicione o abacate, o cacau, a canela, o melado e a essência de baunilha.</Text>
                                <Text style = {[estiloRecipe.txt]}>2. Bata bem e leve à geladeira por 2 horas.</Text>
                                
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
                                 <DataTable.Cell numeric>96,2 Kcal</DataTable.Cell>
                                 <DataTable.Cell numeric>5%</DataTable.Cell>
                             </DataTable.Row>
                             <DataTable.Row>
                                 <DataTable.Cell>Carboidratos</DataTable.Cell>
                                 <DataTable.Cell numeric>6 G</DataTable.Cell>
                                 <DataTable.Cell numeric>5%</DataTable.Cell>
                             </DataTable.Row>
                             <DataTable.Row>
                                 <DataTable.Cell>Proteínas</DataTable.Cell>
                                 <DataTable.Cell numeric>1,2 G</DataTable.Cell>
                                 <DataTable.Cell numeric>2%</DataTable.Cell>
                             </DataTable.Row>
                             <DataTable.Row>
                                 <DataTable.Cell>Gorduras totais</DataTable.Cell>
                                 <DataTable.Cell numeric>**</DataTable.Cell>
                                 <DataTable.Cell numeric>**</DataTable.Cell>
                             </DataTable.Row>
                             <DataTable.Row>
                                 <DataTable.Cell>Gorduras Saturadas</DataTable.Cell>
                                 <DataTable.Cell numeric>2,3 G</DataTable.Cell>
                                 <DataTable.Cell numeric>10%</DataTable.Cell>
                             </DataTable.Row>
                             <DataTable.Row>
                                 <DataTable.Cell>Gorduras trans</DataTable.Cell>
                                 <DataTable.Cell numeric>Zero</DataTable.Cell>
                                 <DataTable.Cell numeric>**</DataTable.Cell>
                             </DataTable.Row>
                             <DataTable.Row>
                                 <DataTable.Cell>Fibras alimentares</DataTable.Cell>
                                 <DataTable.Cell numeric>6,3 G</DataTable.Cell>
                                 <DataTable.Cell numeric>25%</DataTable.Cell>
                             </DataTable.Row>
                             <DataTable.Row>
                                 <DataTable.Cell>Sódio</DataTable.Cell>
                                 <DataTable.Cell numeric>**</DataTable.Cell>
                                 <DataTable.Cell numeric>**</DataTable.Cell>
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