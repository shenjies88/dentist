import Main from '@c/Main'


const router = {
    path: '/material',
    name: 'material',
    redirect: '/material/ada',
    component: Main,
    meta: {
        title: '物资'
    },
    children: [
        {
            path: 'ada',
            name: 'material-ada',
            meta: {
                title: 'Material'
            },
            component: () => import('@v/Material')
        }
    ]
};

export default router
