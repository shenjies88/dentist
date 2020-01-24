let id = 1;
let list = [{
    id,
    name: '沈杰',
    sex: '男',
    age: 24,
    phone: '18178324804',
    fixedPhone: '',
    contactAddress: '居住地址',
    note: '备注',
    createAt: new Date()
}];
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
        data.id = id;
        id++;
        list.push(data);
        return {
            code: 0,
            message: 'success',
            data: null
        }
    },
    deletePatientBase: function (request) {
        let ids = JSON.parse(request.body);
        ids.forEach(e => {
            let element = list.find(x => x.id === e);
            list.splice(element, 1);
        });
        return {
            code: 0,
            message: 'success',
            data: null
        }
    },
    updatePatientBase: function (request) {
        let data = JSON.parse(request.body);
        let find = list.find(x => x.id === data.id);
        list.splice(find, 1, data);
        return {
            code: 0,
            message: 'success',
            data: null
        }
    }
};

export default patientBaseMock
