<template>
    <h3>영화목록</h3>

    <ul class="movies-list" ref="moviesWrap" @scroll="chkListScroll">
        <li v-for="item in movieList" :key="item">
            <p>{{item.name}}</p>
            <p>{{item.summary}}</p>
        </li>
        
        <li v-if="movieListTotal == 0">
            목록이 없습니다.
        </li>
    </ul>
    <div class="total">전체: {{movieListTotal}}</div>
    <button class="btn_top" @click="goTop()">Top</button>
    <div class="loading" v-if="showLoading">로딩중</div>
    <div class="guideLast" v-if="showGuideLast">마지막 목록입니다.</div>
</template>

<script>
import apiManagers from '@/api/manager'

export default {
    name: 'ListMovies-page',
    
    data() {
        return {
            movieList: [],
            movieListTotal: 0,
            pageNum: 0,
            listLimit: 7,
            showLoading: false,
            showGuideLast: false
        }
    },
    
    mounted() {
        this.getList(this.pageNum, this.listLimit);
    },

    methods: {
        getList(pgNum, limit) {
            apiManagers
                .listMovie(pgNum, limit)
                .then((response) => {
                    this.movieList = this.movieList.concat(response.data.rows);
                    this.movieListTotal = response.data.total;
                    this.showLoading= false;
                })
                .catch((e) => {
                    console.log(e);
                });
        },
        
        chkListScroll(e) {
            const { scrollHeight, scrollTop, clientHeight } = e.target;
            const isAtTheBottom = scrollHeight === scrollTop + clientHeight;
            if (isAtTheBottom) {
                if(this.movieList.length !=  this.movieListTotal) {
                    this.loadListMore();
                } else {
                    setTimeout(() => {this.showGuideLast= true}, 500);
                }
                setTimeout(() => {this.showGuideLast= false}, 1200);
            }
        },
        loadListMore() {
            this.showLoading= true;
            this.pageNum++;
            this.getList(this.pageNum, this.listLimit);
        },

        goTop() {
            this.$refs["moviesWrap"].scroll({ top: 0, behavior: "smooth" });
        },
    }

};
</script>