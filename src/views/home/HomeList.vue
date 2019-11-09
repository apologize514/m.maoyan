<template>
     <div class="tab-content">
    <div class="page n-hot active" data-hot=".n-hot" data-cid="c_dmLad">
      <div class="list-wrap" style="margin-top: 0px;">
        <div v-if = "movies">
          <home-item :data = "item" v-for = "item in movies.movieList" :key = "item.id"></home-item>
        </div>
      </div>
    </div>
    <Loading v-if = "LoadingFlag"></Loading>
  </div>
</template>

<script>
import HomeItem from './HomeItem'
import BScroll from 'better-scroll';
import _ from 'loadsh'
import { mapActions ,mapState} from 'vuex'
import { Toast } from 'mint-ui'

export default {
  props: ['movies'],
  components: {
    HomeItem
  },
   computed: {
    ...mapState({
      LoadingFlag: state => state.home.LoadingFlag
    })
  },
  methods:{
    ... mapActions (['getComingMoving','showLoading','hideLoading'])
  },
 mounted(){
    let count = 0

   const bs = new BScroll('.page',{
     pullUpLoad:{
       threshold:50
     }
   })

   bs.on('pullingUp',() => {
    const movieIds = this.movies.movieIds.slice(12)
    const ids = _.chunk(movieIds,10)
    if(count == ids.length){
      Toast({
          message: '已经没有更多的电影了',
          position: 'bottom',
          duration: 2000
        });
      bs.finishPullUp()

    }
    if( count < ids.length-1 ){
      this.showLoading()
      console.log(ids[ count ])
     setTimeout(()=>{
        this.getComingMoving( ids[ count ].join(',') )
        this.hideLoading()
     },2000)
    }


     bs.finishPullUp()
    count ++
   })


 }
}
</script>




<style lang="stylus" scoped>
  .tab-content 
    height 100% 
    .page 
        height 100% 
</style>
