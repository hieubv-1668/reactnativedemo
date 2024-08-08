import React from 'react';
import {Button, View, StyleSheet, Text} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Button
        title="Go to demo use context screen"
        onPress={() => navigation.navigate('Welcome')}
      />
      <Button
        title="Go to demo custom hooks screen"
        onPress={() => navigation.navigate('User Connection')}
      />
      <Button
        title="Go to demo use graphql screen"
        onPress={() => navigation.navigate('User List')}
      />
      <Button
        title="Go to demo use styled component screen"
        onPress={() => navigation.navigate('Button List')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default HomeScreen;
