<template>
    <h3 class="title">Main</h3>
    <div style="margin: 15px 0; padding: 15px; border: 1px solid #ddd;">
        {{ this.$store.getters.mySample }}<br>
        <button @click="resetSample">전역변수 sample 업데이트</button>
        <button @click="removeSample">전역변수 sample 데이터삭제</button>
    </div>
    <Modal>
        <SampleModal />
    </Modal>
</template>

<script>
import Modal from '../components/Modal.vue'
import SampleModal from '../components/SampleModal.vue'
import store from '@/store'

export default {
    name: 'Main-page',
    components: { 
        Modal, 
        SampleModal 
    },
    methods: {
        resetSample() {
            store.dispatch("updateSample", "my sample(global data) update");
        },
        removeSample() {
            store.dispatch("updateSample", "삭제됨");
        }
    }
};
</script>