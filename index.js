/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import DemoDarkMode from './src/screens/DemoUseContext';
import {name as appName} from './app.json';
import DemoUserConnection from './src/screens/DemoCustomHook';
import DemoUseUrql from './src/screens/DemoUseUrql';

AppRegistry.registerComponent(appName, () => App);
