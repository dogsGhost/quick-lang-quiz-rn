import { StyleSheet } from 'react-native';

const white = '#fff';
const black = '#22313F';
const lightGrey = '#f3f3f3';
const blue = '#9A12B3';

const fontSize = 16;
const em = (num) => fontSize * num;

export default styles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  },

  mainHeading: {
    backgroundColor: black,
    paddingTop: em(2),
    paddingBottom: em(1.25),
    color: white,
    fontSize: em(1.5),
    lineHeight: em(1.5),
    textAlign: 'center'
  },

  mainFooter: {
    fontSize: em(0.8),
    paddingTop: em(2),
    paddingBottom: em(0.5),
    textAlign: 'center'
  },

  btn: {
    backgroundColor: blue,
    borderRadius: em(0.25),
    padding: em(1),
    width: em(7)
  },

  btnText: {
    color: "#fff",
    textAlign: "center"
  },

  progressContainer: {
    flexDirection: 'row',
    justifyContent: "flex-start",
    height: em(0.5)
  },

  progressBar1: {
    backgroundColor: "#e77"
  },

  progressBar2: {
    backgroundColor: "#a1a1a1"
  },
  quizNumber: {},

  quizText: {},

  correct: {
    backgroundColor: "#8ef1b7",
    borderTopColor: "#26A65B"
  },

  incorrect: {
    backgroundColor: "#fad1d0",
    borderTopColor: "#D64541"
  },
});
