import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Link } from 'react-router-native';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: theme.colors.appBarBackground
  },
  text: {
    color: theme.colors.appBarText,
    fontSize: theme.fontSizes.appBar,
    fontWeight: theme.fontWeights.bold
  }
  // ...
});

const AppBarTab = ({ tabText, route }) => {
  return <Pressable>
    <View style={styles.container}>
      <Link to={route}>
        <Text style={styles.text}>{tabText}</Text>
      </Link>
    </View>
  </Pressable>;
};

export default AppBarTab;