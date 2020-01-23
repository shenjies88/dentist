const tokenUtl = {
    getToken: function () {
        return localStorage.getItem('token')
    },
    setToken: function (token) {
        localStorage.setItem('token', token)
    },
    removeToken: function () {
        localStorage.removeItem('token')
    }
}

export default tokenUtl;
