/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import {Alert} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import {globalFunctions} from './src/actions';
import {users} from './src/storage';

import {
  HomeScreen,
  MapScreen,
  SliderScreen,
  AccountScreen,
} from './src/screens';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthorized: false,
    };

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
          users.push(newUser);
          this.setState({isAuthorized: true});
          Alert.alert('Success', 'Welcome', [
            {
              text: 'OK',
            },
          ]);
        }
      },
      signIn: user => {
        let selectedUser = users.find(
          item => item.email === user.email && item.password === user.password,
        );

        if (selectedUser) {
          this.setState({isAuthorized: true});
          Alert.alert('Success', 'Welcome', [
            {
              text: 'OK',
            },
          ]);
        } else {
          Alert.alert('Warning', 'Username or password is wrong.', [
            {
              text: 'OK',
            },
          ]);
        }
      },
    });
  }

  render() {
    let {isAuthorized} = this.state;

    const MainNavigator = createBottomTabNavigator(
      !isAuthorized
        ? {
            Account: {screen: AccountScreen},
          }
        : {
            Home: {screen: HomeScreen},
            Map: {screen: MapScreen},
            Slider: {screen: SliderScreen},
          },
    );

    const AppMain = createAppContainer(MainNavigator);

    return <AppMain />;
  }
}

console.disableYellowBox = true;
