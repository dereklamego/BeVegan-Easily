import React, {useState} from 'react'
import {Text, TextInput,View,StyleSheet} from 'react-native'
import Estilo from './estilo'

export default () => {
    const [login,onChangeText] = useState("");
    return(
        
        <View style={Estilo.Container}>
            <Text style={Estilo.txtM}>Cadastre-se</Text>
            <TextInput style={Estilo.Input}
             onChangeText={onChangeText}
             value={nome}
             placeholder="Nome"
            />

            <TextInput style={Estilo.Input}
             onChangeText={onChangeText}
             value={email}
             placeholder="Email"
            />

            <TextInput
            style={Estilo.Input}
            placeholder="Senha"
            secureTextEntry={true}
            />

            <TextInput style={Estilo.Input}
             onChangeText={onChangeText}
             placeholder="Confirme sua senha"
             secureTextEntry={true}
            />
        </View>
    )
}