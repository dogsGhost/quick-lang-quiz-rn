import React, { AppRegistry, Component } from 'react-native';
import App from './app/components/App';
import styles from './app/styles/styles';

class SpanishQuiz extends Component {
  render() {
    return React.createElement(App);
  }
}

AppRegistry.registerComponent('SpanishQuiz', () => SpanishQuiz);
