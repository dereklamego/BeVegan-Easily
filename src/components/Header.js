import React from 'react'
import {Text, View, TouchableOpacity} from 'react-native'
import Estilo from './estilo'



export default ({navigation}) => {
    return(
        <View style={[Estilo.HeadColor]}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{flexDirection:'row'}} >
                <Text  style={[Estilo.txtBack] }>Sair</Text>
            </TouchableOpacity> 
        </View>
    )
}