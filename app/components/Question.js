import React, {
  Component,
  PropTypes,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';
import Answer from './Answer';
import utils from '../utils';

const PERCENT_MULTIPLE = 100;
const activeBtnColor = '#FF7070';

// Calculate how many of the answer are correct.
const getNumCorrect = (arr) => {
  return arr.filter(answer => answer.isCorrect).length;
};

export default class Question extends Component {
  constructor() {
    super();
    this.state = {
      curIndex: 0,
      answers: [],
      curAnswer: ''
    };
  }

  // show the next phrase
  _handleSubmit() {
    console.log('Component | Question | _handleSubmit');
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

      let answerObj = { inputValue, isCorrect };
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
    let progressWidth1 = {
      flex: i / dataLen
    };
    let progressWidth2 = {
      flex: 1 - progressWidth1.flex
    };

    // If the last question has been answered.
    if (i === dataLen) {
      let numCorrect = getNumCorrect(this.state.answers);
      let percentage = Math.round(numCorrect / dataLen * PERCENT_MULTIPLE);
      let answerNodes = this.state.answers.map((answer, index) => {
        let item = data[index];
        return (
          <Answer key={index} answer={answer} srcItem={item} index={index} />
        );
      });

      return (
        <View>
          <Text style={styles.quizScore}>
            You scored {percentage}% ({numCorrect} out of {dataLen})
          </Text>
          <TouchableHighlight
            style={[styles.btn, styles.btnStart]}
            onPress={this.props.onNewQuiz}
          >
            <Text style={styles.btnText}>NEW QUIZ</Text>
          </TouchableHighlight>
          <View>
            {answerNodes}
          </View>
        </View>
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
          {utils.capitalize(data[this.state.curIndex].english)}.
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
  questions: PropTypes.array.isRequired,
  onNewQuiz: PropTypes.func.isRequired
};
