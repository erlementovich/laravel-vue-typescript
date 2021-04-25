<template>
    <v-card
        :loading="loading">
        <template slot="progress">
            <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
            ></v-progress-linear>
        </template>

        <v-img
            height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"/>

        <v-card-title>Cafe Badilico</v-card-title>

        <v-card-text>
            <v-row
                align="center"
                class="mx-0">
                <v-rating
                    :value="4.5"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"/>
                <div class="grey--text ml-4">
                    4.5 (413)
                </div>
            </v-row>

            <div class="my-4 subtitle-1">
                $ • Italian, Cafe
            </div>

            <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
        </v-card-text>

        <v-divider class="mx-4"/>

        <v-card-title>Tonight's availability</v-card-title>

        <v-card-text>
            <v-chip-group
                v-model="selection"
                active-class="deep-purple accent-4 white--text"
                column>
                <v-chip>5:30PM</v-chip>

                <v-chip>7:30PM</v-chip>

                <v-chip>8:00PM</v-chip>

                <v-chip>9:00PM</v-chip>
            </v-chip-group>
        </v-card-text>

        <v-card-actions>
            <v-btn
                color="deep-purple lighten-2"
                text
                @click="reserve">
                Reserve
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class Card extends Vue {
        public loading: boolean = false;
        public selection: number = 1;

        reserve(): void {
            this.loading = !this.loading;
            setTimeout(() => (this.loading = false), 1000)
        }
    }
</script>
