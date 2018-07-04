/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import RootStack from './navigation/'
console.disableYellowBox = true;
console.warn('YellowBox is disabled.');

export default class App extends Component {
	render() {
		return (
			<RootStack />
		);
	}
}


