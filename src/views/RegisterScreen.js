import React from 'react' 
import FormRegister from '../components/FormRegister'
import GlobalStyles from './components/GlobalStyles';

export default () =>{
    <SafeAreaView style={[Estilo.App, GlobalStyles.AndroidSafeArea]}>
        <View style={GlobalStyles.padding(20)}>

            <View style={Estilo.imgView}>
            <Image source={require('./img/bevegan-logo.png')}
            style={Estilo.img} 
            />
            </View>

            <FormRegister/>

        <View>  
    </SafeAreaView>
}