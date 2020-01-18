import Main from '@c/Main'


const router = {
    path: '/material',
    name: 'material',
    component: Main,
    children:[
        {
            path: 'a',
            name: 'a',
            component: () => import('@v/A')
        }
    ]
}

export default router
