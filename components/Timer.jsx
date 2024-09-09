//this will control the time for the components
import {View,Text,StyleSheet} from "react-native"
import React, {useEffect, useRef} from 'react';


//helper function 
function convertNumToTime(timeText){
    if (timeText<0){
        return "0:00"
    }
    //returns a string of correct minutes and seconds
    let mins = Math.floor(timeText/60)
    let secs = timeText % 60
    if (secs < 10 ) {
        secs = "0"+secs 
    }
    


    return String(mins+":"+secs)
}

export default function Timer({TimeAmount,timerStart}){
    const [timeText,onTimeText] = React.useState(TimeAmount)

    useEffect(()=>{
        onTimeText(TimeAmount)
        
    },[TimeAmount])


    useInterval(() => {
        if (timerStart){
            onTimeText(timeText-1);
        }
    }, 1000);

    
    return(
        <View style={styles.TimeContainer}><Text style={styles.TimeText}>{timeText?convertNumToTime(timeText):convertNumToTime(TimeAmount)}</Text></View>
    );
}
function useInterval(callback, delay) {
    const savedCallback = useRef();
  
    // Remember the latest function.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }
const styles = StyleSheet.create({
 

    TimeText:{
        color:"white",
        fontSize:80,
        fontWeight:"bold"
    }


})

