import React, {
  Component,
  PropTypes,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';
import Question from './Question';
import getPhrases from './../phrases';

const activeBtnColor = '#FF7070';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      count: '10', // default number of questions
      lang: 'es', // default language
      quizStarted: false // check for toggling UI elements
    };
    // bind
    this._handleNewQuiz = this._handleNewQuiz.bind(this);
  }

  // start a new quiz by simply toggling the view
  _handleNewQuiz() {
    this.setState({ quizStarted: false });
  }

  render() {
    return (
      <View>
        <View style={styles.instructions}>
          <Text style={styles.p}>Translate </Text>
          {
            this.state.quizStarted ?
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
          this.state.quizStarted ?
            <Question
              questions={getPhrases({
                lang: this.state.lang,
                count: Math.floor(Number(this.state.count)),
                src: this.props.src
              })}
              onNewQuiz={this._handleNewQuiz}
            /> :
            <TouchableHighlight
              onPress={() => this.setState({ quizStarted: true })}
              style={[styles.btn, styles.btnStart]}
              underlayColor={activeBtnColor}
            >
              <Text style={styles.btnText}>START</Text>
            </TouchableHighlight>
        }
      </View>
    );
  }
}

Main.propTypes = {
  src: PropTypes.object.isRequired
};
