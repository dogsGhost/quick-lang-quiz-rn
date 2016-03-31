import React, {
  PropTypes,
  Text,
  View
} from 'react-native';

export default Result = (props) => {
  // set style based on if answer is correct or not
  let itemStyle = props.answer.isCorrect ? styles.correct : styles.incorrect;
  let srcItem = props.answer.srcItem;

  return (
    <View style={[styles.answerItem, itemStyle]}>
        <Text style={[styles.answerLine, styles.answerPhrase]}>
          <Text style={{ fontWeight: 'bold' }}>Phrase {props.index + 1 + ''}:</Text> {srcItem.english}
        </Text>
        <Text style={styles.answerLine}>
          <Text>Your answer</Text>: {props.answer.inputValue}
        </Text>
        {
          !props.answer.isCorrect ?
            <Text style={[styles.answerLine, { fontWeight: 'bold' }]}>
              Correct answer: {srcItem.translation}
            </Text> :
            false
        }
    </View>
  );
};

Result.propTypes = {
  answer: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
};
