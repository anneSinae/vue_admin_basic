<template>
    <SideMenu />
    <div class="container">
        <router-view />
    </div>
</template>

<script>
import SideMenu from './SideMenu.vue'

export default {
    name: 'LoginDone-page',

    components: {SideMenu}
}
</script>