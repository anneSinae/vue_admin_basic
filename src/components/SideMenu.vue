<template>
    <div class="navi-box">
        <router-link to="/">
            <h1 class="logo"><img alt="Vue logo" src="@/assets/logo.png">Dashboard</h1>
        </router-link>

        <el-menu
            @select="menuSelected"
            class="navi"
        >
            <el-menu-item-group>
                <el-menu-item index="/manager/list">
                    <i class="fas fa-address-book"></i>
                    <span>관리자목록</span>
                </el-menu-item>
                <el-menu-item index="/manager/findPassword">
                    <i class="fas fa-unlock-alt"></i>
                    <span>비번찾기</span>
                </el-menu-item>
                <el-menu-item index="/statis">
                    <i class="fas fa-pie-chart"></i>
                    <span>통계관리</span>
                </el-menu-item>
                <el-menu-item index="/movies">
                    <i class="fas fa-pie-chart"></i>
                    <span>영화목록</span>
                </el-menu-item>
            </el-menu-item-group>
        </el-menu>

        <a href="/logout" class="btn-logout">로그아웃</a>
    </div>
</template>

<script>
export default {
    methods: {
        menuSelected: function (path) {
            this.$router.push({path: path});
        }
    },
}
</script>