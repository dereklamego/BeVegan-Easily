import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    
    //Estilo para textos
    txtG:{
        fontSize: 32,
        textAlign: 'center',
        color: '#544F1F'
    },
    txtM:{
        fontSize: 24,
        textAlign: 'center',
        fontWeight: "bold",
        color: '#544F1F'
    },
    txtP:{
        fontSize: 18,
        fontWeight: "bold",
        color: '#544F1F',
        marginBottom:20,
    },

    //codigo acima duplicado
    txtBack:{
        fontSize: 18,
        fontWeight: "bold",
        color: 'white',
        marginRight:'25%',
        marginBottom: 5,

    },

    //Estilo para botões
    BtnContainer:{
        alignItems:'center'
    },

    btnEnter:{
        marginTop:20, 
        marginBottom:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#544F1F',
        width:"30%",
        height:40,
        borderRadius:5,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    
    btnCadastrar:{
        marginTop:20, 
        marginBottom:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#544F1F',
        width:"35%",
        height:40,
        borderRadius:5,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },

    //codigo acima duplicado
    btnDuvidoso:{
        marginTop:20, 
        marginBottom:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#544F1F',
        width:"70%",
        height:35,
        borderRadius:5,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },

    txtBtnG:{
        fontSize: 24,
        textAlign: 'center',
        color: '#fff'
    },

    //Estilo padrão de telas 
    App:{
        flexGrow: 1,
        backgroundColor: '#75D221',
        justifyContent: 'center',
        color:'#544F1F'
    },

    AppPrincipal:{
        flexGrow: 1,
        backgroundColor: '#75D221',
        color:'#544F1F'
    },

    //Estilo para o logo 
    img:{
        marginBottom:50,
        width: 250, height: 210
    },

    imgView:{
        alignItems:"center",
    },

    //Estilo para form login e de cadastro 
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
    },
    
    //padrão padding para os botões de voltar
    HeadColor: {
       
        padding: 5,
        backgroundColor: "#544F1F",
        // alignItems:'left',
        width: '100%',
         
    }
   
})

