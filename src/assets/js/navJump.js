import {
    StackActions,
    NavigationActions
} from 'react-navigation'

export default class NavJump {
    /**
     * 返回上一页
     * @param navigation
     */
    static goBack(navigation) {
        navigation.goBack();
    }

    /**
     * 重置路由至首页
     * @param params
     */
    static resetToHome(params) {
        const {navigation} = params;
        const resetAction = StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({
                    routeName: 'Tab',
                })
            ]
        })
        navigation.dispatch(resetAction);
    }
}
