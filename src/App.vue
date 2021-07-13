<template>
    <!-- <div id="nav">
    <router-link :to="{name: 'view-employee'}">View Employee</router-link>
  </div> -->
    <navbar />
    <div class="container">
        <router-view />
    </div>
</template>

<script>
import Navbar from "./components/navbar.vue";

export default {
    components: { Navbar },
};
</script>

<style lang="scss">
</style>
