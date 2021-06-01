import React , {useState,useEffect,useRef} from 'react';
import { Text, View, TouchableOpacity, SafeAreaView,ScrollView,StyleSheet, Dimensions,Image} from 'react-native';
import Estilo from '../components/estilo';
import GlobalStyles from '../components/GlobalStyles';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import {Modalize} from 'react-native-modalize'
import { Feather, MaterialCommunityIcons, Entypo} from '@expo/vector-icons';
import { Linking } from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const CARD_WIDTH = windowWidth;

export default ({navigation}) => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [origin, setOrigin] = useState(null);

    const modalizeRef = useRef(null);
    let cardId=null;
    let modalList =[];
    //Lugares adicionados em um array
    state ={ 
        places:[
            {
            id:1,
            title: 'Health Valley Barra',
            description: 'Loja e restaurante de produtos naturais.',
            latitude:-13.008381269148742, 
            longitude:-38.52953320267205,
            image: require('../img/healthbarra.png'),

            info: 'Loja, restaurante e lanchonete de produtos naturais, vegetarianos e veganos.',
            hour:'Segunda à sexta das 8:30 - 17:30 |\n Sábado das 08:30 - 15:00',
            address:'R. Afonso Celso, 287 - Barra, Salvador - BA, 40150-480',
            socialMedia:'@healthvalleybrasil',
            mediaUrl:'https://www.instagram.com/healthvalleybrasil/',
            tel:'(71) 99688-6465',

        },
        {
            id:2,
            title: 'Health Valley Brasil',
            description: 'Restaurante informal em sobreloja que serve opções veganas no self-service.',
            latitude:-12.98402053365111, 
            longitude:-38.51569280593298,
            image: require('../img/healthbrasil.png'),

            info: 'Restaurante do dia a dia em sobreloja que serve opções veganas tradicionais no self-service.',
            hour:'Segunda à sexta das 9:00 - 17:00 |\n Sábado das 09:00 - 15:00',
            address:'R. Direita da Piedade, 17 - Piedade, Salvador - BA, 40070-190',
            socialMedia:'@healthvalleybrasil',
            mediaUrl:'https://www.instagram.com/healthvalleybrasil/',
            tel:'(71) 99628-2062',
        },
        {
            id:3,
            title: 'Rango Vegan',
            description: 'Restaurante e espaço cultural com cursos variados.',
            latitude:-12.968691600954276,
            longitude: -38.50632326638643,
            image: require('../img/rangovegan.jpg'),

            info: 'Restaurante vegetariano de farto buffet de saladas e pratos quentes e espaço cultural com cursos variados.',
            hour:'Terça à sexta das 12:00 - 15:00 |\n Sábado das 12:00 - 21:00 (Delivery: seg. à sáb.)',
            address:'R. do Passo, nº 62 - Santo Antonio, Salvador - BA, 40301-408',
            socialMedia:'@rangovegan.ssa',
            mediaUrl:'https://www.instagram.com/rangovegan.ssa/',
            tel:'(71) 3488-2756',
        },
        {
            id:4,
            title: 'Restaurante Vegalize',
            description: 'Restaurante e delivery de comida Vegana.',
            latitude: -12.990655695778944, 
            longitude: -38.51183188428948,
            image: require('../img/vegalize.png'),

            info: 'Restaurante Vegalize - Delivery de comida Vegana.',
            hour:'Quarta à segunda das 11:00 - 14:30',
            address:'Garcia, Salvador - BA, 40301-155',
            socialMedia:'@vega.lize',
            mediaUrl:'https://www.instagram.com/vega.lize/',
            tel:'(71) 99999-5063',
        },
        {
            id:5,
            title:'B-Vegan Gastronomia Vegetariana',
            description: 'Lanches, opções de pizzas, sanduíches, sucos e mais, em ambiente descontraído.',
            latitude: -13.008566017668803, 
            longitude: -38.530248955453914,
            image: require('../img/bvegan.png'),

            info: 'Lanches sem ingredientes animais, com opções de pizzas, sanduíches, sucos e mais, em ambiente descontraído.',
            hour:'Terça à domingo das 15:00 - 21:30',
            address:'R. Dias d'+"'"+'Ávila, 109 - Barra, Salvador - BA, 40140-270',
            socialMedia:'@bvegan.gastronomia',
            mediaUrl:'https://www.instagram.com/bvegan.gastronomia/',
            tel:'(71) 99681-9703',
        },
        {
            id:6,
            title: 'YêBistrô',
            description:'Restaurante vegano com mobília dos anos 60.',
            latitude:-13.012102068000104, 
            longitude: -38.48511838331778,
            image: require('../img/yebistro.png'),

            info: 'Restaurante caseiro de opções veganas chamativas e inovadoras, em ambiente acolhedor com mobília dos anos 60.',
            hour:'Segunda à sábado das 12:00 - 16:00',
            address:'Rua Oswaldo Cruz, 308 - Rio Vermelho, Salvador - BA, 41940-000',
            socialMedia:'@yebistro',
            mediaUrl:'https://www.instagram.com/yebistro/',
            tel:'(71) 99382-4629',
        },
        {
            id:7,
            title: 'Mascavo Vegan',
            description:'Hamburgueria.',
            latitude:-12.965677892191698, 
            longitude: -38.50531515731887,
            image: require('../img/mascavovegan.png'),

            info: 'Hamburgueria Vegana, e delivery.',
            hour:'Terça à domingo das 17:00 - 21:00',
            address:'R. Direita de Santo Antônio, 71 - Casa 7, Salvador - BA, 40301-280',
            socialMedia:'@mascavovegan',
            mediaUrl:'https://www.instagram.com/mascavovegan/',
            tel:'(71) 98816-6606',
        },
        {
            id:8,
            title: 'PURO HEALTHY FOOD',
            description:'Opções veganas e vegetarianas, em espaço moderno.',
            latitude:-12.99382319371233,
            longitude: -38.459712276906615,
            image: require('../img/purehealth.png'),

            info: 'Massas, grelhados e destaque aos pratos ricos em legumes, opções veganas e vegetarianas, em espaço moderno.',
            hour:'Segunda à domingo das 8:00 - 21:00',
            address:'Rua das Hortênsias, 522 - Praça Ana Lúcia Magalhães - Pituba, Salvador - BA, 41810-010',
            socialMedia:'@purosaudavel',
            mediaUrl:'https://www.instagram.com/purosaudavel/',
            tel:'(71) 3015-0579',
        },
        {
            id:9,
            title: 'Três Cravos',
            description:'Loja de beleza, cosméticos e cuidados pessoais.',
            latitude:-13.008300759620981,
            longitude: -38.461069528843446,
            image: require('../img/capimrosa.png'),

            info: 'Cosmético natural, orgânico e vegano. Aromaterapia e Estética',
            hour:'Segunda à sábado das 9:00 - 18:00',
            address:'Av. Octávio Mangabeira, 815 - loja 23 - Pituba, Salvador - BA, 41900-381',
            socialMedia:'@trescravos',
            mediaUrl:'https://www.instagram.com/trescravos/',
            tel:'(71) 99950-8215',
        },
        {
            id:10,
            title: 'Viva o Grão ',
            description:'Loja e lanchonete de produtos naturais.',
            latitude:-12.99472965034069,
            longitude:-38.52413110517079,
            image: require('../img/vivaograo.png'),

            info: 'Loja de produtos naturais',
            hour:'Segunda à sexta das 8:00 - 19:30 | Sábado das 8:00 - 15:00',
            address:'Av. Sete de Setembro, 2604 - Corredor da Vitória, Salvador - BA, 40080-002',
            socialMedia:'@vivaograo',
            mediaUrl:'https://www.instagram.com/vivaograo/',
            tel:'(71) 3014-2334',
        }
    ]}

    _mapReady = () => {
        this.state.places[0].mark.showCallout();
    };

    //variaveis para mudança de informações no modal
    const [tituloModal,setTitulo] = useState(null)
    const [imageModal,setImage] = useState(null)
    const [infoModal,setInfo] = useState(null)
    const [hourModal,setHour] = useState(null)
    const [addressModal,setAddress] = useState(null)
    const [socialModal,setSocial] = useState(null)
    const [mediaUrl,setMediaUrl] = useState(null)
    const [telModal,setTel] = useState(null)
    let placeModal;
    onOpen = (param)=>{
        placeModal = this.state.places[param-1];
        setTitulo(placeModal.title)
        setImage(placeModal.image)
        setInfo(placeModal.info)
        setHour(placeModal.hour)
        setAddress(placeModal.address)
        setSocial(placeModal.socialMedia)
        setMediaUrl(placeModal.mediaUrl)
        setTel(placeModal.tel)
        modalizeRef.current?.open()
    }

    //FUnção para mudar visualização do marcador ao dar scroll nos locais
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
                    style={[Estilo.placesContainer]}
                    ref={_scrollView}
                    horizontal
                    pagingEnabled
                    //Função para mudar a localização de acordo com os cards
                    onMomentumScrollEnd={e => { 
                        const scrolled = e.nativeEvent.contentOffset.x
                        let place = (scrolled >0)? scrolled / Dimensions.get('window').width:-1;
                        let {latitude,longitude,mark} = this.state.places[parseInt(place+1)];
                        this.mapView.animateCamera({
                                center: {
                                    latitude,
                                    longitude
                                }, 
                            },
                        
                            500
                        );

                        // mark.showCallout();  
                        // setTimeout(() => {
                            try{
                                mark.showCallout()
                            }catch(err){
                                mark = this.state.places[parseInt(place+1)].mark
                                
                            }
                              
                        // }, 600)
                    }}
                > 
                    {this.state.places.map(places =>(
                        <View 
                            key={places.id} 
                            style={[Estilo.places]} 
                        >
                            <View>  
                                <Image style={EstiloLocal.image} source={places.image}/>
                            </View>
                            <View >
                                <Text style={Estilo.txtM}>{places.title}</Text>
                                <Text style={EstiloLocal.txtPlaces}>
                                    {places.description} {'\n'}
                                </Text>
                                <TouchableOpacity style={EstiloLocal.grabber} onPress={()=>this.onOpen(places.id)}>
                                    <Text style={EstiloLocal.titleDescription}>Detalhes</Text>
                                </TouchableOpacity>
                            </View>                   
                        </View>
                    ))}  
                </ScrollView>

                {/* MODAL */}
                <Modalize
                    ref={modalizeRef}
                    snapPoint={500}
                    modalHeight={500}
                > 
                    <View 
                        style={{ 
                            height:500,
                        }}>
                            <Image style={EstiloLocal.image} source={imageModal}/>
                            <Text style={EstiloLocal.titleModal}>{tituloModal}</Text>
                            {/* <Text style={EstiloLocal.txtInfo}>{infoModal}</Text> */}

                            {/* <View style={EstiloLocal.line}/> */}
                            <View style={EstiloLocal.txtModalContainer}>
                                 <MaterialCommunityIcons name="store-outline" style={EstiloLocal.icon} />
                                 <Text style={EstiloLocal.txtModal}>
                                    {infoModal}
                                </Text> 
                            </View>   

                            
                                <View style={EstiloLocal.txtModalContainer}>
                                    <MaterialCommunityIcons name="clock-time-three-outline" style={EstiloLocal.icon} />
                                    <Text style={EstiloLocal.txtModal}>
                                        {hourModal}
                                    </Text> 
                                </View>

                                <View style={EstiloLocal.txtModalContainer}>
                                    <Entypo name="location" style={EstiloLocal.icon}  /> 
                                    <Text style={EstiloLocal.txtModal}>
                                        {addressModal}
                                    </Text> 
                                </View>    
                                <View style={EstiloLocal.txtModalContainer}>

                                    <MaterialCommunityIcons name="instagram"  style={EstiloLocal.icon}/>
                                    <Text style={EstiloLocal.txtLink} onPress={() => Linking.openURL(mediaUrl)}>
                                        {socialModal}
                                    </Text> 
                                </View>  
                                <View style={EstiloLocal.txtModalContainer}>
                                    <Feather name="phone" style={EstiloLocal.icon}/>
                                    <Text style={EstiloLocal.txtModal}>
                                        {telModal}
                                    </Text> 
                                </View>    
                           
                    </View> 
                </Modalize>
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
        paddingLeft:20,
        paddingRight:20,
        textAlign: 'center',
    },
    titleDescription:{
        fontWeight:'bold',
        color: '#544F1F',
        padding:10
    },
    txtInfo:{
        padding:10,
        textAlign:'center',
        color: '#544F1F',
        fontSize:16,
        fontWeight:'bold'
    },
    grabber:{
        marginTop:-10,
        zIndex:1,
        alignSelf: 'center',
        width:85,
        height:35,
        borderRadius:5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'orange',
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    modalContainer:{
        position: 'relative',
        width: 600,
        height: 300,
        paddingBottom:200,
        backgroundColor:'white'
    },
    txtModal:{
        flex: 1, 
        flexWrap: 'wrap',
        fontSize: 16,
        color: '#544F1F',
    },
    txtModalContainer:{
        alignItems:'center',
        alignSelf:'center',
        width:'90%',
        flexDirection:'row',
        marginRight:10,
        marginTop:'3%'
    },
    titleModal:{
        textAlign: 'center',
        fontSize: 24,
        color: '#544F1F',
        fontWeight:'bold',
    },
    icon:{
        color:'#75D221',
        marginRight:15,
        fontSize:46,
       
    },
    txtLink:{
        fontSize: 16,
        color: '#544F1F',
        textDecorationLine:'underline'
    }
})
