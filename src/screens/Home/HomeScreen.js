import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {Users, UserDetails} from './components';

const HomeScreenNavigator = createStackNavigator({
  Users: {screen: Users},
  UserDetails: {screen: UserDetails},
});

export const HomeScreen = createAppContainer(HomeScreenNavigator);
