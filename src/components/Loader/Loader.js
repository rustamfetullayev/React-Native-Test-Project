import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

export class Loader extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'#48BBEC'} />
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
});
