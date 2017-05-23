import xinshouzhiyin from './../../components/xinshouzhiyin.vue'
import tuijianyouli from './../../components/tuijianyouli.vue'
import remenghuodong from './../../components/remenghuodong.vue'
import jifenshangcheng from './../../components/jifenshangcheng.vue'
import huiyuanzhongxin from './../../components/huiyuanzhongxin.vue'
export default {
    data(){
        return {
            route : [
                    {
                            path:'/xinshouzhiyin',
                            component:xinshouzhiyin
                        },
                        {
                            path:'/tuijianyouli',
                            component:tuijianyouli
                        },
                        {
                            path:'/remenghuodong',
                            component:remenghuodong
                        },
                        {
                            path:'/jifenshangcheng',
                            component:jifenshangcheng
                        },
                        {
                            path:'/huiyuanzhongxin',
                            component:huiyuanzhongxin
                        }
                ]
        }
    }
     

}
