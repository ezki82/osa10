import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
    flexGrow:1,
    flexShrink: 1,
  },
});

const AppBar = () => {
  return <View style={styles.container}>
    <AppBarTab tabText='Repositories' />
  </View>;
};

export default AppBar;