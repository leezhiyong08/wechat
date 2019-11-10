import Vue from 'vue'
import Router from 'vue-router'
import Chat from '../components/chat/chat'
import Address from '../components/address/address'
import Find from '../components/find/find'
import Me from '../components/me/me'
import Chatroom from '../components/chatroom/chatroom'
import Search from '../components/search/search'
import AddressDetail from '../components/address/address-detail/address-detail'
import FriendCircle from '../components/find/friend-circle/friend-circle'
import Scan from '../components/find/scan/scan'
import Shake from '../components/find/shake/shake'
import ChatroomUser from '../components/chatroom/chatroom-user/chatroom-user'
import AddressMore from '../components/address/address-detail/address-more/address-more'
import Money from '../components/me/money/money'
import Collection from '../components/me/collection/collection'
import Album from '../components/me/album/album'
import Card from '../components/me/card/card'
import Set from '../components/me/set/set'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/chat'  // 微信组件
    },
    {
      path: '/search', // 搜索
      component: Search
    },
    {
      path: '/chatroom',  // 聊天打字界面
      component: Chatroom,
      children: [
        {
          path: 'user', // 用户
          component: ChatroomUser
        }
      ]
    },
    {
      path: '/chat',  // 第一栏：微信
      component: Chat
    },
    {
      path: '/address',  // 第二栏：通讯录
      component: Address,
      children: [
        {
          path: ':id', // 传入不同的id,就可以跳转到不同的子路由
          component: AddressDetail,
          children: [
            {
              path: 'more',
              component: AddressMore
            }
          ]
        }
      ]
    },
    {
      path: '/find',  // 第三栏：发现
      component: Find,
      children: [
        {
          path: 'friendcircle',
          component: FriendCircle
        },
        {
          path: 'scan',  // 扫一扫
          component: Scan
        },
        {
          path: 'shake',  // 摇一摇
          component: Shake
        }
      ]
    },
    {
      path: '/me',  // 第四栏：我
      component: Me,
      children: [
        {
          path: 'money', // 钱包
          component: Money
        },
        {
          path: 'collection',  // 收藏
          component: Collection
        },
        {
          path: 'album',  // 相册
          component: Album
        },
        {
          path: 'card', // 卡包
          component: Card
        },
        {
          path: 'set',  // 设置
          component: Set
        }
      ]
    }
  ]
})
