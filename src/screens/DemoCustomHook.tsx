import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useOnlineStatus} from '../hooks/useOnlineStatus';

const DemoUserConnection: React.FC = () => {
  const isOnline = useOnlineStatus();

  return (
    <View style={styles.container}>
      <Text style={[styles.text]}>
        {isOnline ? 'You are online ✅' : 'You are offline ❌'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#000',
  },
});

export default DemoUserConnection;
