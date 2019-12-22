import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';

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

export class SignUpScreen extends React.Component {
  static navigationOptions = {
    title: 'Sign Up',
  };

  onSignUp = () => {
    let newUser = this.refs.form.getValue();
    if (newUser) {
      globalFunctions._signUp(newUser);
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
            onPress={this.onSignUp}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <Button
            title={`Have an account?`}
            onPress={() => this.props.navigation.navigate('SignIn')}
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
