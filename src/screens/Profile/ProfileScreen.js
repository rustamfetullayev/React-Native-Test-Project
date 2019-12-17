import React from 'react';
import {View, Text} from 'react-native';

export class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow'}}>
        <Text>Profile!</Text>
      </View>
    );
  }
}
