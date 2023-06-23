import React,{useEffect,useState}from 'react';
import { StyleSheet,View,Text ,FlatList} from 'react-native';

export default function App() {
    const[data,setData]=useState([]);

    const getArticles = async () => {
        try{
            await fetch('https://kuwycredit.in/servlet/rest/ltv/forecast/ltvMakes',{
                method:'post',
                headers:{
                    'Accept':'application/json',
                    'Content-type':'application/json'
                },
                body:JSON.stringify({
                    "year":2020,
                })
            });
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        getArticles();
    }, []);
    
        return(
            <View style={styles.btn}>
                <FlatList
                KeyExtractor={(item) =>item.makeList}
                data={data}
                renderItem={({ item }) => (
                <Text>{item.makeList}</Text>
                )}></FlatList>

            </View>
        );


}
const styles = StyleSheet.create({
    btn: {
        marginTop: 60,
        marginLeft: 30,
        marginRight: 30
    }
})