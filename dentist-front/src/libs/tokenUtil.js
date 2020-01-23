const tokenUtl = {
    getToken: function () {
        return localStorage.getItem('token')
    },
    setToken: function (token) {
        localStorage.setItem('token', token)
    }
}

export default tokenUtl;
