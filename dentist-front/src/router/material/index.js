import Main from '@components/Main'


const router = {
    path: '/material',
    name: 'material',
    redirect: '/material/input',
    component: Main,
    meta: {
        title: '物资',
    },
    children: [
        {
            path: 'input',
            name: 'material-input',
            meta: {
                title: '物资购入',
            },
            component: () => import('@views/MaterialInput')
        }
    ]
};

export default router
