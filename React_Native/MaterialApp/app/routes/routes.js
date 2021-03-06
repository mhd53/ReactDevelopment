import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

// Import screens
import AuthLoadingScreen from '../components/Views/AuthLoadingScreen';
import MainScreen from '../components/Views/Stacks/AppStack/MainScreen';
import WelcomeScreen from '../components/Views/Stacks/AuthStack/WelcomeScreen'; 
import LoginScreen from '../components/Views/Stacks/AuthStack/LoginScreen'; 
import SignUpScreen from '../components/Views/Stacks/AuthStack/SignUpScreen';
import ForgotPasswordScreen from '../components/Views/Stacks/AuthStack/ForgotPasswordScreen'; 
import SelectFormScreen from '../components/Views/Stacks/AuthStack/SelectFormScreen';

// Import tab stacks

const AppStack = createStackNavigator ({
	Main: {
		// screen: ({ navigation }) => <MainScreen screenProps={{ rootNavigation: navigation }} />
		screen: MainScreen
	},
},

{
	navigationOptions: {
		header: null,
	}

});

/*
const createAuthStack = (loggedOut = false) => {
	return createStackNavigator({
		Welcome: {
			screen: WelcomeScreen
		},

		SelectForm: {
			screen: SelectFormScreen
		},

		Login: {
			screen: LoginScreen
		},

		ForgotPass: {
			screen: ForgotPasswordScreen
		},

		SignUp: {
			screen: SignUpScreen
		}

	},

	{
		initialRouteName: loggedOut ? "SelectForm": "Welcome"

	});
}
*/

const AuthStack = createStackNavigator({
	
	SelectForm: {
		screen: SelectFormScreen
	},

	Login: {
		screen: LoginScreen
	},

	ForgotPass: {
		screen: ForgotPasswordScreen
	},

	SignUp: {
		screen: SignUpScreen
	}
});

export default createSwitchNavigator({
	AuthLoading: {
		screen: AuthLoadingScreen

	},

	Welcome: {
		screen: WelcomeScreen
	},

	App: {
		screen: AppStack
	},

	Auth: {
		screen: AuthStack
	}
},

{
	initialRouteName: 'AuthLoading'

});





