<template>
    <h3>관리자목록</h3>
    <ul class="admin-list">
        <li v-for="item in adminList" :key="item">
            <p>{{item.email}}</p>
            <p>{{item.name}}</p>
            <p>{{item.phoneNumber}}</p>
        </li>
    </ul>
</template>

<script>
import apiManagers from '@/api/manager'

export default {
    name: 'List-page',

    data() {
        return {
            adminList: null,
        }
    },

    mounted() {
        apiManagers
            .list()
            .then((response) => {
                console.log(response.data.rows);
                this.adminList = response.data.rows;
            })
            .catch((e) => {
                console.log(e);
            });
    }

    
};
</script>