import Vue from 'vue'
import Router from 'vue-router'
import PersonalIndex from "@/pages/personal/personalIndex"
import PersonalStar from "@/pages/personal/personalStar"
import PersonalRegard from "@/pages/personal/personalRegard"
import SheZhi from "@/pages/personal/sheZhi"
import ZiLiao from "@/pages/personal/ziLiao"
import FanKui from "@/pages/personal/fanKui"
import Erweima from "@/pages/personal/erweima"
import Xiugaimima from "@/pages/personal/xiugaimima"
import Xiugaibangding from "@/pages/personal/xiugaibangding"
import Bianjinicheng from "@/pages/personal/bianjinicheng"
import Gexingqianming from "@/pages/personal/gexingqianming"
import Fensiwang from "@/pages/personal/fensiwang"
import Shoujihao from "@/pages/personal/shoujihao"
import Oufenhao from "@/pages/personal/oufenhao"






Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/personalIndex',
      name: 'personalIndex',
      component: PersonalIndex      
    },
    {
      path: '/personalRegard',
      name: 'personalRegard',
      component: PersonalRegard
    },
    {
      path: '/personalStar',
      name: 'personalStar',
      component: PersonalStar
    },
    {
      path: '/sheZhi',
      name: 'sheZhi',
      component: SheZhi
    },
    {
      path: '/ziLiao',
      name: 'ziLiao',
      component: ZiLiao
    },
     {
      path: '/fanKui',
      name: 'fanKui',
      component: FanKui
    },
    {
      path: '/erweima',
      name: 'erweima',
      component: Erweima
    },
    {
      path: '/xiugaimima',
      name: 'xiugaimima',
      component: Xiugaimima
    },
    {
      path: '/xiugaibangding',
      name: 'xiugaibangding',
      component: Xiugaibangding
    },
    {
      path: '/bianjinicheng',
      name: 'bianjinicheng',
      component: Bianjinicheng
    },
    {
      path:'/gexingqianming',
      name:'gexingqianming',
      component:Gexingqianming
    },
    {
       path:'/fensiwang',
      name:'fensiwang',
      component:Fensiwang
    },
    {
      path:'/shoujihao',
      name:'shoujihao',
      component:Shoujihao
    },
    {
       path:'/oufenhao',
      name:'oufenhao',
      component:Oufenhao
    }
  ]
})
