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
                        <Text style={[Estilo.TextHead,{textAlign:'center'}]}>Cookie Vegano</Text>
                </View>
            </View>
             <View > 
                

                <ScrollView style = {[estiloRecipe.SView]} showsVerticalScrollIndicator={false}>
                     
                    <Image source={require('../../img/imgRecipe/cookie.jpg')} style={[estiloRecipe.img]}/>
                    
                    <View style={[estiloRecipe.textContainer]}>
                        <Text style = {[estiloRecipe.txtTitles]}>INGREDIENTES</Text> 

                        <View>
                            <>
                                
                                
                                {/* Estilizar texto de forma não manual */}
                                
                                <Unorderedlist><Text style = {[estiloRecipe.txt]} >4 colheres (sopa) de açúcar mascavo</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>2 colheres (sopa) de leite de coco</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>2 colheres (sopa) de óleo de coco</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>1/4 de colher (chá) de essência de baunilha</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>1 pitada de sal</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>8 colheres (sopa) de farinha de trigo</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>1/2 colher (chá) de fermento em pó</Text></Unorderedlist>
                                <Unorderedlist><Text style = {[estiloRecipe.txt]}>Chocolate amargo vegano picado a gosto</Text></Unorderedlist>
                                

                                <Text style = {[estiloRecipe.txtTitles]}>MODO DE PREPARO</Text>
                                <Text style = {[estiloRecipe.txt]}>1. Em uma tigela, misture o açúcar mascavo, o leite de coco, o óleo de coco, a essência de baunilha e o sal.</Text>
                                <Text style = {[estiloRecipe.txt]}>2. Acrescente a farinha de trigo e o fermento, misture bem.</Text>
                                <Text style = {[estiloRecipe.txt]}>3. Por último, adicione o chocolate amargo e misture.</Text>
                                <Text style = {[estiloRecipe.txt]}>4. Molde os cookies e coloque-os em uma forma.</Text>
                                <Text style = {[estiloRecipe.txt]}>5.Deixe na geladeira por 20 minutos</Text>
                                
                                

                            
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