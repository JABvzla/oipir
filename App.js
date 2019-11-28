
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button
} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const HomeScreen = props => (
  <SafeAreaView>
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="Home screen"
        onPress={() => props.navigation.navigate('Profile', {name: 'Jane'})}
      />
    </View>
   </SafeAreaView>
);

const ProfileScreen = props => (
   <SafeAreaView>
  <View>
    <Text>ProfileScreen</Text>
  <Button
    title="Home screen"
    onPress={() => props.navigation.navigate('Home', {name: 'Jane'})}
  />
  </View>
   </SafeAreaView>
);

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},
});

const App = createAppContainer(MainNavigator);

export default App;
