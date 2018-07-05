import React, {Component} from 'react'
import {
	createStackNavigator,
	createBottomTabNavigator
} from 'react-navigation'
import { Icon } from 'react-native-elements'

import Home from '../screen/home/home'
import List from '../screen/list/list'
import My from '../screen/my/my'

import ListItem from '../screen/list/listItem'

const TabStack = createBottomTabNavigator(
	{
		HomeScreen: {
			screen: Home,
			navigationOptions: ({navigation}) => ({
				tabBarLabel: '首页',
				tabBarIcon: ({focused, tintColor}) => (
                    focused?
                        <Icon
                            color='#4287f6'
							name='home'/>:
                        <Icon
                            color='#c6c6c6'
							name='home'/>
				)
			}),
		},
        ListScreen: {
            screen: List,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '列表',
                tabBarIcon: ({focused, tintColor}) => (
                    focused?
                        <Icon
                            color='#4287f6'
                            name='list'/>:
                        <Icon
                            color='#c6c6c6'
                            name='list'/>
                )
            }),
		},
		MyScreen: {
			screen: My,
			navigationOptions: ({navigation}) => ({
				tabBarLabel: '我的',
				tabBarIcon: ({focused, tintColor}) => (
                    focused?
                        <Icon
                            color='#4287f6'
                            name='info'/>:
                        <Icon
                            color='#c6c6c6'
                            name='info'/>
				)
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
        case 'ListScreen':
            headerTitle = '列表';
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
		Tab: TabStack,
        ListItemScreen: ListItem
	}
)

export default class RootStack extends Component {
	render() {
		return (
			<MainStack/>
		)
	}
}

