import React, {
  Text,
  View
} from 'react-native';

const Footer = () => (
  <View>
    <Text style={styles.mainFooter}>{'' + new Date().getFullYear()}</Text>
  </View>
);

export default Footer;
