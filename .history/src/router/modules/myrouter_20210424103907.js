import Layout from '@/layout'

const myrouter={
  path: '/message',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Charts',
  children: [
    {
      path: 'keyboard',
      component: () => import('@/views/message/index'),
      name: 'message',
      meta: { title: 'Keyboard Chart', noCache: true }
    },
  ]
}
export default myrouter