import React, {Component} from 'react';
import {Text, TextInput} from 'react-native';

export default class Mega extends Component {
  state = {
    qtdNumbers: this.props.qtdNumbers,
  };

  changeQtdNum(qtd) {
    this.setState({qtdNumbers: qtd});
  }

  render() {
    return (
      <>
        <Text>Mega-Sena Generator {this.state.qtdNumbers}</Text>
        <TextInput
          placeholder="Numbers quantity"
          value={this.state.qtdNumbers}
          onChangeText={(qtd) => this.changeQtdNum(qtd)}
        />
      </>
    );
  }
}
