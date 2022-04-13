<template>
  <Login v-if="!this.$store.getters.isLogined" />
  <Main v-if="this.$store.getters.isLogined" />
</template>

<script>
import Login from '../components/Login.vue'
import Main from '../components/Main.vue'

export default {
  name: 'Home-index',
  components: { Login, Main }
}
</script>

<style scoped>
</style>
