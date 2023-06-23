import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import {Image} from 'react-native';

export default function App() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);


    // const imageUrl ="https://c.ndtvimg.com/2023-02/snf897og_turkey-relief_625x300_13_February_23.jpg";

    const getArticles = async () => {
        try{
            const response = await fetch('https://test.dev-fsit.com/api/image-list');
            const json =await response .json();
            setData(json.articles);
        }
        catch(error){console.error(error);}
        finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        getArticles();
    }, []);



    return (
        <View style={{ flex: 1, padding: 16,borderWidth:5}}>
            {}
            {isLoading ? <ActivityIndicator></ActivityIndicator> : (
                <FlatList
                horizontal
                    data={data}
                    keyExtractor={({id}, index) => id}
                    renderItem={({ item }) => (
                        <View>
                        <Text style={style.container}>{item.content}</Text>
                        <Image style={style.tinyLogo} source = {{uri:item.urlToImage}}></Image>
                        </View>
                    )}></FlatList>
            )}
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gold',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth:5,
        borderColor:'orange'
    },
    tinyLogo: {
        width: 50,
        height: 50,
      },
})