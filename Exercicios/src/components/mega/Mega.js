import React, {Component} from 'react';
import {Text, TextInput} from 'react-native';

export default class Mega extends Component {
  state = {
    qtdNumbers: this.props.qtdNumbers,
  };
  //   constructor(props) {
  //     super(props);
  //     this.changeQtdNum = this.changeQtdNum.bind(this);
  //   }
  changeQtdNum = (qtd) => {
    this.setState({qtdNumbers: qtd});
  };

  render() {
    return (
      <>
        <Text>Mega-Sena Generator {this.state.qtdNumbers}</Text>
        <TextInput
          keyboardType={'numeric'}
          style={{borderBottomWidth: 1}}
          placeholder="Numbers quantity"
          value={this.state.qtdNumbers}
          onChangeText={this.changeQtdNum}
        />
      </>
    );
  }
}
