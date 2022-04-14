<template>
    <div class="modal-wrap">
        <div class="modal">
            <div class="detail">
                <h1>목록상세페이지</h1>
                <p>{{ detailData.email }}</p>
                <p>{{ detailData.name }}</p>
                <p>{{ detailData.phoneNumber }}</p>
            </div>
            <el-button @click="$emit('close-modal')">닫기</el-button>
        </div>
    </div>
</template>

<script>

export default {
    name: 'DetailModal-component',

    props: {
        detailData: {},
    },

    mounted() {
        console.log(this.detailData, "sinae");
    }
}
</script>