import React, { Component, View, TextInput, Text } from 'react-native';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import db from './../db';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Main src={db} />
        <Footer />
      </View>
    );
  }
}
