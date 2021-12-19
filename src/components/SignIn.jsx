import React from 'react';
import { Text, View, Pressable, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    margin: theme.margin,
    flexDirection: 'column'
  }
});

const initialValues = {
  username: '',
  password: ''
};

const SignInForm = ({ onSubmit }) => {

  return (
    <View style={styles.container}>
      <FormikTextInput style={theme.textInput} name="username" placeholder="Username" />
      <FormikTextInput style={theme.textInput} name="password" placeholder="Password" secureTextEntry/>
      <Pressable style={theme.pressable} onPress={onSubmit}>
        <Text style={theme.pressableText}>Sign in</Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {

  const onSubmit = values => {
    const username = values.username;
    const password = values.password;

    console.log(`Username: ${username}, password: ${password}`);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
    );
};

export default SignIn;