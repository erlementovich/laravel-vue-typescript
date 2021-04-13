<template>
    <svg>
        <symbol id="sym01" viewBox="0 0 150 110">
            <circle cx="50" cy="50" r="40" stroke-width="8" :stroke="iColor" :fill="iColor"/>
            <circle cx="90" cy="60" r="40" stroke-width="8" :stroke="iColor" :fill="iColor"/>
        </symbol>
        <use xlink:href="#sym01" x="0" y="0" width="100" height="50"/>
        <use xlink:href="#sym01" x="0" y="50" width="75" height="38"/>
        <use xlink:href="#sym01" x="0" y="100" width="50" height="25"/>
    </svg>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component
    export default class IconExampleName extends Vue {
        @Prop({default: '#222'}) iColor?: string
    }
</script>

<style scoped>

</style>
