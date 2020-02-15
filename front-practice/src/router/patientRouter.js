import Main from '@/components/Main'

const router = {
    path: '/',
    name: 'patient',
    redirect: '/patient/base',
    component: Main,
    meta: {
        title: '人员',
    },
    children: [
        {
            path: '/patient/base',
            name: 'patient-base',
            meta: {
                title: '人员基本信息'
            },
            component: () => import('@/views/PatientBase')
        }
    ]
};

export default router
