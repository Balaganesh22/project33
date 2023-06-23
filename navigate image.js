import React from "react";
import { Button, View, Image,Text } from "react-native";

export default function imagescreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{flex:1,padding:50,alignItems:"center",justifyContent:"center"}}>finded!</Text>
      <Button
        title="congrats"
        onPress={() => navigation.navigate("context")}
      ></Button>
      <Image
        source={require("C:/expo project/my-react-app/src/Text.png")}
        style={{
          height: 100,
          resizeMode: "contain",
          width: 100
        }}
        resizeMethod={"auto"}
      ></Image>
    </View>
  );
}
