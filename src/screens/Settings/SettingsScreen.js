import React from 'react';
import {View, Text} from 'react-native';

export class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'orange'}}>
        <Text>Settings!</Text>
      </View>
    );
  }
}
