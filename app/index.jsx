import { Text, View,Pressable } from "react-native";
import { StackActions, useRoute } from '@react-navigation/native';
import { Link } from 'expo-router';



export default function Index({navigation}) {

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>

      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Pressable style={{backgroundColor:"#839201"}}><Link push href="/clientPage"><Text>Click Here For Client</Text></Link></Pressable>
      <Pressable style={{backgroundColor:"#FF0000",marginTop:10}}><Link push href="/adminPage"><Text>Click Here For Admin</Text></Link></Pressable>

    </View>
  );
}
