import axios from '@/libs/api.request'
import config from '@/config'

const baseUrl = '/user';

const login = (data) => {
    return axios.request({
        url: config.preUrl + baseUrl + '/login',
        data,
        method: 'post'
    })
};

const getUserInfo = () => {
    return axios.request({
        url: config.preUrl + baseUrl + '/info',
        method: 'get'
    })
};

const loginOut = () => {
    return axios.request({
        url: config.preUrl + baseUrl + '/logout',
        method: 'post'
    })
};

export default {
    login,
    getUserInfo,
    loginOut
}
