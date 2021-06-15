import React, {useRef} from 'react';
import Estilo from '../../components/estilo';
import GlobalStyles from '../../components/GlobalStyles';
import { Text, View, TouchableOpacity, SafeAreaView, Image, StyleSheet,ScrollView} from 'react-native'
import Unorderedlist from 'react-native-unordered-list';
import estiloRecipe from '../../components/estiloRecipe';
import {Modalize} from 'react-native-modalize';
import YoutubePlayer from 'react-native-youtube-iframe';

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
                     
                    <Image source={require('../../img/imgRecipe/nuggets.jpg')} style={[estiloRecipe.img]}/>
                    
                    <View style={[estiloRecipe.textContainer]}>
                        <Text style = {[estiloRecipe.txtTitles]}>INGREDIENTES</Text> 

                        <View>
                            <>
                                
                                
                                {/* Estilizar texto de forma não manual */}
                                
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>1/2 cebola ralada</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>1/2 lata de água (usar a medida da lata do milho)</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>1 lata de milho</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>2 dentes de alho</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>4 colheres de azeite</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>8 colher de farinha de trigo</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>farinha de rosca para empanar</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>sal a gosto</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>temperos a gosto</Text></Unorderedlist>


                                <Text style = {[estiloRecipe.txtTitles]}>MODO DE PREPARO</Text>
                                <Text style = {[estiloRecipe.txt]}>1. Leve a cebola e o alho para dourar no azeite..</Text>
                                <Text style = {[estiloRecipe.txt]}>2. Bata o milho e a água no liquidificador e acrescente os temperos e sal.</Text>
                                <Text style = {[estiloRecipe.txt]}>3. Leve a mistura para a panela junto com o alho e a cebola dourados e deixe ferver.</Text>
                                <Text style = {[estiloRecipe.txt]}>4. Acrescente a farinha de trigo e misture até ficar homogêneo..</Text>
                                <Text style = {[estiloRecipe.txt]}>5. Diminua o fogo e mexa a mistura até que a massa desgrude da panela.</Text>
                                <Text style = {[estiloRecipe.txt]}>6. Deixe a mistura esfriar completamente antes de usar.</Text>
                                <Text style = {[estiloRecipe.txt]}>7.Usando uma colher cheia como medida, faça o formato de um nugget com a massa - se preferir, recheie a massa e empane em farinha de trigo.</Text>
                                <Text style = {[estiloRecipe.txt]}>8.Disponha numa assadeira e leve para o forno preaquecido a 180º C por 1 hora ou até que estejam completamente dourados</Text>
                                <Text style = {[estiloRecipe.txt]}>9.Vire na metade do tempo para dourar dos 2 lados por igual ou frite em óleo bem quente.</Text>
                                <Text style = {[estiloRecipe.txt]}>9.Espere esfriar completamente antes de consumir.</Text>
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

                    </View>
                </Modalize>
                    
             </View> 
            <View style={Estilo.BottomColor}></View>
            </SafeAreaView>
    )
}