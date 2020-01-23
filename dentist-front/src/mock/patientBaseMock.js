let list = []

const patientBaseMock = {
    getPatientBaseList: function () {
        return {
            code: 0,
            message: 'success',
            data: {
                list,
                count: 0
            }
        }
    }
}

export default patientBaseMock
