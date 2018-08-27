import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Expo from 'expo'; 
// import { Container, Content } from 'native-base';

// Import routes
import Routes from './app/routes/routes';



// Import core components
import HelloWorld from './HelloWorld';
import MainScreen from './app/components/Views/Stacks/AppStack/MainScreen';
import FeedScreen from './app/components/Views/Stacks/AppStack/FeedScreen';
import AddMediaScreen from './app/components/Views/Stacks/AppStack/AddMediaScreen';
import ProfileScreen from './app/components/Views/Stacks/AppStack/ProfileScreen';
import WelcomeScreen from './app/components/Views/Stacks/AuthStack/WelcomeScreen';


// Debug imports
// import AppHeader from './app/components/Header/AppHeader';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {loading: true, loggedIn: false};

    // Bind methods
    this.setLoading = this.setLoading.bind(this);
    this.getLoading = this.getLoading.bind(this);
    this.getLoggedIn = this.getLoggedIn.bind(this);
    this.setLoggedIn = this.setLoggedIn.bind(this);
  }

  // Getter and setter methods
  setLoading(newValBool) {
    this.setState({ loading: newValBool });
  }

  getLoading() {
    return this.state.loading;
  }

  setLoggedIn(newValBool) {
    this.setState({ loggedIn: newValBool});
  }

  getLoggedIn() {
    return this.state.loggedIn;
  }

  async componentDidMount() {
    await Expo.Font.loadAsync({
    Roboto: require("native-base/Fonts/Roboto.ttf"),
    Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    MaterialIcons: require("@expo/vector-icons/fonts/MaterialIcons.ttf"),
    });
    this.setLoading(false);
  }

  static navigationOptions = {
    initialRouteName: 'Welcome',
  }

  render() {
    const isLoading = this.getLoading();
    if (isLoading) {
      return <Expo.AppLoading />;

    }
    return (
      <Routes />
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Main: {
    screen: MainScreen
  },

  Welcome: {
    screen: WelcomeScreen
  },

  Feed: {
    screen: FeedScreen
  },

  Add: {
    screen: AddMediaScreen
  },

  Profile: {
    screen: ProfileScreen
  },

  initialRouteName: 'Main',

});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
