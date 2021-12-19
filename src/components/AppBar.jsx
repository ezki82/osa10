import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.appBarBackground,
    flexDirection: 'row',
    flexGrow: 1
  },
});

const AppBar = () => {
  return <View style={styles.container}>
    <ScrollView horizontal>
      <AppBarTab tabText='Repositories' route='/' />
      <AppBarTab tabText='Sign in' route='/signin' />
    </ScrollView>
  </View>;
};

export default AppBar;