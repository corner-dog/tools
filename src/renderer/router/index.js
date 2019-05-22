import Vue from 'vue'
import Router from 'vue-router'
import Md5 from '@/components/tools/Md5'
import XMLFormat from '@/components/tools/XMLFormat'
import FTP from '@/components/tools/Ftp'
import Base64 from '@/components/tools/Base64'
import Socket from '@/components/tools/Socket'
import Rsa from '@/components/tools/Rsa'
import Xterm from '@/components/tools/Xterm'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '/md5',
      name: 'md5-page',
      component: Md5
    },
    {
      path: '/xml',
      name: 'XMLFormat-page',
      component: XMLFormat
    },
    {
      path: '/ftp',
      name: 'ftp-page',
      component: FTP
    },   
    {
      path: '/base64',
      name: 'base64-page',
      component: Base64
    },
    {
      path: '/socket',
      name: 'socket-page',
      component: Socket
    },
    {
      path: '/rsa',
      name: 'rsa-page',
      component: Rsa
    },
    {
      path: '/xterm',
      name: 'xterm-page',
      component: Xterm
    }
  ]
})
