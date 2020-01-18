import Main from '@c/Main'

const router = {
    path: '/',
    name: 'patient',
    redirect: '/patient/foo',
    component: Main,
    children: [
        {
            path: '/patient/foo',
            name: 'patient-foo',
            component: () => import('@v/Foo')
        }
    ]
};

export default router
