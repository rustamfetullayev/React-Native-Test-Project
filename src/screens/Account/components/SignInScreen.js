import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';

import t from 'tcomb-form-native';

import {globalFunctions} from '../../../actions';

const Form = t.form.Form;

let options = {
  auto: 'placeholders',
  fields: {
    email: {
      autoCapitalize: false,
      autoFocus: true,
      keyboardType: 'email-address',
      error: 'Insert a valid email',
    },
    password: {
      autoCapitalize: false,
      error: 'Insert a valid password',
      secureTextEntry: true,
    },
  },
};

let User = t.struct({
  email: t.String,
  password: t.String,
});

export class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Sign In',
  };

  onSignIn = () => {
    let user = this.refs.form.getValue();

    if (user) {
      globalFunctions._signIn(user);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Form ref="form" type={User} options={options} />
          <TouchableOpacity
            style={styles.button}
            underlayColor="#99d9f4"
            onPress={this.onSignIn}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <Button
            title={`Don't have account?`}
            onPress={() => this.props.navigation.navigate('SignUp')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
});
