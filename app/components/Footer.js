import React, { Text } from 'react-native';

export default Footer = () => (
  <Text style={styles.mainFooter}>{'' + new Date().getFullYear()}</Text>
);
