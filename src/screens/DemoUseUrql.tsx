import React from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import client from '../network/client';
import {Provider, useMutation, useQuery} from 'urql';
import {ADD_USER, GET_USERS} from '../network/queries';
import {SafeAreaView} from 'react-native-safe-area-context';

const UsersList = () => {
  const [{data, fetching, error}] = useQuery({
    query: GET_USERS,
  });

  if (fetching) {
    return <Text style={styles.loadingText}>Loading...</Text>;
  }
  if (error) {
    console.log(error.networkError);
    return <Text style={styles.errorText}>Error: {error.message}</Text>;
  }

  return (
    <FlatList
      data={data.users}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <View style={styles.userContainer}>
          <Text style={styles.userText}>Name: {item.name}</Text>
          <Text style={styles.userText}>Age: {item.age}</Text>
          <Text style={styles.userText}>Birthdate: {item.birthdate}</Text>
        </View>
      )}
    />
  );
};

const AddUser = () => {
  const [, addUser] = useMutation(ADD_USER);
  const [name, setName] = React.useState('');
  const [age, setAge] = React.useState('');
  const [birthdate, setBirthdate] = React.useState('');

  const handleSubmit = () => {
    if (name && age && birthdate) {
      addUser({name, age: parseInt(age, 10), birthdate});
      setName('');
      setAge('');
      setBirthdate('');
    }
  };

  return (
    <View style={styles.addUserContainer}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Birthdate"
        value={birthdate}
        onChangeText={setBirthdate}
      />
      <Button title="Add User" onPress={handleSubmit} color="#007BFF" />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
  userContainer: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    borderColor: '#dee2e6',
    borderWidth: 1,
  },
  userText: {
    fontSize: 16,
    color: '#495057',
  },
  addUserContainer: {
    padding: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#dee2e6',
  },
  input: {
    height: 40,
    borderColor: '#ced4da',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#e9ecef',
  },
});

const DemoUseUrql = () => {
  return (
    <Provider value={client}>
      <SafeAreaView style={styles.safeArea}>
        <AddUser />
        <UsersList />
      </SafeAreaView>
    </Provider>
  );
};

export default DemoUseUrql;
