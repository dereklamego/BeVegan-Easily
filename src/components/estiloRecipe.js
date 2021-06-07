import {StyleSheet, Dimensions} from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    
    subtTitles:{
        marginBottom: 10,
        marginTop: 10,
        fontWeight:'bold',
        fontSize: 18,
        paddingLeft:10,
        color:	'#544F1F',
    },

    txt:{
        fontSize: 16,
        // justifyContent: 'center',
        color: '#544F1F',
        // margin: 10,
        textAlign: 'left',
    },

    txtTitles:{
        fontSize: 22,
        fontWeight: "bold",
        color:	'#544F1F',
        marginBottom: 10,
        marginLeft: 10,
        marginTop: 15,
        textAlign: 'center'
    },

    //estilizar 
    txtTopics:{
        fontSize: 16,
        paddingLeft:10,
        color:	'#544F1F',
        margin: 10
    },

    img:{
    maxWidth: '100%',
    width: 'auto',
    height: 220    

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
        // paddingBottom:"100%"
         
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
        height: '82%',
        
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