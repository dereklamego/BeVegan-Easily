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
                        <Text style={[Estilo.TextHead,{textAlign:'center'}]}>Pastel vegano</Text>
                </View>
            </View>
             <View > 
                

                <ScrollView style = {[estiloRecipe.SView]} showsVerticalScrollIndicator={false}>
                     
                    <Image source={require('../../img/imgRecipe/pastelvegano.jpg')} style={[estiloRecipe.img]}/>
                    
                    <View style={[estiloRecipe.textContainer]}>
                        <Text style = {[estiloRecipe.txtTitles]}>INGREDIENTES</Text> 

                        <View>
                            <>
                                
                                
                                {/* Estilizar texto de forma não manual */}
                                
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}> 3 xícaras (chá) de farinha de trigo </Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>1 e 1/2 xícara (chá) água morna (cuidado para não ficar meio fria a água)</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>3 colheres (sopa) de óleo vegetal</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>2 colheres (sopa) cheias de cachaça (ou 2 de vinagre)</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>1 colher (sopa) rasa de sal</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>Farinha de trigo para poder abrir a massa e sovar</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>10 azeitonas picadas</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>1 xícara (chá) de palmito picado em cubos pequenoss</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>Orégano a gosto</Text></Unorderedlist>

                                <Text style = {[estiloRecipe.txtTitles]}>MODO DE PREPARO</Text>
                                <Text style = {[estiloRecipe.txt]}>1. Misture o sal na água (para que na hora de colocar no trigo, não fique distribuído de forma desigual) e leve-a ao fogo para que fique morna e reserve..</Text>
                                <Text style = {[estiloRecipe.txt]}>2. Misture o trigo com o óleo e a cachaça de sua preferência, lembre-se de misturar muito bem.</Text>
                                <Text style = {[estiloRecipe.txt]}>3. Em seguida, adicione a água aos poucos e misture até obter uma massa homogênea e que não grude nas mãos, perceba que enquanto dá leve sovadas, ela fica meio elástica ao ser partida..</Text>
                                <Text style = {[estiloRecipe.txt]}>4. Ela fica macia e não grudenta, se errar no ponto e por acaso ficar grudenta, adicione mais trigo..</Text>
                                <Text style = {[estiloRecipe.txt]}>5. Sove ela levemente por 2 a 5 minutos.</Text>
                                <Text style = {[estiloRecipe.txt]}>6.Em uma superfície enfarinhada, abra a massa de forma que ela fique bem fina, corte os pedaços em tamanho médio e recheie com palmito e azeitona.</Text>
                                <Text style = {[estiloRecipe.txt]}>7. Na hora de fechar a massa, use um garfo para dar o acabamento</Text>
                                <Text style = {[estiloRecipe.txt]}>8. Frite em óleo quente até dourar.</Text>
                                <Text style = {[estiloRecipe.txt]}>9. Enquanto os pastéis fritam, com a ajuda de uma colher vá colocando o óleo sobre a superfície que ficar pra fora, uma vez que o pastel irá boiar.</Text>
                                <Text style = {[estiloRecipe.txt]}>10. Assim que começar a fritar, vire para o outro lado..</Text>
                                <Text style = {[estiloRecipe.txt]}>11.Sirva com orégano e ketchup de sua escolha.</Text>
                            
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
                                 <DataTable.Title>PORÇÃO </DataTable.Title>
                                 <DataTable.Title numeric>Quantidade</DataTable.Title>
                                 <DataTable.Title numeric>%VD</DataTable.Title>
                             </DataTable.Header>
                             <DataTable.Row>
                                 <DataTable.Cell>Calorias</DataTable.Cell>
                                 <DataTable.Cell numeric>96,90 Kcal</DataTable.Cell>
                                 <DataTable.Cell numeric>4,85%</DataTable.Cell>
                             </DataTable.Row>
                             <DataTable.Row>
                                 <DataTable.Cell>Carboidratos</DataTable.Cell>
                                 <DataTable.Cell numeric>8,38 G</DataTable.Cell>
                                 <DataTable.Cell numeric>2,79%</DataTable.Cell>
                             </DataTable.Row>
                             <DataTable.Row>
                                 <DataTable.Cell>Proteínas</DataTable.Cell>
                                 <DataTable.Cell numeric>1,02 G</DataTable.Cell>
                                 <DataTable.Cell numeric>0,34%</DataTable.Cell>
                             </DataTable.Row>
                             <DataTable.Row>
                                 <DataTable.Cell>Gorduras totais</DataTable.Cell>
                                 <DataTable.Cell numeric>6,95 G</DataTable.Cell>
                                 <DataTable.Cell numeric>12,64%</DataTable.Cell>
                             </DataTable.Row>
                             <DataTable.Row>
                                 <DataTable.Cell>Gorduras Saturadas</DataTable.Cell>
                                 <DataTable.Cell numeric>1,17 G</DataTable.Cell>
                                 <DataTable.Cell numeric>5,33%</DataTable.Cell>
                             </DataTable.Row>
                             <DataTable.Row>
                                 <DataTable.Cell>Gorduras trans</DataTable.Cell>
                                 <DataTable.Cell numeric>Zero</DataTable.Cell>
                                 <DataTable.Cell numeric>**</DataTable.Cell>
                             </DataTable.Row>
                             <DataTable.Row>
                                 <DataTable.Cell>Fibras alimentares</DataTable.Cell>
                                 <DataTable.Cell numeric>0,22 G</DataTable.Cell>
                                 <DataTable.Cell numeric>0,88%</DataTable.Cell>
                             </DataTable.Row>
                             <DataTable.Row>
                                 <DataTable.Cell>Sódio</DataTable.Cell>
                                 <DataTable.Cell numeric>Zero</DataTable.Cell>
                                 <DataTable.Cell numeric>Zero</DataTable.Cell>
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