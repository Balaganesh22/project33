import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

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
        console.log(val.Name);
        console.log(val.Id);

        alert(val.Name + val.Id,
      
            [
                {
                    text: val.Name + val.Id,
                    onPress: () => console.log('ok'),
                },
                { text: "cancel", onPress: () => console.log('cancel'), }
            ]
        );
    }
    return (
        <View style={Styles.Container}>
            <FlatList
                numColumns={2}
                KeyExtractor={(item) => item.Id}
                data={people}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => pressHandler(item)}>
                        <Text style={Styles.listStyle}>{item.Name} {item.Id}</Text>
                    </TouchableOpacity>
                )}>
            </FlatList>
            <StatusBar style='auto'></StatusBar>

        </View>
    );
}
const Styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'red',
        paddingTop: 40,
        paddingHorizontal: 20
    },
    listStyle: {
        marginTop: 24,
        padding: 30,
        backgroundColor: 'yellow',
        fontSize: 20,
        marginHorizontal: 10
    }

});