import React, {useState} from 'react'
import {Text, TextInput,View,StyleSheet} from 'react-native'
import Estilo from './estilo'

export default () => {
    const [login,onChangeText] = useState("");
    return(
        <View style={style.Container}>
            {/* <Text style={Estilo.txtG}>Cadastre-se</Text> */}
            <TextInput style={style.Input} onChangeText={onChangeText} value={login} placeholder="Login"/>

            <TextInput
            style={style.Input}
            placeholder="Senha"
            secureTextEntry={true}
            />
        </View>
       
    )

}
      
const style = StyleSheet.create({

    Container:{
        alignItems:"center"
    },
    Input:{
        fontSize:20,
        marginBottom:40,
        backgroundColor: '#C4C4C4',
        borderRadius: 5,
        padding: 12,
        color: '#00ff00',
        width: "80%",
        color:"#353535",
        fontWeight:"bold",
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    }
  })
    
  