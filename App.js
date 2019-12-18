/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import {HomeScreen, MapScreen, SliderScreen} from './src/screens';

const MainNavigator = createBottomTabNavigator({
  Home: {screen: HomeScreen},
  Map: {screen: MapScreen},
  Slider: {screen: SliderScreen},
});

const App = createAppContainer(MainNavigator);

export default App;
