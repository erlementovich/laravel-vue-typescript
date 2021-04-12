<template>
    <div class="main">
        <router-view/>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class MainLayout extends Vue {
    }
</script>

<style scoped>

</style>
