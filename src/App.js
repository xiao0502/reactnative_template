/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import RootStack from './navigation/'
import SplashScreen from 'react-native-splash-screen'
console.disableYellowBox = true;
console.warn('YellowBox is disabled.');
import CodePush from "react-native-code-push";

export default class App extends Component {
    componentDidMount() {
		setTimeout(() => {
			SplashScreen.hide();
		}, 1500)
		CodePush.sync({
			updateDialog: true,
			installMode: CodePush.InstallMode.IMMEDIATE
		});

    }
	render() {
		return (
			<RootStack />
		);
	}
}

let codePushOptions = { checkFrequency: CodePush.CheckFrequency.MANUAL };
App = CodePush(codePushOptions)(App);


