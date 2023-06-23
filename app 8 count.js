import React, {useState} from 'react'
import {View, Text, Button} from 'react-native'

const App = () => {
    let [counter, setCounter] = useState(0)
    return (
        <View>
            <Button title='counter+' onPress={() => {
                if (counter < 100) {
                    setCounter(prev => prev + 1)
                } else {
                    setCounter(0)
                }
            }}/>
            <Button title='counter-' onPress={()=>{
              if(counter>1){
                setCounter(prev=> prev-1)
              } else{
                setCounter(0)
              }
            }}></Button>
            <Text>{counter}</Text>
        </View>
    )
}

export default App;