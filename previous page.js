import React from 'react';
import { Text ,View,Button,Image} from 'react-native';

export default function previouspage({navigation}){

	return(
		<View style={{borderWidth:5,borderColor:'black'}}>
			<Text style={{fontSize:20,fontWeight:'bold',color:"black",padding:20,backgroundColor:"#787878"}}>Tripura exit poll result: BJP set to return to power with landslide win</Text>
			<Text style={{fontSize:10,color:'black',padding:20}}>The India Today-Axis My India exit poll predicted that the BJP will likely win 36 to 45 seats in the Tripura Assembly elections.</Text>
			<Image
        source={require("C:/expo project/my-react-app/src/idnia today logo_6.webp")}
        style={{
          height: 20,
          resizeMode: "contain",
          width: 20
        }}
        resizeMethod={"auto"}></Image>
		<Text style={{fontSize:10,color:'black'}}>India Today News Desk
India Today News Desk
Tripura,UPDATED: Feb 27, 2023 19:31 IST</Text>
<Image
        source={require("C:/expo project/my-react-app/src/whatsapp_image_2023-02-27_at_19.01.26-sixteen_nine-_3.avif")}
        style={{
          height: 100,
          resizeMode: "contain",
          width: 100
        }}
        resizeMethod={"auto"}></Image>
        <Text>Tamil Nadu CM M K Stalin releases logo</Text>
        <Image
        style={{height:100,width:100,resizeMode:"contain"}}
        source={{
          uri: 'https://static.toiimg.com/thumb/msid-98421127,imgsize-22944,width-400,resizemode-4/98421127.jpg',
        }}
      />
		<Button
            title="next page..>"
            onPress={()=>navigation.navigate("Next page")}></Button>
		</View>

	);
}