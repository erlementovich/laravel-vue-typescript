<template>
    <div>
        <ExampleComponent/>
        <IconExampleName i-color="green"/>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";

    import ExampleComponent from "@/ui/components/example/ExampleComponent.vue";
    import IconExampleName from "@/ui/icons/IconExampleName.vue";

    @Component({
        components: {IconExampleName, ExampleComponent}
    })
    export default class Main extends Vue {
    }
</script>

<style scoped>

</style>
