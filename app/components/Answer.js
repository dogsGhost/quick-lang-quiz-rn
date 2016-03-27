import React, {
  Text,
  View
} from 'react-native';

export default Answer = (props) => {
  // set style based on if answer is correct or not
  let itemStyle = props.answer.isCorrect ? styles.correct : styles.incorrect;

  return (
    <View style={[styles.answerItem, itemStyle]}>
        <Text style={[styles.answerLine, styles.answerPhrase]}>
          <Text style={{ fontStyle: 'italic' }}>Phrase {props.index + 1 + ''}:</Text> {props.srcItem.english}
        </Text>
        <Text style={styles.answerLine}>
          <Text style={{ fontStyle: 'normal' }}>Your answer</Text>: {props.answer.inputValue}
        </Text>
        {
          !props.answer.isCorrect ?
            <Text style={[styles.answerLine, { fontWeight: 'bold' }]}>
              Correct answer: {props.srcItem.translation}
            </Text> :
            false
        }
    </View>
  );
};
