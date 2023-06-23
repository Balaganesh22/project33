import {StyleSheet} from 'react-native';

export const globalstyle = StyleSheet.create({
    Container: {
        backgroundColor:'white',
        justifyContent:'space-around',
        alignItems:'center'
    },
    One:{
        flex:1,
        backgroundColor:'red',
        padding:10,
    },
    Two:{
        flex:2,
        backgroundColor:'green',
        padding:20,
    },
    Three:{
        flex:3,
        backgroundColor:'blue',
        padding:30,
    },
});