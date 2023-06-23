import react,{Component} from 'react';
import { View, Button, TextInput } from 'react-native';

export default class App extends Component
{
    constructor(props)
    {
        super(props);
        this.state={num1:0,num2:0};
    }

    add=()=>
    {
        var N1=parseInt(this.state.num1);
        var N2=parseInt(this.state.num2);

        var R=N1+N2;
        console.log(R);
        alert(R);
    }
    
    render()
    {
        return(
            <View>
                <TextInput style={{borderWidth:1, margin:10}} placeholder="num1" onChangeText={num1=>this.setState({num1})}></TextInput>
                <TextInput style={{borderwidth:1, margin:10}} placeholder="num2" onChangeText={num2=>this.setState({num2})}></TextInput>
                <Button title="add" onPress={this.add}></Button>
            </View>
        );
    }
}
