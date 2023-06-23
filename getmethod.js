import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {
    const [data, setData] = useState([]);

    const getTodos = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const json = await response.json();
            setData(json);
        } catch (error) { console.error(); }
    }
    useEffect(() => {
        getTodos();
    }, []);

    const pressHandler = (val) => {
        alert(val.id + val.title + val.body)
    }

    return (
        <View style={{ flex: 1, padding: 24 }}>
            <FlatList
                data={data}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => pressHandler(item)} >
                        <Text style={style.container}>{item.userId}</Text>
                        <Text style={style.container}>{item.id}</Text>
                        <Text style={style.container}>{item.title}</Text>
                        <Text style={style.container}>{item.body}</Text>
                    </TouchableOpacity>
                )}></FlatList>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gold',
        alignItems: 'center',
        justifyContent: 'center'
    },
})