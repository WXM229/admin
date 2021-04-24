import Layout from '@/layout'

const myrouter={
  path: '/charts',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Charts',
  children: [
    {
      path: 'keyboard',
      component: () => import('@/views/charts/keyboard'),
      name: 'KeyboardChart',
      meta: { title: 'Keyboard Chart', noCache: true }
    },
  ]
}
export default myrouter