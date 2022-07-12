<template>
    <v-container>
        <h1 class="display-2 font-weight-bold mb-3">
            Cats
        </h1>

        <v-table>
            <thead>
                <tr>
                    <th class="text-left">
                        Name
                    </th>
                    <th class="text-left">
                        Origin
                    </th>
                    <th class="text-left">
                        Hypoallergenic
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in breeds"
                    v-on:click="catDetail(item.name)"
                    class='clickable-row'
                    :key="item.name">
                    <td>{{ item.name }}</td>
                    <td>{{ item.origin }}</td>
                    <td><v-icon class="mr-3">{{item.hypoallergenic ? 'mdi-google-downasaur' : 'mdi-cat'}}</v-icon> </td>
                </tr>
            </tbody>
        </v-table>

    </v-container>
</template>

<script lang='ts'>
    import { defineComponent } from 'vue'
    import CatDataService from "../services/CatDataService";
    import CatBreed from "../types/CatBreed";
    import ResponseData from "../types/ResponseData";

    export default defineComponent({
        name: 'Cats',
        data() {
            return {
                breeds: [] as CatBreed[]             
            };
        },
        methods: {
            getAllBreeds() {
                CatDataService.getAllBreeds()
                    .then((response: ResponseData) => {
                        this.breeds = response.data;                       
                    })
                    .catch((e: Error) => {
                        console.log(e);
                    });
            },
            catDetail(breed : string) {              
                this.$router.push({ name: 'Cat', params: { breed: breed } });
            }
        },
        beforeMount() {
            this.getAllBreeds();
        },
    })
</script> 