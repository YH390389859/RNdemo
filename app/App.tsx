// In App.js in a new project

import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen(props: any) {
  const { navigation } = props;
  const [count, setCount] = useState(0);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          navigation.navigate({ name: 'Details', params: { text: count + 1 } });
          setCount(count + 1);
        }}
      />
    </View>
  );
}
function DetailsScreen(props: any) {
  const {
    navigation,
    route: {
      params: { text },
    },
  } = props;
  console.log(props);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen {text}</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Details2')}
      />
    </View>
  );
}
function DetailsScreen2(props: any) {
  const { navigation } = props;
  console.log(props);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen2</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.popToTop('Details2')}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{
            title: 'asdfasf',
            headerStyle: {
              backgroundColor: '#f4511e',
              height: 150,
              width: 150,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '700',
            },
          }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Details2" component={DetailsScreen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
