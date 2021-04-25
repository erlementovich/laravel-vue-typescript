<template>
    <v-app>
        <v-navigation-drawer app>
        </v-navigation-drawer>

        <v-app-bar app>
        </v-app-bar>

        <v-main>

            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-main>

        <Footer/>
    </v-app>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import Footer from "@/ui/components/footer/Footer.vue";

    @Component({
        components: {Footer}
    })
    export default class App extends Vue {

    }
</script>
<style lang="scss">
    @import "@/assets/styles/main.scss";
</style>

