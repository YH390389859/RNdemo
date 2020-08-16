/**
 * @format
 */

import { AppRegistry, Alert } from 'react-native';
import App from './app/App';
import { name as appName } from './app.json';

ErrorUtils.setGlobalHandler((error)=>{
    Alert.alert('app异常,请联系开发者哦')
})

AppRegistry.registerComponent(appName, () => App);
