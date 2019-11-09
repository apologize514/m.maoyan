<template>
    <div>
        <home-list :movies = "movies"></home-list>
    </div>
</template>

<script>
import HomeList from './HomeList'
export default {
    components:{
        HomeList
    },
    mounted(){
        this.$store.dispatch('getMovies')
    },
    methods:{

    },
    computed:{
        movies(){
            return this.$store.state.home.movies
        }
    }
}
</script>




<style lang="stylus" scoped>
  div
    flex 1 
    overflow hidden
</style>
