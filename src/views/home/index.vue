<template >
    <div class = "home-box">
        <home-nav/>
        <router-view></router-view>
    </div>
</template>
<!-- 调用   <mycom></mycom> -->
<script>
import HomeNav from './HomeNav'
import HomeList from './HomeList'
export default {
    components:{
        HomeNav,
        HomeList
    }
}
</script>

<style lang="stylus" scoped>
  .home-box 
    flex 1 
    display flex 
    flex-direction column
    overflow hidden
</style>