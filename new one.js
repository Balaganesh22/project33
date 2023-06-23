import React from 'react';
// import Flatlist from './project1/Flatlist';
import { View, Text, Image} from 'react-native';
import { globalstyle } from './project1/globalstyle';
//import Header from './project1/Header';

export default function App() {

  return (
    <View style={globalstyle.Container}>
      {/*<Header></Header>
      //<Flatlist></Flatlist>*/}
      <Image
      source={require('C:/expo project/my-react-app/src/helo.png')}
      style={{height:100,resizeMode:'contain',width:100,backgroundColor:'red'}}
      resizeMethod={'auto'}></Image>

      <Text style={globalstyle.One}>{'one'}</Text>
      <Text style={globalstyle.Two}>{'two'}</Text>
      <Text style={globalstyle.Three}>{'three'}</Text>
    </View>

  );
}