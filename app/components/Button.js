import React, {
  PropTypes,
  Text,
  TouchableHighlight
} from 'react-native';

export default Button = (props) => {
  let btnStyles = props.btnStyles || {};
  let btnTextStyles = props.btnTextStyles || {};

  return (
    <TouchableHighlight
      onPress={() => props.clickHandler()}
      style={[styles.btn, btnStyles]}
      underlayColor={props.activeBtnColor || '#FF7070'}
    >
      <Text style={[styles.btnText, btnTextStyles]}>
        {props.children}
      </Text>
    </TouchableHighlight>
  );
};

Button.propTypes = {
  activeBtnColor: PropTypes.string,
  // option styles object to override button defaults
  // apparently style objects are passed as numbers?
  btnStyles: PropTypes.number,
  btnTextStyles: PropTypes.number,
  children: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired

};
