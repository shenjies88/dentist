import axios from '@/libs/api.request'
import config from '@/config'

const baseUrl = '/patient/base';

const getPatientBaseList = (data) => {
    return axios.request({
        url: config.preUrl + baseUrl + '/list',
        data,
        method: 'post'
    })
};

const deletePatientBase = (data) => {
    return axios.request({
        url: config.preUrl + baseUrl,
        data,
        method: "delete"
    })
};

const addPatientBase = (data) => {
    return axios.request({
        url: config.preUrl + baseUrl,
        data,
        method: "post"
    })
};

const updatePatientBase = (data, id) => {
    return axios.request({
        url: config.preUrl + baseUrl + '/' + id,
        data,
        method: "put"
    })
};

export default {
    getPatientBaseList,
    deletePatientBase,
    addPatientBase,
    updatePatientBase
}
