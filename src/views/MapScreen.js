import React , {useState,useEffect} from 'react';
import Estilo from '../components/estilo';
import GlobalStyles from '../components/GlobalStyles';
import { Text, View, TouchableOpacity, SafeAreaView,ScrollView,StyleSheet, Dimensions,Image} from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import { Value } from 'react-native-reanimated';
import { render } from 'react-dom';

const windowWidth = Dimensions.get('window').width;
const CARD_WIDTH = windowWidth;

export default ({navigation}) => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [origin, setOrigin] = useState(null);
    

    //Lugares adicionados em um array, possivelmente irá pra um banco de dados
    state ={ 
        places:[
            {
            id:1,
            title: 'Health Valley Barra',
            description: 'Loja e restaurante de produtos naturais',
            latitude:-13.008381269148742, 
            longitude:-38.52953320267205,
            image: require('../img/healthbarra.png')
        },
        {
            id:2,
            title: 'Health Valley Brasil',
            description: 'Restaurante informal em sobreloja que serve opções veganas no self-service.',
            latitude:-12.98402053365111, 
            longitude:-38.51569280593298,
            image: require('../img/healthbrasil.png')
        },
        {
            id:3,
            title: 'Rango Vegan',
            description: 'Restaurante e espaço cultural com cursos variados.',
            latitude:-12.968691600954276,
            longitude: -38.50632326638643,
            image: require('../img/rangovegan.jpg')
        },
        {
            id:4,
            title: 'Restaurante Vegalize',
            description: 'Restaurante e delivery de comida Vegana.',
            latitude: -12.990655695778944, 
            longitude: -38.51183188428948,
            image: require('../img/vegalize.png')
            
        },
        {
            id:5,
            title:'B-Vegan Gastronomia Vegetariana',
            description: 'Lanches, opções de pizzas, sanduíches, sucos e mais, em ambiente descontraído.',
            latitude: -13.008566017668803, 
            longitude: -38.530248955453914,
            image: require('../img/bvegan.png')
        },
        {
            id:6,
            title: 'YêBistrô',
            description:'Restaurante vegano com mobília dos anos 60.',
            latitude:-13.012102068000104, 
            longitude: -38.48511838331778,
            image: require('../img/yebistro.png')
        },
        {
            id:7,
            title: 'Mascavo Vegan',
            description:'Hamburgueria.',
            latitude:-12.965677892191698, 
            longitude: -38.50531515731887,
            image: require('../img/mascavovegan.png')
        },
        {
            id:8,
            title: 'PURO HEALTHY FOOD',
            description:'Opções veganas e vegetarianas, em espaço moderno.',
            latitude:-12.99382319371233,
            longitude: -38.459712276906615,
            image: require('../img/purehealth.png')
        },
        {
            id:9,
            title: 'Capim Rosa Chá ',
            description:'Loja de beleza, cosméticos e cuidados pessoais.',
            latitude:-13.008300759620981,
            longitude: -38.461069528843446,
            image: require('../img/capimrosa.png')
        },
        {
            id:10,
            title: 'Viva o Grão ',
            description:'Loja e lanchonete de produtos naturais.',
            latitude:-12.99472965034069,
            longitude:-38.52413110517079,
            image: require('../img/vivaograo.png')
        }
    ]}

    _mapReady = () => {
        this.state.places[0].mark.showCallout();
    };

    const onMarkerPress = (mapEventData) => {
        const markerID = mapEventData._targetInst.return.key-1;

        let x = markerID * CARD_WIDTH ;

        _scrollView.current.scrollTo({x: x, y: 0, animated: true});
    }
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

    
        const { latitude, longitude,mark } = this.state.places[0];
        const _scrollView = React.useRef(null);
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
                            ref={mark => places.mark = mark}
                            onPress={(e)=>onMarkerPress(e)}
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
                    ref={_scrollView}
                    style={Estilo.placesContainer}
                    horizontal
                    pagingEnabled
                    //Função para mudar a localização de acordo com os cards
                    onMomentumScrollEnd={e => { 
                        const scrolled = e.nativeEvent.contentOffset.x
                        let place = (scrolled >0)? scrolled / Dimensions.get('window').width:-1;

                        const {latitude,longitude,mark} = this.state.places[parseInt(place+1)];
                        
                        this.mapView.animateCamera({
                              center: {
                                latitude,
                                longitude
                              }
                            },
                            1000
                        );

                        setTimeout(() => {
                            mark.showCallout();
                        }, 500)
                    }}
                >
                    {this.state.places.map(places =>(
                    
                        <View key={places.id} style={Estilo.places}>
                            <View>
                                <Image style={EstiloLocal.image} source={places.image}/>
                            </View>
                            <View>
                                <Text style={Estilo.txtM}>{places.title}</Text>
                                <Text style={EstiloLocal.txtPlaces}>{places.description}</Text>
                            </View>
                                
                        </View>
                        

                    ))}
                        
                </ScrollView>
                </View>

                {/*Footer da pagina */}
                <View style={Estilo.BottomColor}></View>
            </SafeAreaView>
        )
    
};

const EstiloLocal = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    image:{
        height: 130,
        width: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    txtPlaces:{
        fontSize: 16,
        color: '#544F1F',
        marginBottom:20,
        paddingLeft:20,
        paddingRight:20,
        textAlign: 'center',
    }
})