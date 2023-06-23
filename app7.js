import React ,{useState} from 'react';
import {View,Text} from 'react-native';
import { globalstyle } from './project1/globalstyle';

export default function App(){
    const [name, setName] = useState(['bala'
    ]);

    return(
        <View style={globalstyle.Container}>
            <Text style={globalstyle.One}>{'one'}</Text>
            <Text style={globalstyle.Two}>{'two'}</Text>
            <Text style={globalstyle.Three}>{'three'}</Text>
        </View>

    );
}