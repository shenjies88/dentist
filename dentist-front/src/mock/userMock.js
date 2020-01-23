const userMock = {
    login: function () {
        return {
            code: 0,
            message: 'success',
            data: {
                userName: 'admin',
                password: 'password',
                permissions: [],
                token: '12345678901'
            }
        }
    },
    getUserInfo: function () {
        return {
            code: 0,
            message: 'success',
            data: {
                userName: 'admin',
                password: 'password',
                permissions: [],
                token: '12345678901'
            }
        }
    }
};

export default userMock
