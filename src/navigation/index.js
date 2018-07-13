import React, {Component} from 'react'
import {View} from 'react-native'
import {
	createStackNavigator,
	createBottomTabNavigator
} from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome';
import Toast, {DURATION} from 'react-native-easy-toast'

import Home from '../screen/home/home'
import List from '../screen/list/list'
import My from '../screen/my/my'

import ListItem from '../screen/list/listItem'
import Rnpicker from '../screen/home/rnpicker'
import Swiper from '../screen/home/swiper'
import ImageView from '../screen/home/imageView'
import Data from '../screen/home/data'
import Animation from '../screen/home/animation'


import Login from '../screen/login/login'


import Demo from '../screen/my/demo'





const TabStack = createBottomTabNavigator(
	{
		HomeScreen: {
			screen: Home,
			navigationOptions: ({navigation}) => ({
				tabBarLabel: '首页',
				tabBarIcon: ({focused, tintColor}) => (
                    focused?
                        <Icon
                            size={20}
                            color='#4287f6'
							name='home'/>:
                        <Icon
                            size={20}
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
							 size={16}
                            color='#4287f6'
                            name='list'/>:
                        <Icon
							 size={16}
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
							 size={18}
                            color='#4287f6'
                            name='info'/>:
                        <Icon
							 size={18}
                            color='#c6c6c6'
                            name='info'/>
				)
			}),
		}
	}
)

TabStack.navigationOptions = ({navigation}) => {
	let {routeName} = navigation.state.routes[navigation.state.index];
	let headerTitle, header;
	console.log(routeName);
	switch (routeName) {
		case 'HomeScreen':
			headerTitle = '首页';
			break;
        case 'ListScreen':
            headerTitle = '列表';
            break;
		case 'MyScreen':
			headerTitle = '我的';
			header = null;
			break;
		default:
			headerTitle = ''
	}
	return {
		headerTitle,
        header
	}
}

const MainStack = createStackNavigator(
	{
		Tab: TabStack,
        ListItemScreen: ListItem,
        RnpickerScreen: Rnpicker,
        SwiperScreen: Swiper,
        ImageViewScreen: ImageView,
        DataScreen: Data,
        AnimationScreen: Animation,
        DemoScreen: Demo,
	}
)

const ModalStack = createStackNavigator({
    LoginScreen: Login,
})

const RootStacks = createStackNavigator(
    {
        Main: {
            screen: MainStack,
        },
        Modal: {
            screen: ModalStack,
        },
    },
    {
        mode: 'modal',
        headerMode: 'none',
    }
);

export default class RootStack extends Component {
	render() {
		return (
			<View style={{flex: 1, zIndex: 100}}>
                <RootStacks/>
                <Toast
                    position='center'
                    ref="toast"/>
			</View>
		)
	}

    componentDidMount() {
        global.$toast = (msg) => {
        	this.refs.toast.show(msg);
		}

    }
}

