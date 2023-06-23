import React, { Component } from 'react';
import { View, Button, TextInput } from 'react-native';
import {globalstyle} from './project1/globalstyle';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { Name: '' ,password:'',phno:'',Address:''};
  }
  F1 = () => {
    var N1 = this.state.Name;
    var N2=this.state.password;
    var N3=this.state.phno;
    var N4=this.state.Address;
    alert(N1+N2+N3+N4);
  }
  render() {
    return (
      <View style={globalstyle.Container}>
        <TextInput style={{ borderWidth: 1, margin: 10 }} placeholder="Name" onChangeText={Name=> this.setState({ Name })}></TextInput>
        <TextInput style={{ borderWidth: 1, margin: 10 }} placeholder="Address" onChangeText={Address=> this.setState({ Address })}></TextInput>
        <TextInput style={{ borderWidth: 1, margin: 10 }} placeholder="phno" onChangeText={phno=> this.setState({ phno })}></TextInput>
        <TextInput style={{ borderWidth: 1, margin: 10 }} placeholder="password" onChangeText={password=> this.setState({password })}></TextInput>
        <Button title="Submit" style={{ margin: 10 }} onPress={this.F1}></Button>
      </View>

    );
  }

}
