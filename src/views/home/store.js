import axios from 'axios'
const GET_MOVIES = 'GET_MOVIES'
const GET_COMING_MOVIES = 'GET_COMING_MOVIES'
const SHOW_LOADING = "SHOW_LOADING"
const HIDE_LOADING = "HIDE_LOADING"
const COMING = "COMING"

export default {
    state:{
        movies:null,
        name:'',
        LoadingFlag:false,
        coming:null
    },
    actions:{
        getMovies({ commit }){
            axios({
                url:'/data.json',
                params:{
                    token:''
                }
            }).then( res => {
                commit({
                    type : GET_MOVIES,
                    payload : res.data
                })
            })
        },
        getComingMoving({ commit },movieIds){
            axios({
                url:'/list.json',
                params:{
                    token:'',
                    movieIds
                }
            }).then( res => {
                commit({
                    type:GET_COMING_MOVIES,
                    payload: res.data
                })
            } )

        },
        showLoading({ commit }){
            commit({
                type:SHOW_LOADING
            })
        },
        hideLoading({ commit }){
            commit({
                type:HIDE_LOADING
            })
        },
        coming({ commit }){
           axios({
               url:'/coming.json',
               params:{
                ci: 50,
                token:'' ,
                limit: 10
               }
           }).then(res => {
               commit({
                type:COMING,
                payload: res.data
               })
           })
        }

    },
    mutations:{
        GET_MOVIES( state,action ){
            state.movies = action.payload
        },
        GET_COMING_MOVIES( state,action ){
            state.movies.movieList.push(...action.payload.coming)
        },
        SHOW_LOADING( state ){
            state.LoadingFlag = true
        },
        HIDE_LOADING( state ){
            state.LoadingFlag = false
        },
        COMING( state,action ){
            state.coming = action.payload
            // console.log(state.coming)
        }
    }
}