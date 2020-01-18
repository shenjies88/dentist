import Main from '@c/Main'

const router = {
    path: '/',
    name: 'patient',
    redirect: '/patient/foo',
    component: Main,
    meta: {
        title: 'Foo的首页'
    },
    children: [
        {
            path: '/patient/foo',
            name: 'patient-foo',
            meta: {
                title: 'Foo'
            },
            component: () => import('@v/Foo')
        }
    ]
};

export default router
