import React, {
  AppRegistry,
  Component,
  Image,
  Text,
  View
} from 'react-native';
import App from './app/components/App';
// import styles from './app/styles/main';

const C = React.createElement;

class SpanishQuiz extends Component {
  render() {
    return C(App);
  }
}

AppRegistry.registerComponent('SpanishQuiz', () => SpanishQuiz);
