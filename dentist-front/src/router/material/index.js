import Main from '@c/Main'


const router = {
    path: '/material',
    name: 'material',
    redirect: '/material/ada',
    component: Main,
    meta: {
        title: '物资',
        permissions: ['material']
    },
    children: [
        {
            path: 'ada',
            name: 'material-ada',
            meta: {
                title: 'Material',
                permissions: ['material-ada']
            },
            component: () => import('@v/Material')
        }
    ]
};

export default router
