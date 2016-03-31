import React, {
  PropTypes,
  Text,
  View
} from 'react-native';
import Result from './Result';
import Button from './Button';
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
        <Text style={{ fontWeight: 'bold' }}>You scored {percentage}%</Text> ({numCorrect} out of {dataLen})
      </Text>
      <Button
        clickHandler={props.onNewQuiz}
        btnStyles={styles.btnStart}
      >
        NEW QUIZ
      </Button>
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
