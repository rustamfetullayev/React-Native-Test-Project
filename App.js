/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import {Animated, Easing} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import {
  HomeScreen,
  SettingsScreen,
  ProfileScreen,
  SliderScreen,
} from './src/screens';

// const transitionConfig = () => {
//   return {
//     transitionSpec: {
//       duration: 500,
//       easing: Easing.out(Easing.poly(4)),
//       timing: Animated.timing,
//       useNativeDriver: true,
//     },
//     screenInterpolator: sceneProps => {
//       const {layout, position, scene} = sceneProps;

//       const thisSceneIndex = scene.index;
//       const width = layout.initWidth;

//       const translateX = position.interpolate({
//         inputRange: [thisSceneIndex - 1, thisSceneIndex],
//         outputRange: [-width, 0],
//         extrapolate: 'clamp',
//       });

//       return {
//         transform: [{translateX}],
//       };
//     },
//   };
// };

const MainNavigator = createBottomTabNavigator(
  {
    Home: {screen: HomeScreen},
    Settings: {screen: SettingsScreen},
    Profile: {screen: ProfileScreen},
    Slider: {screen: SliderScreen},
  },
  // {
  //   transitionConfig,
  // },
);

const App = createAppContainer(MainNavigator);

export default App;
