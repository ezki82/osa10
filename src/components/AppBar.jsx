import React from 'react';
import { StyleSheet, View } from 'react-native';
import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.appBarBackground,
    flexGrow:1
  },
});

const AppBar = () => {
  return <View style={styles.container}>
    <AppBarTab tabText='Repositories' />
  </View>;
};

export default AppBar;