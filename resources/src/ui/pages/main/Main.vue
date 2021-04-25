<template>
    <div>
        <div class="cards">
            <Card class="card-item" v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" :key="item"/>
        </div>
        <div>
            <TestForm/>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";

    import ExampleComponent from "@/ui/components/example/ExampleComponent.vue";
    import IconExampleName from "@/ui/icons/IconExampleName.vue";
    import Card from "@/ui/components/card/Card.vue";
    import TestForm from "@/ui/components/forms/TestForm.vue";

    @Component({
        components: {TestForm, Card, IconExampleName, ExampleComponent}
    })
    export default class Main extends Vue {
    }
</script>

<style lang="scss" scoped>
    .cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        grid-gap: 1.5em;

        .card-item {
            width: 100%;
        }
    }
</style>
