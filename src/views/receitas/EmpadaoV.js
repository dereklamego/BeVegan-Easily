import React from 'react';
import Estilo from '../../components/estilo';
import GlobalStyles from '../../components/GlobalStyles';
import { Text, View, TouchableOpacity, SafeAreaView, Image, StyleSheet,ScrollView} from 'react-native'
import Unorderedlist from 'react-native-unordered-list';
import estiloRecipe from '../../components/estiloRecipe'

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
                        <Text style={[Estilo.TextHead,{textAlign:'center'}]}>Empadão Vegano</Text>
                </View>
            </View>
            <View >
                
                <Text style = {[estiloRecipe.txtTitle]}>Ingredientes</Text> 

                <ScrollView style = {[estiloRecipe.SView]} showsVerticalScrollIndicator={false}> 
                
                    <View>
                    <>
                <Text style = {[estiloRecipe.txtTitle]}>Recheio</Text>
                
                
                {/* Estilizar texto de forma não manual */}
                
                <Unorderedlist><Text style = {[estiloRecipe.txtNormal]} >240 g de palmito pupunha</Text></Unorderedlist>
                <Unorderedlist><Text style = {[estiloRecipe.txtNormal]}>50 g de vagem bem picadinha</Text></Unorderedlist>
                <Unorderedlist><Text style = {[estiloRecipe.txtNormal]}>1 lata de seleta de legumes</Text></Unorderedlist>
                <Unorderedlist><Text style = {[estiloRecipe.txtNormal]}>50 gramas de azeitona preta fatiada</Text></Unorderedlist>
                <Unorderedlist><Text style = {[estiloRecipe.txtNormal]}>100 g de cebola</Text></Unorderedlist>
                <Unorderedlist><Text style = {[estiloRecipe.txtNormal]}>30 ml de azeite</Text></Unorderedlist>
                <Unorderedlist><Text style = {[estiloRecipe.txtNormal]}>2 g de orégano</Text></Unorderedlist>
                <Unorderedlist><Text style = {[estiloRecipe.txtNormal]}>120 ml de água</Text></Unorderedlist>
                <Unorderedlist><Text style = {[estiloRecipe.txtNormal]}> 1 colher(sopa) de amino de milho</Text></Unorderedlist>
                <Unorderedlist><Text style = {[estiloRecipe.txtNormal]}>sal a gosto</Text></Unorderedlist>
                <Unorderedlist><Text style = {[estiloRecipe.txtNormal]}>pimenta-do-reino a gosto</Text></Unorderedlist>
                
                <Text style = {[estiloRecipe.txtTitle]}>MASSA</Text>

                <Unorderedlist><Text>1 caixinha de grão-de-bico</Text></Unorderedlist>
                <Unorderedlist><Text>20 ml de azeite</Text></Unorderedlist>
                <Unorderedlist><Text>sal a gosto</Text></Unorderedlist>
                <Unorderedlist><Text>3 g de cúrcuma</Text></Unorderedlist>
                <Unorderedlist><Text>150 g de farinha de arroz</Text></Unorderedlist>
                <Unorderedlist><Text>60 ml de água</Text></Unorderedlist>

                <Text style = {[estiloRecipe.txtTitle]}>MODO DE PREPARO</Text>
                <Text>1. Para o recheio, refogue a cebola com azeite</Text>
                <Text>2. Acrescente o palmito, a vagem, a cenoura e o orégano; cozinhe com a água até que fique ao dente. Tempere com sal e pimenta</Text>
                <Text>3. Coloque o amido de milho dissolvido em um pouco de água, mexendo sempre até incorporar no recheio.</Text>
                <Text>4. Acrescente a azeitona e desligue o fogo.</Text>
                <Text>5. No processador, coloque o grão-de-bico, o azeite, sal, água e a cúrcuma; processe para misturar.
                
                
                

                </Text>
                </>
                </View>
                </ScrollView>
                
              
            </View>
            <View style={Estilo.BottomColor}></View>
            </SafeAreaView>
    )
}

