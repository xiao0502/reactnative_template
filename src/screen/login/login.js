import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import BaseComponent from '../../components/baseComponent'
import {FormLabel, FormInput, FormValidationMessage, Button} from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons';

export default class Login extends BaseComponent {
    static navigationOptions = ({navigation}) => {
        const {params} = navigation.state;
        return {
            header: null
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.wrapper}>
                <View style={styles.closeBtnWrapper}>
                    <TouchableOpacity
                        onPress={() => {
                            navigate('MyScreen')
                        }}
                    >
                        <Icon

                            size={40}
                            style={styles.closeBtn}
                            color='#c6c6c6'
                            name='ios-close'/>
                    </TouchableOpacity>
                </View>

                <FormLabel>用户名</FormLabel>
                <FormInput onChangeText={(val) => {
                    this.changeTxt(val, 'username');
                }}/>
                <FormLabel>密码</FormLabel>
                <FormInput onChangeText={(val) => {
                    this.changeTxt(val, 'password');
                }}/>
                <Button
                    borderRadius={4}
                    backgroundColor={'teal'}
                    containerViewStyle={styles.button}
                    onPress={this.login}
                    title='登录'/>
            </View>
        )
    }

    changeTxt = (val, target) => {
        this.setState({
            [target]: val
        })
    }

    login = () => {
        const {navigate, goBack} = this.props.navigation;
        console.log(global);
        if(!this.state.username) {
            global.$toast('用户名不能为空')
            return
        }
        if(!this.state.password) {
            global.$toast('密码不能为空')
            return
        }
        global.$storage.save({
            key: 'loginState',  // 注意:请不要在key中使用_下划线符号!
            data: {
                isLogin: true
            },

            // 如果不指定过期时间，则会使用defaultExpires参数
            // 如果设为null，则永不过期
            expires: 1000 * 3600
        })

        global.$storage.load({
            key: 'loginState'
        }).then(res => {
            if(res.isLogin) {
                navigate('MyScreen',{
                    isLogin: true
                })
            }
        })
    }
}


const styles = StyleSheet.create({
    closeBtnWrapper: {
        flexDirection: 'row-reverse',

    },
    closeBtn: {
        width: 40,
        height: 40,
    },
    wrapper: {
        paddingTop: 20
    },
    button: {
        marginTop: 50
    }
})