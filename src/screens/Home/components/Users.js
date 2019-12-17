import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import Modal from 'react-native-modal';

export class Users extends React.Component {
  static navigationOptions = {
    title: 'Users',
  };

  state = {
    users: [
      {name: 'Rustam', surname: 'Fetullayev', age: 20, email: 'test@gmail.com'},
      {name: 'Resul', surname: 'Agarzayev', age: 21, email: 'test@gmail.com'},
      {name: 'Aqil', surname: 'Atakisiyev', age: 21, email: 'test@gmail.com'},
      {name: 'Anar', surname: 'Quliyev', age: 21, email: 'test@gmail.com'},
      {name: 'Hikmet', surname: 'Soltanov', age: 21, email: 'test@gmail.com'},
      {name: 'Samir', surname: 'Dadashzade', age: 28, email: 'test@gmail.com'},
    ],
    isModalVisible: false,
  };

  render() {
    const {navigate} = this.props.navigation;
    let {users} = this.state;

    return (
      <ScrollView>
        <View style={styles.container}>
          {users.map((user, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.item}
                onPress={() => navigate('UserDetails', user)}>
                <Text
                  style={
                    styles.text
                  }>{`Go to ${user.name} ${user.surname}'s profile`}</Text>
              </TouchableOpacity>
            );
          })}
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => {
              this.setState({isModalVisible: true});
            }}>
            <Text style={{color: 'white', fontSize: 20, fontWeight: '500'}}>
              +
            </Text>
          </TouchableOpacity>
        </View>
        {/* Modal */}
        <Modal isVisible={this.state.isModalVisible}>
          <View style={styles.modal}>
            <View style={styles.content}>
              <Text style={{textAlign: 'center', fontWeight: '700'}}>Add</Text>
              <TextInput
                style={styles.input}
                placeholder={'Enter your name...'}
              />
              <TextInput
                style={styles.input}
                placeholder={'Enter your surname...'}
              />
              <TextInput
                style={styles.input}
                placeholder={'Enter your age...'}
              />
              <TextInput
                style={styles.input}
                placeholder={'Enter your email...'}
              />
            </View>
            <View style={styles.footer}>
              <TouchableOpacity
                style={[styles.button, styles.cancel]}
                onPress={() => {
                  this.setState({isModalVisible: false});
                }}>
                <Text style={{color: '#007AFF', fontWeight: '700'}}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.add]}>
                <Text style={{color: 'white', fontWeight: '700'}}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    padding: 20,
    height: Dimensions.get('window').height - 160,
  },
  item: {
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#007AFF',
    borderRadius: 10,
  },
  text: {
    color: '#007AFF',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: '#007AFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    minHeight: 300,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  content: {
    flex: 7,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#007AFF',
  },
  footer: {
    flex: 1,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    width: '40%',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancel: {
    borderWidth: 1,
    borderColor: '#007AFF',
    backgroundColor: 'white',
  },
  add: {
    backgroundColor: '#007AFF',
  },
});
