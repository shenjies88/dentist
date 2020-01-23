import Main from '@/components/Main'

const router = {
    path: '/patient',
    name: 'patient',
    redirect: '/patient/base',
    component: Main,
    meta: {
        title: '人员',
    },
    children: [
        {
            path: 'base',
            name: 'patient-base',
            meta: {
                title: '人员基本信息'
            },
            component: () => import('@/views/PatientBase')
        }
    ]
};

export default router
