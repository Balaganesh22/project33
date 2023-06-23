import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';

export default function App (){
    const [todos, setTodos] = useState([{
        "RollNo":1,
        "Name":'surya',
        "Age":20,
        "Department":'Computer',
    },
    {
        "RollNo":2,
        "Name":'danny',
        "Age":21,
        "Department":'socal',
    },
    {
        "RollNo":3,
        "Name":'viswa',
        "Age":22,
        "Department":'tamil',
    },
    {
        "RollNo":4,
        "Name":'harish',
        "Age":20,
        "Department":'social',
    },
    {
        "RollNo":5,
        "Name":'vanu',
        "Age":22,
        "Department":'english',
    },
    {
        "RollNo":6,
        "Name":'sathish',
        "Age":22,
        "Department":'english',
    },
    {
        "RollNo":7,
        "Name":'jofrin',
        "Age":23,
        "Department":'tamil',
    }
])

const pressHandler=(val)=>{
    console.log(val.Name);

    alert(val.Name)
}
    return(
        <View style={styles.container}>
            <ScrollView>
                {todos.map(todo=>(<View key={setTodos} style={styles.todo}>
                <TouchableOpacity onPress={()=> pressHandler(todo)}>   
                <Text>{todo.RollNo}</Text>
                
                <Text>{todo.Age}</Text>
                <Text>{todo.Department}</Text>
                </TouchableOpacity>
                </View>)
                )}
            </ScrollView>
        </View>
    );
}
 
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'Red',
        alignItems:'center'

    },
    todo: {
        backgroundColor:'red',
        fontSize:50,
        padding:40,
        color:'white',
        borderColor:'green',
        margin:50
    }
});