import React from 'react';
import Estilo from '../components/estilo';
import GlobalStyles from '../components/GlobalStyles';
import { Text, View, TouchableOpacity, SafeAreaView, Image, StyleSheet,ScrollView} from 'react-native'
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';

export default ({navigation}) => {
    return(
        //conteudo da pagina
        <SafeAreaView style={[Estilo.AppPrincipal, GlobalStyles.AndroidSafeArea]}>
            {/*Header da pagina */}
            <View style={[Estilo.HeadColor, {flexDirection:'row'}]}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text  style={[Estilo.txtBack,{textDecorationLine: 'underline'}] }>Voltar</Text>                        
                </TouchableOpacity> 
                <View style={[Estilo.HeadAlign]}>
                        <Text style={[Estilo.TextHead,{textAlign:'center'}]}> Dicas</Text>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={true} contentContainerStyle={styles.contentContainer}>
                <Text style={[Estilo.txtP,{color:'#ffff'}]}>Lorem ipsum dolor sit amet</Text>  
                <Text style={[Estilo.txtP,{color:'#ffff'}]}>1.Maecenas laoreet tempor ipsum et gravida. Quisque et est a odio viverra maximus. Sed condimentum semper sapien, ac ultricies tellus volutpat vitae. Mauris accumsan volutpat mauris, non posuere augue facilisis id. Duis ut erat ut turpis interdum vulputate ac vitae leo. Phasellus urna sapien, tincidunt sit amet sem sit amet, aliquet posuere libero. Nulla at tincidunt metus, vitae laoreet orci. Nunc vitae scelerisque tortor. Integer congue malesuada maximus. Aenean id est vitae nulla euismod lobortis vitae et nibh. Nunc auctor et libero a accumsan. Nulla faucibus quis neque ut mollis.</Text>
                <Text style={[Estilo.txtP,{color:'#ffff'}]}>2.Duis quis ligula eros. Morbi blandit odio mi, quis pretium ligula faucibus vel. Ut et ultrices lorem. Fusce consectetur, mi sed ultricies ultrices, quam magna aliquet felis, id pharetra tellus mi vel tortor. Vestibulum vel vestibulum eros, quis auctor est. Quisque luctus porttitor nunc, eu mollis libero semper vitae. Nulla erat diam, aliquam id justo et, suscipit euismod lacus. In quis dolor arcu. In ut neque urna. Sed placerat, magna at vestibulum scelerisque, diam nisl mattis ligula, sit amet ullamcorper sem velit nec felis. </Text> 
                <Text style={[Estilo.txtP,{color:'#ffff'}]}>3.Vestibulum dictum elementum sapien at maximus. Fusce tincidunt venenatis fermentum. Nulla fermentum, ipsum vel volutpat cursus, diam enim interdum lacus, eget feugiat ligula metus vitae enim. Integer nec nulla tincidunt, dapibus odio nec, rutrum urna. Pellentesque gravida lacus accumsan rhoncus laoreet. Nulla facilisi.</Text> 
                <Text style={[Estilo.txtP,{color:'#ffff'}]}>4.Donec pretium nulla eget dolor eleifend, non vestibulum dui consequat. Vestibulum sit amet nunc id nunc faucibus convallis id quis dolor. Donec vulputate sed ligula sit amet ullamcorper. Cras mi nisi, suscipit vitae ex at, vulputate mattis ipsum. Duis iaculis massa scelerisque rutrum imperdiet. In ex elit, luctus eget sapien molestie, elementum placerat urna. Suspendisse sit amet nisl eget risus ultrices vestibulum vitae ut urna. Aliquam erat volutpat. </Text> 
                <Text style={[Estilo.txtP,{color:'#ffff'}]}>5.Duis non facilisis risus. Aliquam tristique lorem vel neque cursus, dictum volutpat urna suscipit. Donec rutrum nulla non hendrerit ultricies. Vivamus auctor massa erat, in gravida magna lacinia eu. Nunc sagittis quam odio, et suscipit justo blandit eget. Praesent et arcu eu quam ornare pharetra. Nullam vestibulum imperdiet est in fermentum. Donec vitae lectus magna. </Text> 
                {/* Armengue (tem que ser alterado depois) */}
                <Text>sdasdashjdasdhasasdad</Text>
            </ScrollView>
            {/*Footer da pagina */}
           <View style={Estilo.BottomColor}>
                <MaterialCommunityIcons name="heart" size={30} color="white" />
                <Feather name="search" size={30} color="white" />
                <Feather name="user" size={30} color="white" />
           </View>
        </SafeAreaView>
    )
}

{/*Estilização local do Scroll View  */}
const styles = StyleSheet.create({
    contentContainer: {
      paddingVertical: 20,
      marginBottom:20,

    }

  })