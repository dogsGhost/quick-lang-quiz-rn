import React, {
  PropTypes,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Result from './Result';
import utils from '../utils';

export default ResultsView = (props) => {
  let dataLen = props.answers.length;
  let numCorrect = props.answers.filter(answer => answer.isCorrect).length;
  let percentage = Math.round(numCorrect / dataLen * 100);
  let answerNodes = props.answers.map((answer, index) => {
    return (
      <Result
        answer={answer}
        index={index}
        key={index}
      />
    );
  });

  return (
    <View>
      <Text style={styles.quizScore}>
        You scored {percentage}% ({numCorrect} out of {dataLen})
      </Text>
      <TouchableHighlight
        style={[styles.btn, styles.btnStart]}
        onPress={props.onNewQuiz}
      >
        <Text style={styles.btnText}>NEW QUIZ</Text>
      </TouchableHighlight>
      <View>
        {answerNodes}
      </View>
    </View>
  );
};

ResultsView.propTypes = {
  answers: PropTypes.array.isRequired,
  onNewQuiz: PropTypes.func.isRequired
};
