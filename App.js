import React from 'react';
import Styles from './styles'
import { Text, View, Image, TouchableHighlight } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.letsGo = this.letsGo.bind(this)
  }

  letsGo() {
    // 
  }


  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.contentContainer}>
          <Image source={require('./assets/logo.png')} />
        </View>
        <View style={Styles.footer}>
          <TouchableHighlight
            style={Styles.button}
            onPress={() => this.letsGo(this.props)}
            underlayColor='#009688'>
            <Text style={[Styles.buttonText]}>Tua Ra!</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
