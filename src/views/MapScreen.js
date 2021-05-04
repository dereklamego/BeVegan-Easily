import React from 'react';
import Estilo from '../components/estilo';
import GlobalStyles from '../components/GlobalStyles';
import { Text, View, TouchableOpacity, SafeAreaView} from 'react-native';
import MapView from 'react-native-maps';

export default ({navigation}) => {
    return(
        //conteudo da pagina
        <SafeAreaView style={[Estilo.AppPrincipal, GlobalStyles.AndroidSafeArea]}>
            {/*Header da pagina */}
            <View style={[Estilo.HeadColor, {flexDirection:'row'}]}>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <Text style={[Estilo.txtBack,{textDecorationLine: 'underline'}] }>Voltar</Text>
                </TouchableOpacity>

                <View style={[Estilo.HeadAlign]}>
                    <Text style={Estilo.TextHead}>Busque aqui</Text>
                </View>
            </View>

            {/* Mapa */}
            <MapView style={Estilo.map}
                     initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                      }}
            >

            </MapView>
            <View style={Estilo.searchMap}>

            </View>

            {/*Footer da pagina */}
            <View style={Estilo.BottomColor}></View>
        </SafeAreaView>
    )
}