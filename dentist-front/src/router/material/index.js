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
                title: 'Ada'
            },
            component: () => import('@v/Ada')
        }
    ]
};

export default router
