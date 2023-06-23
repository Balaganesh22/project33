import React,{useState} from "react";
import {StyleSheet,TextInput,View} from 'react-native';

export default function Header(){
    const [name , setName] = useState('Header');

    return(
        <View style={styles.headerstyle}>
            <TextInput style={styles.title} onChangeText={(val)=>setName(val)}></TextInput>
        </View>
    );
}

const styles=StyleSheet.create({
    headerstyle:{
        flex:1,
        backgroundColor:'orange',
        padding:11,
        paddingHorizontal:100,
    },
    title:{
        textAlign:'center',
        color:'white',
        fontSize:30,
        fontWeight:'bold',
    },

});