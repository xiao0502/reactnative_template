import React, {Component} from 'react'
import {
    View,
    Text,
    Modal,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight
} from 'react-native'
import BaseComponet from '../../components/baseComponent'
import screen from '../../assets/js/screen'
import {Button,  List, ListItem } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/EvilIcons';

export default class My extends BaseComponet {


    constructor(props) {
        super(props);
        this.state = {
            modalVisible: 'visible',
            isLogin: false
        };
    }

    componentDidMount() {
        global.$storage.load({
            key: 'loginState'
        }).then(res => {
            this.setState({
                isLogin: res.isLogin
            })

        })
    }

    render() {
        const {params} = this.props.navigation.state;
        const {navigate} = this.props.navigation;
        let loginFlag = params && params.isLogin;
        const list = [
            {
                title: 'Appointments',
                icon: 'av-timer'
            },
            {
                title: 'Trips',
                icon: 'flight-takeoff'
            }
        ]
        return (
            <View>
                <View style={{height: 100, backgroundColor: 'teal'}}></View>
                <Text style={{marginVertical: 20}}>我的页面</Text>
                <List>
                    {/*{*/}
                        {/*list.map((item, i) => (*/}
                            {/*<ListItem*/}
                                {/*key={i}*/}
                                {/*title={item.title}*/}
                                {/*leftIcon={{name: item.icon}}*/}
                            {/*/>*/}
                        {/*))*/}
                    {/*}*/}
                    <ListItem
                        title={"我的钱包"}
                        leftIcon={{name: 'local-atm'}}
                        underlayColor={'#d1d1d1'}
                        onPress={() => {
                            navigate('DemoScreen')
                        }}
                    ></ListItem>
                    <ListItem
                        title={"联系我们"}
                        leftIcon={{name: 'local-phone'}}
                        underlayColor={'#d1d1d1'}
                        onPress={() => {
                            navigate('DemoScreen')
                        }}
                    ></ListItem>
                </List>
                {
                    this.state.isLogin || loginFlag  ?
                        <Button
                            borderRadius={4}
                            backgroundColor={'teal'}
                            containerViewStyle={{
                                marginTop: 20
                            }}
                            onPress={this.toLogout}
                            title='退出登录'/> : null
                }
                {
                    this.state.isLogin || loginFlag ?
                        null :
                        <View
                            style={styles.modal}
                        >
                            <View style={styles.buttonWrapper}>
                                <Button
                                    borderRadius={4}
                                    backgroundColor={'teal'}
                                    containerViewStyle={styles.button}
                                    onPress={this.toLogin}
                                    title='登录'/>
                            </View>

                        </View>
                }
            </View>
        )
    }

    toLogin = () => {
        const {navigate} = this.props.navigation;
        navigate('LoginScreen')
    }

    toLogout = () => {
        const {setParams} = this.props.navigation;
        global.$storage.remove({
            key: 'loginState'
        });
        this.setState({
            isLogin: false
        })
        setParams({isLogin: false})
    }
}

const styles = StyleSheet.create({
    modal: {
        width: screen.width,
        height: screen.height - 48,
        backgroundColor: 'rgba(0,0,0,.5)',
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 48,
        right: 0
    },
    buttonWrapper: {
        padding: 40,
        backgroundColor: '#fff',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    },
    button: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 20,

    }
})
