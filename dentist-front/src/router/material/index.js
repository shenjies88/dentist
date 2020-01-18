import Main from '@c/Main'


const router = {
    path: '/material',
    name: 'material',
    component: Main,
    children: [
        {
            path: 'ada',
            name: 'material-ada',
            component: () => import('@v/Ada')
        }
    ]
};

export default router
