<template>
    <h3 class="title">Main</h3>
    <Modal>
        <SampleModal />
    </Modal>
</template>

<script>
import Modal from '../components/Modal.vue'
import SampleModal from '../components/SampleModal.vue'

export default {
    name: 'Main-page',
    components: { 
        Modal, 
        SampleModal 
    }
};
</script>