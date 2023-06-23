//import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState} from 'react';
import { StyleSheet,Text,View,FlatList,ActivityIndicator,TouchableOpacity } from 'react-native';

export default function App(){
    const [isLoading, setLoading] = useState(true);
    const[data,setData]=useState([]);

    const getMovies = async()=>{
        try{
            const response = await fetch('https://www.figma.com/file/YOwunPIhXk82juvegh97Rm/Untitled?node-id=0%3A1&t=cnMV2J6SOW5Rw4b5-1');
            const json =await response .json();
            setData(json.movies);
        } catch(error){
            console.error(error);
        } finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        getMovies();
    },[]);

    const pressHandler=(val)=>{
        alert(val.id+val.title+val.releaseYear)
    }

    return(
        <View style={{flex:1,padding: 24}}>
            
            {isLoading? <ActivityIndicator></ActivityIndicator>:(
                <FlatList
                data={data}
                keyExtractor={({id},index )=>id}
                renderItem={({item})=>(
                    <TouchableOpacity onPress={()=> pressHandler(item)}>
                    <Text style={style.container}>{item.id},{item.title},{item.releaseYear}</Text>
                    </TouchableOpacity>
                )}
                ></FlatList>
            )}
            
        </View>
    );
}

const style =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#22BFB3',
        alignItems:'center',
        justifyContent:'center'
    },
});