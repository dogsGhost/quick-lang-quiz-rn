import React, {
  AppRegistry,
  Component,
  Image,
  Text,
  View
} from 'react-native';
import App from './app/components/App';
import styles from './app/styles/styles';

class SpanishQuiz extends Component {
  render() {
    return React.createElement(App);
  }
}


AppRegistry.registerComponent('SpanishQuiz', () => SpanishQuiz);
