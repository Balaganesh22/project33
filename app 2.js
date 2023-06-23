import react, { Component } from 'react';
import { View, Button, TextInput } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { num1: '' };
  }
  F1 = () => {
    var N1 = this.state.num1;
    alert(N1);
  }
  render() {
    return (
      <View>
        <TextInput style={{ borderWidth: 1, margin: 10 }} onChangeText={num1 => this.setState({ num1 })}></TextInput>
        <Button title="click me" style={{ margin: 10 }} onPress={this.F1}></Button>
        
      </View>

    );
  }

}
