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
</template>

<script>
import apiManagers from '@/api/manager'

export default {
    name: 'ListMovies-page',
    
    data() {
        return {
            movieList: null,
            movieListTotal: 0,
        }
    },
    
    mounted() {
        apiManagers
            .listMovie()
            .then((response) => {
                console.log(response.data.rows);
                this.movieList = response.data.rows;
                this.movieListTotal = this.movieList.length;
            })
            .catch((e) => {
                console.log(e);
            });
    },

    methods: {
        chkListScroll(e) {
            const { scrollHeight, scrollTop, clientHeight } = e.target;
            const isAtTheBottom = scrollHeight === scrollTop + clientHeight;
            if (isAtTheBottom) this.loadListMore();
        },
        loadListMore() {
            if (this.movieList.length < this.total) {
                console.log("more");
            }
        },

        goTop() {
            this.$refs["moviesWrap"].scroll({ top: 0, behavior: "smooth" });
        },
    }

};
</script>