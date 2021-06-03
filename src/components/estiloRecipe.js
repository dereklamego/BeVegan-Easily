import {StyleSheet, Dimensions} from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    SView:{
        height: '85%',
        
    },

    txtTitle:{
        fontSize: 22,
        textAlign: 'center',
        fontWeight: "bold",
        color: '#544F1F'
    },

    // mudar essa cor
    txtNormal:{
        fontSize: 18,
        color: '#fff'
    }
    



})