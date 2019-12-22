/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import {Alert, AsyncStorage} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import {globalFunctions} from './src/actions';
import {users} from './src/storage';

import {
  HomeScreen,
  MapScreen,
  PostScreen,
  AccountScreen,
  ProfileScreen,
} from './src/screens';

import {Loader} from './src/components';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthorized: false,
      isLoading: true,
    };

    console.disableYellowBox = true;

    globalFunctions.set({
      signUp: newUser => {
        let user = users.find(user => user.email === newUser.email);
        if (user) {
          Alert.alert('Warning', 'This user already exist.', [
            {
              text: 'OK',
            },
          ]);
        } else {
          AsyncStorage.setItem('user', JSON.stringify(newUser))
            .then(response => {
              users.push(newUser);
              this.setState({isAuthorized: true});
              Alert.alert('Success', 'Welcome', [
                {
                  text: 'OK',
                },
              ]);
            })
            .catch(error => {
              Alert.alert('Error', error.message);
            });
        }
      },
      signIn: user => {
        let selectedUser = users.find(
          item => item.email === user.email && item.password === user.password,
        );

        if (selectedUser) {
          AsyncStorage.setItem('user', JSON.stringify(selectedUser))
            .then(response => {
              this.setState({isAuthorized: true});
              Alert.alert('Success', 'Welcome', [
                {
                  text: 'OK',
                },
              ]);
            })
            .catch(error => {
              Alert.alert('Error', error.message);
            });
        } else {
          Alert.alert('Warning', 'Username or password is wrong.', [
            {
              text: 'OK',
            },
          ]);
        }
      },
      logOut: async () => {
        let user = await AsyncStorage.getItem('user');

        if (JSON.parse(user)) {
          await AsyncStorage.removeItem('user');
          this.setState({isAuthorized: false});
        }
      },
    });
  }

  componentDidMount() {
    AsyncStorage.getItem('user').then(respoonse => {
      if (JSON.parse(respoonse)) {
        this.setState({isAuthorized: true});
      }
      this.setState({isLoading: false});
    });
  }

  render() {
    let {isAuthorized, isLoading} = this.state;

    const MainNavigator = createBottomTabNavigator(
      !isAuthorized
        ? {
            Account: {screen: AccountScreen},
          }
        : {
            Home: {screen: HomeScreen},
            Map: {screen: MapScreen},
            Post: {screen: PostScreen},
            Profile: {screen: ProfileScreen},
          },
    );

    const AppContainer = createAppContainer(MainNavigator);

    return <>{isLoading ? <Loader /> : <AppContainer />}</>;
  }
}
