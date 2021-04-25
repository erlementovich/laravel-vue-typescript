<template>
    <v-app class="application">
        <v-main>
            <router-view/>
        </v-main>
    </v-app>

</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'

    @Component
    export default class App extends Vue {

    }
</script>
<style lang="scss">
    @import "@/assets/styles/main.scss";
</style>

