import React, {Component} from 'react'
import {
    View,
    Text,
    FlatList,
    RefreshControl,
    TouchableOpacity,
    Image
} from 'react-native'
import BaseComponet from '../../components/baseComponent'
import screen from '../../assets/js/screen'
import API from '../../assets/js/api'

export default class My extends BaseComponet {
    constructor(props) {
        super(props);
        this.state = {
            fundList: [], // 数据
            refreshing: false, // 刷新开关
            page: 1
        }
    }

    componentDidMount() {
        this.getData(this.state.page);
    }

    getData = (page, cb) => {
        API.getGitList({
            q: 'javascript',
            sort: 'stars',
            page: page
        })
            .then(res => {
                this.setState({
                    fundList: [...this.state.fundList, ...res.items]
                })
            })
            .then(() => {
                cb && cb();
            })
    }

    render() {
        return (
            <View>
                <FlatList
                    style={{
                        height: screen.height - 112,
                    }}
                    data={this.state.fundList}
                    renderItem={this.getView}
                    keyExtractor={this._keyExtractor}
                    ListHeaderComponent={this._header}
                    ListFooterComponent={this._footer}
                    ListEmptyComponent={this.createEmptyView()}
                    refreshControl={<RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                    />}

                    getItemLayout={(data, index) => ({
                        length: 100, offset: (100) * index, index
                    })}
                    onEndReached={this._onEndReached}
                    onEndReachedThreshold={2}
                />
            </View>
        )
    }

    /**
     * key值
     * @param item
     * @param index
     * @returns {string}
     * @private
     */
    _keyExtractor = (item, index) => `${item.id}`

    // list头部
    _header = () => {
        return null;
        return (
            <Text>头部</Text>
        )
    }

    // list底部
    _footer = () => {
        return null;
        return (
            <Text>底部</Text>
        )
    }

    // 数据加载中渲染视图
    createEmptyView = () => {
        return (
            <Text style={{
                fontSize: 18,
                alignSelf: 'center',
                marginTop: 30
            }}>数据加载中...</Text>
        );
    }

    // 下拉刷新
    _onRefresh = () => {
        this.setState({
            refreshing: true
        })
        this.getData(this.state.page, () => {
            this.setState({
                refreshing: false
            })
        })
    }

    // 上拉加载
    _onEndReached = () => {
        console.log(123);
        this.setState({
            page: ++this.state.page
        })
        this.getData(this.state.page)
    }

    getView = (item) => {
        const {navigate} = this.props.navigation;
        const fund = item.item;
        return (
            <TouchableOpacity
                onPress={() => {
                    navigate('ListItemScreen',{
                        html_url: fund.owner.html_url,
                        title: fund.name
                    })
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        padding: 10,
                    }}
                >
                    <Image
                        style={{width: 80, height: 80, marginRight: 15}}
                        source={{uri: fund.owner.avatar_url}}></Image>
                    <Text
                        style={{
                            flex: 1,
                            marginRight: 15
                        }}
                    >{fund.name}</Text>
                </View>
            </TouchableOpacity>

        )
    }
}
