import React, {useState} from 'react'
import {Text, TextInput,View,StyleSheet} from 'react-native'
import Estilo from './estilo'

export default () => {
    const [login,onChangeText] = useState("");
    return(
        
        <View style={Estilo.Container}>
            <Text style={Estilo.txtM}>Cadastre-se</Text>
            <TextInput style={[Estilo.Input, EstiloLocal.Input]}
             onChangeText={onChangeText}
             value={""}
             placeholder="Nome"
            />

            <TextInput style={[Estilo.Input, EstiloLocal.Input]}
             onChangeText={onChangeText}
             value={""}
             placeholder="Email"
            />

            <TextInput
            style={[Estilo.Input, EstiloLocal.Input]}
            placeholder="Senha"
            secureTextEntry={true}
            />

            <TextInput style={[Estilo.Input, EstiloLocal.Input]}
             onChangeText={onChangeText}
             placeholder="Confirme sua senha"
             secureTextEntry={true}
            />
        </View>
    )


   
}

const EstiloLocal = StyleSheet.create({
    Input:{
        marginBottom: 10,
        marginTop: 15
    }
})