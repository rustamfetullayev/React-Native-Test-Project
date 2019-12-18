import React, {Component} from 'react';
import {View, Dimensions, ScrollView, StyleSheet, Alert} from 'react-native';
import MapView from 'react-native-maps';

export class MapScreen extends Component {
  state = {
    region: {
      latitude: 51.505,
      longitude: -0.09,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={StyleSheet.absoluteFill}>
          <MapView
            style={styles.map}
            region={this.state.region}
            loadingEnabled={true}
            onMapReady={() => {
              Alert.alert('Thanks', 'Enjoy our free map');
            }}></MapView>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: Dimensions.get('window').height,
  },
});
