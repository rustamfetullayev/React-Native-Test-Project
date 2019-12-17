import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import Modal from 'react-native-modal';
import t from 'tcomb-form-native';

const Form = t.form.Form;

let options = {
  auto: 'placeholders',
  fields: {
    name: {
      autoFocus: true,
      error: 'Insert a valid name',
    },
    surname: {
      error: 'Insert a valid surname',
    },
    age: {
      keyboardType: 'numeric',
      error: 'Insert a valid age',
    },
    email: {
      keyboardType: 'email-address',
      autoCapitalize: false,
      error: 'Insert a valid email',
    },
  },
};

let User = t.struct({
  name: t.String,
  surname: t.String,
  age: t.Number,
  email: t.String,
});

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

  onSubmit = () => {
    let newUser = this.refs.form.getValue();
    if (newUser) {
      let users = this.state.users;
      users.push(newUser);
      this.setState({users: users, isModalVisible: false});
    }
  };

  render() {
    const {navigate} = this.props.navigation;
    let {users} = this.state;

    return (
      <View style={{height: Dimensions.get('window').height - 170}}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            this.setState({isModalVisible: true});
          }}>
          <Text style={{color: 'white', fontSize: 20, fontWeight: '500'}}>
            +
          </Text>
        </TouchableOpacity>
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
          </View>

          {/* Modal */}
          <Modal isVisible={this.state.isModalVisible}>
            <View style={styles.modal}>
              <Form ref="form" type={User} options={options} />
              <TouchableOpacity
                style={styles.button}
                underlayColor="#99d9f4"
                onPress={this.onSubmit}>
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, {backgroundColor: 'white'}]}
                underlayColor="#99d9f4"
                onPress={() => {
                  this.setState({isModalVisible: false});
                }}>
                <Text style={[styles.buttonText, {color: '#48BBEC'}]}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
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
    zIndex: 2,
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
    padding: 20,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  cancel: {
    backgroundColor: 'white',
  },
});
