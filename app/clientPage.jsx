import { Text, View, StyleSheet,Dimensions,Image } from "react-native";
import Timer from "../components/Timer.jsx"
import Footer from "../components/Footer.jsx"

export default function clientPage() {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/images/octo_1_2.png')}/>
            <Timer TimeAmount={"15:00"}></Timer>
            <Text style={styles.text}>Tiempo restante</Text>
            <Footer></Footer>

        </View>
    );

}



const styles = StyleSheet.create({
    container: {
        backgroundColor:"#702AD3",
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        flex:1,
        alignItems:"center",
    },
    image:{
        marginTop:40,
        justifyContent: 'center',
        height: 280,
        width: 280,
    },
    text:{
        color:"white",
        fontSize:20,
        fontWeight:"bold"
    }
  });
  
