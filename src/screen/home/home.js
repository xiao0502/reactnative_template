import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity
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
            bannerList: [],
        }

    }

    render() {
        return (
            <ScrollView style={styles.home_wrapper}>
                <Text style={styles.title}>事件请求封装</Text>
                <Button
                    borderRadius={4}
                    backgroundColor={'teal'}
                    containerViewStyle={styles.button}
                    onPress={this.getData}
                    title='跳转请求'/>
                <View>
                    <Text style={styles.title}>消息提示</Text>
                    <Button
                        borderRadius={4}
                        backgroundColor={'teal'}
                        containerViewStyle={styles.button}
                        onPress={this.showToast}
                        title='Toast'/>
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
                <View>
                    <Text style={styles.title}>三级联动</Text>
                    <Button
                        borderRadius={4}
                        backgroundColor={'teal'}
                        containerViewStyle={styles.button}
                        onPress={this.goPicker}
                        title='跳转联动'/>
                </View>
                <View>
                    <Text style={styles.title}>图片预览缩放</Text>
                    <Button
                        borderRadius={4}
                        backgroundColor={'teal'}
                        containerViewStyle={styles.button}
                        onPress={() => {
                            this.goImageView(-1)
                        }}
                        title='跳转图片'/>
                </View>
                <View>
                    <Text style={styles.title}>动画</Text>
                    <Button
                        borderRadius={4}
                        backgroundColor={'teal'}
                        containerViewStyle={styles.button}
                        onPress={this.goAnimation}
                        title='跳转动画'/>
                </View>
                <View style={{marginBottom: 15}}>
                    <Text style={styles.title}>轮播图</Text>
                    <Button
                        borderRadius={4}
                        backgroundColor={'teal'}
                        containerViewStyle={styles.button}
                        onPress={this.goSwiper}
                        title='跳转轮播'/>
                </View>
                <Toast
                    position='center'
                    ref="toast"/>
            </ScrollView>
        )
    }

    getData = () => {
        const {navigate} = this.props.navigation;
        navigate('DataScreen')
    }
    showToast = () => {
        this.refs.toast.show('hello world!');
    }
    goList = () => {
        const {navigate} = this.props.navigation;
        navigate('ListScreen')
    }
    goPicker = () => {
        const {navigate} = this.props.navigation;
        navigate('RnpickerScreen')
    }
    goSwiper = () => {
        const {navigate} = this.props.navigation;
        navigate('SwiperScreen')
    }
    goImageView = (index) => {
        const {navigate} = this.props.navigation;
        navigate('ImageViewScreen',{
            imgs: this.state.bannerList,
            index: index
        })
    }
    goAnimation = () => {
        const {navigate} = this.props.navigation;
        navigate('AnimationScreen')
    }
}

const styles = StyleSheet.create({
    home_wrapper: {
        paddingHorizontal: 15
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
