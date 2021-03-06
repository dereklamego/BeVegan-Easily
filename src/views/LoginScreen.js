import React, {useState} from 'react';
import Estilo from '../components/estilo'; 
import FormLogin from '../components/FormLogin';
import GlobalStyles from '../components/GlobalStyles';
import {View, SafeAreaView,Text,TouchableOpacity,Image, ScrollView} from 'react-native';

export default ({navigation}) => {
    

    //o que isso faz?
    const [login,onChangeText] = useState("");

    return(
        // Tag safeareaview não funcionou sem o estilo
        <SafeAreaView style={[Estilo.App, GlobalStyles.AndroidSafeArea]}> 
        <ScrollView style = {[Estilo.heightScroll]} showsVerticalScrollIndicator={false} >

        {/* Padding na area total do app*/}
            <View style={[padding(20)]}>  

                <View style={Estilo.imgView}>
                    <Image source={require('../img/bevegan-logo2.png')}
                    style={Estilo.img} 
                    />
                </View>
                
                {/* Componente do formulario login, feito em arquivo separado */}
                <FormLogin/>
                
                <View style={Estilo.BtnContainer}> 
                {/* Usando o TouchableOpacity no lugar do button, o button nao aceita estilização na stylesheet no android */}
                    <TouchableOpacity onPress={() => navigation.navigate('principal')} style={[Estilo.btnEnter]} title="Entrar">
                        <Text style={Estilo.txtBtnG}>Entrar</Text>
                    </TouchableOpacity>

                    <Text style={[Estilo.txtP,{textDecorationLine: 'underline'}]}> Esqueceu a senha?</Text>
                    
                    
                    <TouchableOpacity onPress={() => navigation.navigate('cadastro')}>
                        <Text style={[Estilo.txtP,{textDecorationLine: 'underline'}] }>Cadastre-se</Text>
                    </TouchableOpacity> 
                </View>  
            </View>
            </ScrollView>
        </SafeAreaView>
    )  
} 

function padding(a, b, c, d) {
    return {
      paddingTop: a,
      paddingRight: b ? b : a,
      paddingBottom: c ? c : a,
      paddingLeft: d ? d : (b ? b : a)
    }
}    