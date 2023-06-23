import React from "react";
import { Button,View,Text } from "react-native";

export default function homescreen ({navigation}) {
    return(
        <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
            <Text style={{flex:2,padding:50,alignItems:"center",justifyContent:"center"}}>hi!</Text>
            <Button
            title="click me"
            onPress={()=>navigation.navigate("about")}></Button>

        </View>
    );
}