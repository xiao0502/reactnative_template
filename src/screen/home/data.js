import React, {Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native'
import BaseComponent from '../../components/baseComponent'
import screen from "../../assets/js/screen";
import API from "../../assets/js/api";
import {Button} from 'react-native-elements'

export default class Data extends BaseComponent {
    static navigationOptions = ({}) => {
        return {
            title: '数据列表'
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            bannerList: [],
        };
    }
    render() {
        return (
            <View>
                <Button
                    borderRadius={4}
                    backgroundColor={'teal'}
                    onPress={this.getData}
                    containerViewStyle={{width: 100,marginTop: 30}}
                    title='请求按钮'/>
                <View style={{
                    height: 130,
                    width: screen.width,
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: '#5b7c80',
                    marginVertical: 20,
                    paddingHorizontal: 15
                }}>

                    {
                        this.state.bannerList.map((item, index) => {
                            return <TouchableOpacity
                                key={index}
                                onPress={() => {
                                    console.log(123123);
                                    this.goImageView(index)
                                }}>
                                <Image
                                    style={{
                                        width: 100,
                                        height: 100,
                                        marginRight: 10
                                    }}

                                    source={{uri: item.img}}
                                    key={index}></Image>
                            </TouchableOpacity>
                        })
                    }
                </View>
            </View>
        )
    }

    getData = () => {
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

    goImageView = (index) => {
        const {navigate} = this.props.navigation;
        navigate('ImageViewScreen',{
            imgs: this.state.bannerList,
            index: index
        })
    }
}
