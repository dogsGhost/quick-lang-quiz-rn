import React, {
  Text,
  View
} from 'react-native';

export default Answer = (props) => {
  // set style based on if answer is correct or not
  let itemStyle = props.answer.isCorrect ? styles.correct : styles.incorrect;

  return (
    <View style={[styles.answerItem, itemStyle]}>
        <Text style={styles.answerLine}>
          Phrase {props.index + 1 + ''}: {props.srcItem.english}
        </Text>
        <Text style={styles.answerLine}>
          You answered: {props.answer.inputValue}
        </Text>
        {
          !props.answer.isCorrect ?
            <Text style={styles.answerLine}>
              Correct answer: {props.srcItem.translation}
            </Text> :
            false
        }
    </View>
  );
};
