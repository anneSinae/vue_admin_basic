<template>
    <h3>관리자목록</h3>
    <DateRange />

    <ul class="admin-list">
        <li v-for="item in adminList" :key="item" @click="rowClicked(item)">
            <p>{{item.email}}</p>
            <p>{{item.name}}</p>
            <p>{{item.phoneNumber}}</p>
        </li>
        
        <li v-if="adminListTotal == 0">
            목록이 없습니다.
        </li>
    </ul>
    <div class="total">전체: {{adminListTotal}}</div>

    <DetailModal 
        v-if="showDetail" 
        @close-modal="showDetail=false" 
        class="fade-in"
        :detailData="itemData"
     />
</template>

<script>
import apiManagers from '@/api/manager'
import DateRange from '@/components/DateRange.vue'
import DetailModal from '@/components/DetailModal.vue'

export default {
    name: 'List-page',
    
    components: {DateRange, DetailModal},

    data() {
        return {
            adminList: null,
            adminListTotal: 0,
            showDetail: false,
            itemData: null,
        }
    },
    
    mounted() {
        apiManagers
            .list()
            .then((response) => {
                console.log(response.data.rows);
                this.adminList = response.data.rows;
                this.adminListTotal = this.adminList.length;
            })
            .catch((e) => {
                console.log(e);
            });
    },

    methods: {
        rowClicked(data) {
            this.showDetail = true;
            this.itemData = data;
            console.log(data, "test")
        },
    }

};
</script>