import React from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';

export class UserDetails extends React.Component {
  static navigationOptions = ({navigation}) => {
    const {params} = navigation.state;

    return {
      title: params
        ? `${params.name} ${params.surname}'s profile`
        : 'User Details',
    };
  };

  render() {
    const {navigate} = this.props.navigation;
    let user = this.props.navigation.state.params;

    return (
      <View style={styles.container}>
        {user ? (
          <View style={styles.aboutContainer}>
            <View style={styles.item}>
              <Text style={styles.bold}>Name:</Text>
              <Text>{user.name}</Text>
            </View>

            <View style={styles.item}>
              <Text style={styles.bold}>Surname:</Text>
              <Text>{user.surname}</Text>
            </View>

            <View style={styles.item}>
              <Text style={styles.bold}>Age:</Text>
              <Text>{user.age}</Text>
            </View>

            <View style={styles.item}>
              <Text style={styles.bold}>Email:</Text>
              <Text>{user.email}</Text>
            </View>
          </View>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  aboutContainer: {
    borderWidth: 1,
    borderColor: '#007AFF',
    borderRadius: 10,
  },
  item: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bold: {
    fontWeight: '900',
  },
});
