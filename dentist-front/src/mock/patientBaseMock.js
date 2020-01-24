let list = [];

const patientBaseMock = {
    getPatientBaseList: function () {
        return {
            code: 0,
            message: 'success',
            data: {
                list,
                count: list.length
            }
        }
    },
    addPatientBase: function (request) {
        let data = JSON.parse(request.body);
        data.createAt = new Date();
        list.push(data);
        return {
            code: 0,
            message: 'success',
            data: null
        }
    }
};

export default patientBaseMock
