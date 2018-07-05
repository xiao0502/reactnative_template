import http from "./http";
export default {
    // 获取轮播图列表
    getBannerList() {
        return http.get('bannerList')
    },
    // 获取github 列表
    getGitList({q,sort,page}) {
        return http.get('search/repositories',{
            q, sort,page
        },'https://api.github.com/')
    }
};
