import React, { useState } from "react";
import { FlatList, View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function App() {


    const [people, setPeople] = useState([
        { Name: 'sa', Id: '1' },
        { Name: 'ma', Id: '2' },
        { Name: 'va', Id: '3' },
        { Name: 'tha', Id: '4' },
        { Name: 'he', Id: '5' },
        { Name: 'she', Id: '6' },
        { Name: 'that', Id: '7' },
        { Name: 'me', Id: '8' },
        { Name: 'full', Id: '9' },
    ]);

    const pressHandler = (val) => {

        alert(val.Name + val.Id,
        );
    }
    return (
        <View style={Styles.flatlist}>
            <FlatList
                numColumns={4}
                KeyExtractor={(item) => item.Id}
                data={people}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => pressHandler(item)}>
                        <Text style={Styles.listcolor}>{item.Name} {item.Id}</Text>
                    </TouchableOpacity>
                )}>
            </FlatList>
            

        </View>
    );
}

const Styles=StyleSheet.create({
    flatlist:{
        flex:2,
        borderColor:'#22BFB3',
        borderWidth:10,
        textAlign:'center'
    },
    listcolor:{
        marginTop:20,
        padding:30,
        backgroundColor:'yellow',
        fontSize:30,
        marginHorizontal:30,
    }
});