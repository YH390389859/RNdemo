import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { appStore, appStoreActive, user, userActive } from './assets/images'
import GameHome from './pages/gameHome';

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName = null
            if (route.name === 'Home') {
              iconName = focused
                ? appStoreActive
                : appStore;
            } else if (route.name === 'Mine') {
              iconName = focused ? userActive : user;
            }

            // You can return any component that you like here!
            return <Image style={{ width: 25, height: 25 }} source={iconName} />;
          },
        })}
        tabBarOptions={{
          showLabel: false
        }}
      >
        <Tab.Screen
          name="Home"
          component={GameHome}
        />
        <Tab.Screen name="Mine" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}