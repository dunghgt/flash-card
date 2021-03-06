import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import WordOneSide from './WordOneSide';


class Word extends Component {
  state = {}
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <WordOneSide
          side={'left'}
          text={this.props.item.word}
          status={this.props.item.status}
          screen={this.props.screen}
        />
        <WordOneSide side={'right'} text={this.props.item.mean} />
      </View>
    );
  }
}

export default Word;