import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  AsyncStorage,
  Alert,
} from 'react-native';

import {globalFunctions} from '../../actions';

export class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    };
  }

  onLogOut = () => {
    globalFunctions._logOut();
  };

  componentDidMount() {
    AsyncStorage.getItem('user')
      .then(response => {
        this.setState({user: JSON.parse(response)});
      })
      .catch(error => {
        Alert.alert('Error', error.message);
      });
  }

  render() {
    let {user} = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>{user ? `${user.email}` : 'User'}</Text>
        <Button title={'Log out'} onPress={this.onLogOut} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});
