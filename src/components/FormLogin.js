import React, {useState} from 'react'
import {Text, TextInput,View,StyleSheet} from 'react-native'
import Estilo from './estilo'

export default () => {
    const [login,onChangeText] = useState("");
    return(
        
        <View style={Estilo.Container}>
            
            <TextInput style={Estilo.Input}
             onChangeText={onChangeText}
             value={login}
             placeholder="Login"
            />

            <TextInput
            style={Estilo.Input}
            placeholder="Senha"
            secureTextEntry={true}
            />
        </View>
       
    )
}
      
    
  