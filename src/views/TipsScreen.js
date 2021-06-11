import React from 'react';
import Estilo from '../components/estilo';
import GlobalStyles from '../components/GlobalStyles';
import { Text, View, TouchableOpacity, SafeAreaView, Image, StyleSheet, ScrollView } from 'react-native'
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';

export default ({ navigation }) => {
    return (
        //conteudo da pagina
        <SafeAreaView style={[Estilo.AppPrincipal, GlobalStyles.AndroidSafeArea]}>
            {/*Header da pagina */}
            <View style={[Estilo.HeadColor, { flexDirection: 'row' }]}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={[Estilo.txtBack, { textDecorationLine: 'underline' }]}>Voltar</Text>
                </TouchableOpacity>
                <View style={[Estilo.HeadAlign]}>
                    <Text style={Estilo.TextHead}> DICAS</Text>
                </View>
            </View>
            <ScrollView style={[Estilo.heightScroll]} showsVerticalScrollIndicator={false} >
                {/* <View style={[EstiloLocal.imgContainer]}> */}
                <Image source={require('../img/groceries.png')} style={[EstiloLocal.img]} />

                <View style={EstiloLocal.titleContainer}>
                    <Text style={EstiloLocal.titlePage}>DICAS IMPORTANTES</Text>
                </View>

                {/* </View> */}
                <View style={[EstiloLocal.textContainer]}>
                    <Text style={[EstiloLocal.firstTitle]}>
                        Um fácil início 
                    </Text>
                    <Text style={[EstiloLocal.txt]}>
                       Não deixe de ver essas importantíssimas dicas que separamos para você e irão te ajudar na mudança de seu estilo de vida:
                    </Text> 

                    <Text style={[EstiloLocal.txtTitle]}>
                        1. PROCURE UM NUTRICIONISTA
                    </Text>

                    <Text style={[EstiloLocal.txt]}>
                        É de extrema importância buscar ajuda de um especialista, pois só ele poderá fazer um plano alimentar vegano apropriado para você!
                    </Text>

                    <Text style={[EstiloLocal.txtTitle]}>
                        2. VOCÊ PRECISARÁ ENCONTRAR NOVAS FONTES DE PROTÉINA
                    </Text>
                    <Text style={[EstiloLocal.txt]}>
                        A carne é uma importante fonte de proteína, por isso, se você estiver pensando em seguir uma dieta vegana, é claro que vai precisar encontrar novas fontes de proteína.
                    </Text>
                    <Text style={[EstiloLocal.txt]}>
                        As proteínas são conhecidas como os blocos de construção da vida.
                        Elas são constituídas de aminoácidos que ajudam no crescimento e reparo das células.
                        Boas fontes de proteína vegana incluem lentilhas, soja natural e quinoa. Você deve tentar incorporar proteína em cada refeição, sempre que possível.
                    </Text>
                    <Text style={[EstiloLocal.txtTitle]}>
                        3. VOCÊ AINDA PODE COMER FORA
                    </Text>
                    <Text style={[EstiloLocal.txt]}>
                        Agora a maioria dos restaurantes tem seus próprios menus ou alternativas veganas, então não há motivos para não comer fora.
                        Também existem restaurantes veganos, então por que não compartilhar sua experiência vegana com amigos e familiares?
                    </Text>
                    <Text style={[EstiloLocal.txtTitle]}>
                        4. COMECE A COZINHAR!
                    </Text>

                    <Text style={[EstiloLocal.txt]}>
                        Infelizmente, a oferta de alimentos veganos ainda está aquém da demanda, e por isso, pode ser mais ou menos difícil se alimentar fora de casa, dependendo do local onde estiver.
                        
                    </Text>

                    <Text style={[EstiloLocal.txt]}>
                        Além disso, a cozinha vegana pode ser muito mais criativa e inventiva, além de muito saudável, se preparada por você.
                    </Text>
                    <Text style={[EstiloLocal.txt]}>
                        Escolha receitas de livros e sugestões online, mas não se prenda às receitas e aprenda a fazer suas adaptações.
                        Provavelmente você não se tornará um chefe aclamado, mas tenho certeza que pensará duas vezes antes de pedir fast food pelo aplicativo.
                    </Text>

                    <Text style={[EstiloLocal.txtTitle]}>
                        5. BUSQUE POR FEIRAS VEGANAS
                        </Text>
                    <Text style={[EstiloLocal.txt]}>
                        ....
                    </Text>
                    <Text style={[EstiloLocal.txt]}>

                    </Text>
                    <Text style={[EstiloLocal.txt]}>

                    </Text>

                    <Text style={[EstiloLocal.subtTitles]}>

                    </Text>

                    <Text style={[EstiloLocal.txt]}>

                    </Text>
                    <Text style={[EstiloLocal.txt]}>

                    </Text>
                    <Text style={[EstiloLocal.txt]}>

                    </Text>


                </View>
            </ScrollView>
            {/*Footer da  pagina */}
            <View style={Estilo.BottomColor}>
                <MaterialCommunityIcons name="heart" size={30} color="white" />
                <Feather name="search" size={30} color="white" />
                <Feather name="user" size={30} color="white" />
            </View>
        </SafeAreaView>
    )
}
/*Estilização local*/
const EstiloLocal = StyleSheet.create({

    txt: {
        fontSize: 16,
        justifyContent: 'center',
        color: '#544F1F',
        margin: 10,
        textAlign: 'left',
    },

    txtTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: '#544F1F',
        marginBottom: 10,
        marginLeft: 10
    },
    firstTitle:{
        fontSize: 22,
        fontWeight: "bold",
        color: '#544F1F',
        marginBottom: 10,
        marginLeft: 10
    },
    // tem que botar a imagem alocada a tela toda de uma forma nao manual
    img: {
        width: '100%',
        height: '20%',
        top: -10
        /*  marginLeft:75,
         marginBottom: 15,
         marginEnd: 50 */

    },

    imgContainer: {
        width: '100%',
        height: '50%',

    },

    textContainer: {
        padding: 20,
        height: "100%",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: 'white',
        marginTop: "-14%",
        paddingVertical: 40,
        paddingBottom: "140%"
    },
    titleContainer: {
        padding: 20,
        color: 'white',
        position: 'absolute',
        marginTop: 50
    },
    titlePage: {
        lineHeight: 70,
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold'
    },
    subtTitles: {
        fontWeight: 'bold',
        fontSize: 18,
        paddingLeft: 10,
        color: '#544F1F',
    }

})