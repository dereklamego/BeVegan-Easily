import {StyleSheet, Dimensions} from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    
    txt:{
        fontSize: 16,
        justifyContent: 'center',
        color: '#544F1F',
        margin: 10,
        textAlign: 'left',
    },

    txtTitle:{
        fontSize: 22,
        fontWeight: "bold",
        color:	'#544F1F',
        marginBottom: 10,
        marginLeft: 10
    },

    //estilizar 
    txtTopics:{
        fontSize: 16,
        paddingLeft:10,
        color:	'#544F1F',
        margin: 10
    },

    img:{
        width: '100%',
        height: '20%',
        top:-10

    },

    imgContainer:{
        width:'100%',
        height:'50%',

    },

    textContainer:{
        padding:20,
        height:"100%",
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        backgroundColor: 'white',
        marginTop:"-14%",
        paddingVertical:40,
        paddingBottom:"140%"
         
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
      },
      video: {
        alignSelf: 'center',
        width: 320,
        height: 200,
      },
      buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },

    SView:{
        height: '80%',
        
    },

    txtTitle:{
        fontSize: 22,
        textAlign: 'center',
        fontWeight: "bold",
        color: '#544F1F',
        marginBottom: 15,
        marginTop: 15
    },

    // mudar essa cor
    txtNormal:{
        fontSize: 18,
        color: '#544F1F',
        marginBottom: 5,
        marginLeft: 5
        
    }
    



})