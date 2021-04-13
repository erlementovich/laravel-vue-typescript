<template>
    <div class="auth">
        <router-view/>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class AuthLayout extends Vue {

    }
</script>

<style scoped>

</style>
