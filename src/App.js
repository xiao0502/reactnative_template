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

export default class App extends Component {
    componentDidMount() {
		setTimeout(() => {
            SplashScreen.hide();
        }, 1500)
    }
	render() {
		return (
			<RootStack />
		);
	}
}


