import React, {Component} from 'react'
import {
	createStackNavigator,
	createBottomTabNavigator
} from 'react-navigation'

import Home from '../screen/home/home'
import My from '../screen/my/my'

const TabStack = createBottomTabNavigator(
	{
		HomeScreen: {
			screen: Home,
			navigationOptions: ({navigation}) => ({
				tabBarLabel: '首页',
				// tabBarIcon: ({focused, tintColor}) => (
				// 	{}
				// )
			}),
		},
		MyScreen: {
			screen: My,
			navigationOptions: ({navigation}) => ({
				tabBarLabel: '我的',
				// tabBarIcon: ({focused, tintColor}) => (
				// 	{}
				// )
			}),
		}
	}
)

TabStack.navigationOptions = ({navigation}) => {
	let {routeName} = navigation.state.routes[navigation.state.index];
	let headerTitle;
	console.log(routeName);
	switch (routeName) {
		case 'HomeScreen':
			headerTitle = '首页';
			break;
		case 'MyScreen':
			headerTitle = '我的'
			break;
		default:
			headerTitle = ''
	}
	return {
		headerTitle
	}
}

const MainStack = createStackNavigator(
	{
		Tab: TabStack
	}
)

export default class RootStack extends Component {
	render() {
		return (
			<MainStack/>
		)
	}
}

