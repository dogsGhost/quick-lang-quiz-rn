import React, {
  Component,
  PropTypes,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';
import ResultsView from './ResultsView';
import utils from '../utils';

const activeBtnColor = '#FF7070';

export default class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curIndex: 0,
      answers: [],
      curAnswer: ''
    };
  }

  // show the next phrase
  _handleSubmit() {
    let inputValue = utils.clean(this.state.curAnswer);
    let correctAnswer = this.props.questions[this.state.curIndex].translation;

    // store the user's input
    if (inputValue) {
      // Check for exact match
      let isCorrect = inputValue === correctAnswer ? true : false;
      // Check for dropped pronoun
      if (!isCorrect) {
        correctAnswer = correctAnswer.split(' ').slice(1).join(' ');
        isCorrect = inputValue === correctAnswer ? true : false;
      }

      let answerObj = {
        inputValue,
        isCorrect,
        srcItem: this.props.questions[this.state.curIndex]
      };
      // we will update answer array clear input field
      let newState = {
        answers: this.state.answers.concat([answerObj]),
        curAnswer: ''
      };
      // also move to next question if it wasn't the last one
      if (this.state.curIndex < this.props.questions.length) {
        newState.curIndex = this.state.curIndex + 1;
      }

      // save values
      this.setState(newState);
    }
  }

  render() {
    let i = this.state.curIndex;
    let data = this.props.questions;
    let dataLen = data.length;
    let progressWidth1 = { flex: i / dataLen };
    let progressWidth2 = { flex: 1 - progressWidth1.flex };

    // If the last question has been answered.
    if (i === dataLen) {
      return (
        <ResultsView
          answers={this.state.answers}
          onNewQuiz={this.props.onNewQuiz}
        />
      );
    }

    return (
    <View>
      <View style={styles.progressContainer}>
        <View style={[styles.progressBar1, progressWidth1]}></View>
        <View style={[styles.progressBar2, progressWidth2]}></View>
      </View>
      <View style={styles.quizContainer}>
        <Text style={styles.quizNumber}>
          {this.state.curIndex + 1 + ''}
        </Text>
        <Text style={styles.quizText}>
          {utils.capitalize(data[i].english)}.
        </Text>
        <TextInput
          onChangeText={(curAnswer) => this.setState({ curAnswer })}
          style={styles.quizInput}
          value={this.state.curAnswer}
        />
        <TouchableHighlight
          onPress={() => this._handleSubmit()}
          style={styles.btn}
          underlayColor={activeBtnColor}
        >
          <Text style={styles.btnText}>
            {i === dataLen - 1 ? 'DONE' : 'NEXT'}
          </Text>
        </TouchableHighlight>
      </View>
    </View>
    );
  }
}

Question.propTypes = {
  onNewQuiz: PropTypes.func.isRequired,
  questions: PropTypes.array.isRequired
};
