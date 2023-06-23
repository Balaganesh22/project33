import React from "react";
import { Button,View,Text } from "react-native";

export default function aboutscreen ({navigation}) {
    return(
        <View style={{flex:2,alignItems:"center",justifyContent:"center"}}>
            <Text style={{flex:1,padding:60,alignItems:"center",justifyContent:"center",backgroundColor:"green"}}>Hello</Text>
            <Button
            title="tap"
            onPress={()=>navigation.navigate("image")}></Button>

        </View>
    );
}