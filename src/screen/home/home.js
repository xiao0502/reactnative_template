import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native'
import BaseComponet from '../../components/baseComponent'
import {Button} from 'react-native-elements';
import API from '../../assets/js/api'
import screen from '../../assets/js/screen'
import Toast, {DURATION} from 'react-native-easy-toast'

export default class Home extends BaseComponet {
    constructor(props) {
        super(props);
        this.state = {
            bannerList: []
        }
    }

    render() {
        return (
            <View style={styles.home_wrapper}>
                <Text style={styles.title}>事件请求封装</Text>
                <Button
                    borderRadius={4}
                    backgroundColor={'teal'}
                    containerViewStyle={styles.button}
                    onPress={this.getData}
                    title='请求按钮'/>
                <View style={{
                    height: 130,
                    width: screen.width - 30,
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: '#5b7c80',
                    marginVertical: 20
                }}>
                    {
                        this.state.bannerList.map((item, index) => {
                            return <Image
                                style={{
                                    width: 100,
                                    height: 100,
                                    marginRight: 10
                                }}
                                source={{uri: item.img}}
                                key={index}></Image>
                        })
                    }
                </View>
                <View>
                    <Text style={styles.title}>消息提示</Text>
                    <Button
                        borderRadius={4}
                        backgroundColor={'teal'}
                        containerViewStyle={styles.button}
                        onPress={this.showToast}
                        title='toast'/>
                </View>
                <View>
                    <Text style={styles.title}>列表渲染</Text>
                    <Button
                        borderRadius={4}
                        backgroundColor={'teal'}
                        containerViewStyle={styles.button}
                        onPress={this.goList}
                        title='跳转列表'/>
                </View>
                <Toast
                    position='center'
                    ref="toast"/>
            </View>
        )
    }

    getData = () => {
        console.log(123);
        API.getBannerList()
            .then(res => {
                console.log(res);
                if (res.code === 0) {
                    this.setState({
                        bannerList: res.data.bannerList
                    })
                }
            })
    }
    showToast = () => {
        this.refs.toast.show('hello world!');
    }
    goList = () => {
        const {navigate} = this.props.navigation;
        navigate('ListScreen')
    }
}

const styles = StyleSheet.create({
    home_wrapper: {
        padding: 15
    },
    button: {
        width: 100,
        padding: 0,
        marginLeft: 0,
        marginRight: 0
    },
    title: {
        fontSize: 16,
        marginVertical: 10
    }
})
