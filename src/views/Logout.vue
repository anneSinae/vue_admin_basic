<template>
    <h3>로그아웃</h3>
</template>

<script>
import apiManagers from '@/api/manager'

export default {
  name: 'Logout-page',

  mounted() {
      apiManagers.signout();
      this.$router.push({path: "/"});
  }
}
</script>