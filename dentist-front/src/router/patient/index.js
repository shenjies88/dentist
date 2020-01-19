import Main from '@c/Main'

const router = {
    path: '/patient',
    name: 'patient',
    redirect: '/patient/base',
    component: Main,
    meta: {
        title: '病人'
    },
    children: [
        {
            path: 'base',
            name: 'patient-base',
            meta: {
                title: '病人基本信息'
            },
            component: () => import('@v/PatientBase')
        }
    ]
};

export default router
