import React from 'react';
import { Button, View, Text, ScrollView } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Builder from './components/Builder';
import Login from './components/Login';
import { Provider } from 'react-redux';
import store from './store';

class HomeScreen extends React.Component {
  render() {
    return (
      <ScrollView>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Login />
        <Button
          title="Builder"
          onPress={() => {
            this.props.navigation.navigate('Builder', {
              itemId: 86,
            });
          }}
        />
      </View>
      </ScrollView>
    );
  }
}

class BuilderScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    return (
      <ScrollView>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
        <Builder />
      </View>
      </ScrollView>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Builder: BuilderScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <Provider store={store}>
      <RootStack />
      </Provider>;
  }
}