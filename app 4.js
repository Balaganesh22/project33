import react,{Component} from 'react';
import { View, Button, TextInput,StyleSheet } from 'react-native';

export default class App extends Component
{
    constructor(props)
    {
        super(props);
        this.state={num1:0,num2:0};
    }

    multi=()=>
    {
        var N1=parseInt(this.state.num1);
        var N2=parseInt(this.state.num2);

        var Result=N1*N2;
        alert(Result);
    }
    add=()=>
    {
        var N1=parseInt(this.state.num1);
        var N2=parseInt(this.state.num2);

        var Result=N1+N2;
        alert(Result);
    }
    sub=()=>
    {
        var N1=parseInt(this.state.num1);
        var N2=parseInt(this.state.num2);

        var Result=N1-N2;
        alert(Result);
    }
    div=()=>
    {
        var N1=parseInt(this.state.num1);
        var N2=parseInt(this.state.num2);

        var Result=N1/N2;
        alert(Result);
    }
    render()
    {
        return(
            <View style= {style.Container}>
                <TextInput style={style.input} placeholder="num1" onChangeText={num1=>this.setState({num1})}></TextInput>
                <TextInput style={style.input} placeholder="num2" onChangeText={num2=>this.setState({num2})}></TextInput>
                <Button title="multi" onPress={this.multi}></Button>
                <Button title="add" onPress={this.add}></Button>
                <Button title="sub" onPress={this.sub}></Button>
                <Button title="div" onPress={this.div}></Button>
            </View>
        );
    }
}

const style = StyleSheet.create({

    Container: {
      flex: 1,
      backgroundColor:'#ECCD0A',
      justifyContent: 'center',
      alignItems: 'center'
    },
    input: {
      borderWidth: 2,
      borderColor: '#777',
      padding: 8,
      margin: 10,
  
    }
    
  });
