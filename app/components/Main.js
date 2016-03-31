import React, {
  Component,
  Text,
  TextInput,
  View
} from 'react-native';
import Question from './Question';
import Button from './Button';
import getPhrases from './../phrases';
import db from './../db';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      count: '10', // default number of questions
      lang: 'es', // default language

      questions: [] // start with no questions
    };

    // scope our functions to the class
    this._handleNewQuiz = this._handleNewQuiz.bind(this);
    this._handleStartQuiz = this._handleStartQuiz.bind(this);
  }

  // start a new quiz by resetting the state
  _handleNewQuiz() {
    this.setState({ questions: [] });
  }

  _handleStartQuiz() {
    // generate an array of questions for the quiz
    let questions = getPhrases({
      lang: this.state.lang,
      count: Math.floor(Number(this.state.count)),
      src: db
    });
    // set questions to state, triggering start of quiz
    this.setState({ questions });
  }

  render() {
    let len = this.state.questions.length;
    return (
      <View>
        <View style={styles.instructions}>
          <Text style={styles.p}>Translate </Text>
          {
            len ?
              <Text style={styles.p}>{this.state.count}</Text>:
              <TextInput
                keyboardType='numeric'
                maxLength={2}
                onChangeText={(count) => this.setState({ count })}
                style={styles.instructionsCount}
                value={this.state.count}
              />
          }
          <Text style={styles.p}> phrases from English to</Text>
          <Text style={styles.p}>Spanish. Do not use character accents.</Text>
          <Text style={styles.p}>Dropped pronouns are optional.</Text>
        </View>
        {
          len ?
            <Question
              questions={this.state.questions}
              onNewQuiz={this._handleNewQuiz}
            /> :
            <Button
              btnStyles={styles.btnStart}
              clickHandler={this._handleStartQuiz}
            >
              START
            </Button>
        }
      </View>
    );
  }
}
