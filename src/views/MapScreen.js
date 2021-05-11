import React , {useState,useEffect} from 'react';
import Estilo from '../components/estilo';
import GlobalStyles from '../components/GlobalStyles';
import { Text, View, TouchableOpacity, SafeAreaView,ScrollView,StyleSheet, Dimensions} from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import { Value } from 'react-native-reanimated';
import { render } from 'react-dom';


export default ({navigation}) => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [origin, setOrigin] = useState(null);
    

    //Lugares adicionados em um array, possivelmente irá pra um banco de dados
    state ={ 
        places:[
        {
            id:1,
            title: 'Health Valley Brasil',
            description: 'Restaurante informal do dia a dia em sobreloja que serve opções vegetarianas tradicionais no self-service.',
            latitude:-12.98402053365111, 
            longitude:-38.51569280593298
        },
        {
            id:2,
            title: 'Health Valley Barra',
            description: 'Loja de produtos naturais',
            latitude:-13.008381269148742, 
            longitude:-38.52953320267205
        },
        {
            id:3,
            title: 'Rango Vegan',
            description: 'Restaurante vegetariano de farto buffet de saladas e pratos quentes e espaço cultural com cursos variados.',
            latitude:-12.968691600954276,
            longitude: -38.50632326638643
        },
        {
            id:4,
            title: 'Restaurante Vegalize',
            description: 'Delivery de comida Vegana.',
            latitude: -12.990655695778944, 
            longitude: -38.51183188428948
            
        },
        {
            id:5,
            title:'B-Vegan Gastronomia Vegetariana',
            description: 'Lanches sem ingredientes animais, com opções de pizzas, sanduíches, sucos e mais, em ambiente descontraído.',
            latitude: -13.008566017668803, 
            longitude: -38.530248955453914
        },
        {
            id:6,
            title: 'YêBistrô',
            description:'Restaurante vegano com mobília dos anos 60.',
            latitude:-13.012102068000104, 
            longitude: -38.48511838331778
        }
    ]}

    _mapReady = () => {
        this.state.places[0].mark.showCallout();
    };
 // Função para pegar localização do usuario 
  useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
            setLocation(location);
            setOrigin({
                latitude: location.coords.latitude, 
                longitude: location.coords.longitude,
                latitudeDelta: 0.00922,
                longitudeDelta: 0.00421,
            })
        })();
  }, []);

        const { latitude, longitude } = this.state.places[0];

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
                <View style={EstiloLocal.container}>
                <MapView style={Estilo.map}
                        ref={map => this.mapView = map}
                        initialRegion={origin}
                        showsUserLocation={true}
                        showsPointsOfInterest={false}
                        showsBuildings={false}
                        customMapStyle={[{
                                        "featureType": "poi.business",
                                        "stylers": [{
                                            "visibility": "off"
                                        }
                                        ]},

                                        {
                                        "featureType": "poi.park",
                                        "elementType": "labels.text",
                                        "stylers": [{
                                            "visibility": "off"
                                        }]
                                        }
                                    ]}
                >
                    {this.state.places.map(places =>(
                        <MapView.Marker
                            // ref={mark => places.mark = mark}
                            title={places.title}
                            description={places.description}
                            key={places.id}
                            coordinate={{
                                latitude:places.latitude, 
                                longitude:places.longitude
                            }}
                            image={require('../img/leaf.png')}
                        />
                    ))}
                    
                </MapView>
                
                {/* Scroll dos lugares no mapa */}
                <ScrollView 
                    style={Estilo.placesContainer}
                    horizontal
                    pagingEnabled

                    onMomentumScrollEnd={e => {
                        //CODIGO DO GITHUB DA ROCKESEAT
                        // const place = (e.nativeEvent.contentOffset.x > 0)
                        // ? e.nativeEvent.contentOffset.x / Dimensions.get('window').width
                        // :0;

                        // const { latitude, longitude, mark } = this.state.places[place];

                        // this.mapView.animateToCoordinate({
                        // latitude,
                        // longitude
                        // }, 500);

                        // setTimeout(() => {
                        // mark.showCallout();
                        // }, 500)
                       // }}

                       //MEU CODIGO PARA MUDAR DE LOCAL
                        // const scrolled = e.nativeEvent.contentOffset.x
                        // let placeScroll= null;
                        // let placeDefined = null;
                        // if(scrolled<0){
                        //     placeScroll = scrolled /Dimensions.get('window').width;
                        //     let {latitude,longitude} = placeScroll;
                        //     console.warn(placeScroll);
                        // }else{
                        //     placeDefined = this.state.places.[1];
                        //     let {latitude,longitude} = placeDefined;
                        //     console.warn('n entrou')
                        // }

                        //CODIGO DO VIDEO DA ROCKESEAT 
                        const scrolled = e.nativeEvent.contentOffset.x
                        const place = (scrolled >0)? scrolled / Dimensions.get('window').width:0;
                        
                        const {latitude,longitude} = state.places.[place];
                        
                        this.mapView.animateToCoordinate({
                            latitude,
                            longitude,
                        })
                    }}
                >
                    {this.state.places.map(places =>(
                        <View key={places.id} style={Estilo.places}>
                            <Text>{places.title}</Text>
                            <Text>{places.description}</Text>
                        </View>
                        

                    ))}
                        
                </ScrollView>
                </View>

                {/*Footer da pagina */}
                <View style={Estilo.BottomColor}></View>
            </SafeAreaView>
        )
}

const EstiloLocal = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    }
})