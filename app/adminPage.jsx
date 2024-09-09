import React,{useEffect, useRef} from 'react';
import { Text, View, StyleSheet,Dimensions,Image, TextInput,Pressable } from "react-native";
import Timer from "../components/Timer.jsx"
import Footer from "../components/Footer.jsx"

export default function adminPage() {
    const [timeText, onTimeText] = React.useState(0)
    const [message, onChangeText] = React.useState('Useless Text');
    const [numPeople, onNumPeople] = React.useState(5);
    const [timerStart, changeTimerStart] = React.useState(false)

    let timerRunning = false

    function putPeopleOnScreen(num){
        const list = []
        for (let i=0; i<num;i++) {
            list.push((<Image id={i} source={require('../assets/images/person.png')}></Image>))

        }

        return list
    }




    //helper function 
    function convertNumToTime(timeText){
        //returns a string of correct minutes and seconds
        let mins = Math.floor(timeText/60)
        let secs = timeText % 60
        if (secs < 10 ) {
            secs = "0"+secs 
        }
        

        return String(mins+":"+secs)
    }
    function timerCountDown(){
        changeTimerStart(timerStart?false:true)
    }

    return(
        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/images/octo_1_2.png')}/>
            <Timer TimeAmount={timeText} timerStart ={timerStart}></Timer>
            <View style={styles.control}>
                <View style={styles.topSec}>
                    <Text style={{textAlign:"center"}}>Temporizador</Text>
                    <TextInput
                        onChangeText={onTimeText}
                        value={timeText}
                        style={styles.textBox}
                    />
                    <Pressable style={styles.button} onPress={()=>timerCountDown()}><Text style={styles.textStyle}>Inciar temporizador</Text></Pressable>
                </View>
                <View style={styles.middleSec}>
                    <Text>Mensaje al finalizar el tiempo</Text>
                    <TextInput
                        onChangeText={onChangeText}
                        value={message}
                        style={styles.textBox}
                    />
                </View>    
                <View style={styles.finalsec}>
                    <View style={styles.sideSide}>
                        <Text style={{width: Dimensions.get('window').width/2,flexWrap:"wrap"}}>Numero de usuarios finales conectados al timer</Text>
                        <Text style={{fontSize:30,fontWeight:"bold"}}>5</Text>
                    </View>
                    <View style={styles.sideSide}>
                        {putPeopleOnScreen(numPeople)}
                    </View>
                </View> 
    
            </View>

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
        padding:10,
    },
    image:{
        width:100,
        height:100
    },
    control: {
        backgroundColor:"white",
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        width: Dimensions.get('window').width,
    },
    textBox: {
        borderWidth:2,
        borderRadius:20,
        borderColor:"#702AD3",
        textAlign:"center",
        width:"50%",
        margin:"auto",
        color:"#702AD3",
        fontWeight:"bold",
        fontSize:15


    },
    textStyle:{
        textAlign:"center",
        color:"white",
        fontWeight:"bold",
        fontSize:15

    },
    button:{
        backgroundColor:"#702AD3",
        borderWidth:2,
        borderRadius:20,
        width:"50%",
        margin:"auto",

    },
    topSec:{
        padding:10
    },
    middleSec:{
        alignItems:"center",
        padding:10,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor:"#c9c9c9"

    },
    finalsec:{
        padding:10,
        alignItems:"center",

    },
    sideSide:{
        display: "flex",
        flexDirection: "row",
        justifyContent:  "space-between"
    }

})