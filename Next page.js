import React from "react";
import { Button,View,Text } from "react-native";

export default function nextpage ({navigation}) {
    return(
        <View style={{flex:1,alignItems:"center",justifyContent:"center",padding:50}}>
            <Text style={{flex:2,padding:50,alignItems:"center",justifyContent:"center",fontSize:16}}>The state recorded nearly 88 per cent turnout in the one-day polling, which was “largely peaceful”, a senior election commission official said, reported news agency PTI.

The elections to the 60-member assembly were held across the northeastern state on February 16.

“An average of 87.63 per cent polling was recorded in the assembly elections. The figure excluded the number of postal ballots,” Additional CEO Subhasish Bandhopadhyay told PTI.</Text>
            <Button
            title="<...previous page"
            onPress={()=>navigation.navigate("previous page")}></Button>

        </View>
    );
}