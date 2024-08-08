import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import DemoDarkMode from './src/screens/DemoUseContext';
import DemoUserConnection from './src/screens/DemoCustomHook';
import DemoUseUrql from './src/screens/DemoUseUrql';
import DemoStyledComponent from './src/screens/DemoStyledComponent';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Welcome" component={DemoDarkMode} />
        <Stack.Screen name="User Connection" component={DemoUserConnection} />
        <Stack.Screen name="User List" component={DemoUseUrql} />
        <Stack.Screen name="Button List" component={DemoStyledComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
