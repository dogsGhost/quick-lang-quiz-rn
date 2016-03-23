import React, {
  Component,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';
import getPhrases from './../phrases';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      count: '10', // default number of questions
      lang: 'es', // default language
      quizStarted: false, // check for toggling UI elements
      curListIndex: 0,
      answers: []
    };
  }

  // start a new quiz by simply toggling the view
  _handleNewQuiz() {
    this.setState({ quizStarted: false });
  }

  render() {
    return (
      <View>
        <Text>Translate </Text>
        {
          this.state.quizStarted ?
            <Text>{this.state.count}</Text>:
            <TextInput
              style={{height: 30, borderColor: '#ddd', borderWidth: 2}}
              keyboardType='numeric'
              maxLength={2}
              onChangeText={(count) => this.setState({ count })}
              value={this.state.count}
            />
        }
        <Text> phrases from English to Spanish.
         Do not use character accents.
         Dropped pronouns are optional.
        </Text>
        {
          this.state.quizStarted ?
            <Text>list</Text> :
            <TouchableHighlight>
              <Text>Start</Text>
            </TouchableHighlight>
        }
      </View>
    );
  }
}
