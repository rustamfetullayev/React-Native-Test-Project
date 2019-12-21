import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {SignInScreen, SignUpScreen} from './components';

const AccountScreenNavigator = createStackNavigator({
  SignUp: {screen: SignUpScreen},
  SignIn: {screen: SignInScreen},
});

export const AccountScreen = createAppContainer(AccountScreenNavigator);
