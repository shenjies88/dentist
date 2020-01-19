import Main from '@c/Main'

const router = {
    path: '/patient',
    name: 'patient',
    redirect: '/patient/foo',
    component: Main,
    meta: {
        title: '病人'
    },
    children: [
        {
            path: 'foo',
            name: 'patient-foo',
            meta: {
                title: 'Foo'
            },
            component: () => import('@v/Foo')
        }
    ]
};

export default router
