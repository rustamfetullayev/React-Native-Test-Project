import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {SignInScreen, SignUpScreen} from './components';

export class AccountScreen extends React.Component {
  render() {
    const AccountScreenNavigator = createStackNavigator({
      SignIn: {screen: SignInScreen},
      SignUp: {screen: SignUpScreen},
    });

    const AccountScreenContainer = createAppContainer(AccountScreenNavigator);
    return <AccountScreenContainer />;
  }
}
