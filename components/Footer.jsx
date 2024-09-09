//this will control the time for the components
import {View,Text,StyleSheet,Dimensions} from "react-native"

export default function Timer({TimeAmount}){

    return(
        <View style={styles.container}><Text style={styles.footText}>Octotimer</Text></View>
    );
}

const styles = StyleSheet.create({
    container: {
        width:Dimensions.get('window').width,

        position:'absolute',
        bottom:0,
        borderTopColor:"white",

        borderTopWidth:3,


    },

    footText:{
        color:"white",
        fontSize:50,
        fontWeight:"bold",
        textAlign:'center'

    }


})

