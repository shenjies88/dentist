import Main from '@c/Main'

const router = {
    path: '/patient',
    name: 'patient',
    component: Main,
    children:[
        {
            path: 'b',
            name: 'b',
            component: () => import('@v/B')
        }
    ]
}

export default router
