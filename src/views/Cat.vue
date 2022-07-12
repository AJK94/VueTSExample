<template>
   
    <v-container>


        <h1 class="display-2 font-weight-bold mb-3">
            {{breedDetail.name}}
        </h1>
        <a>
            {{breedDetail.description}}
        </a>
        <v-carousel v-if="loaded" hide-delimiters>
            <v-carousel-item v-for="(image, i) in breedImages"
                             :key="image.id"
                             :src="image.url">

            </v-carousel-item>
        </v-carousel>

    </v-container>
</template>


<script lang='ts'>
    import { defineComponent } from 'vue'
    import CatDataService from "../services/CatDataService";
    import CatBreed from "../types/CatBreed";
    import CatBreedImage from "../types/CatBreedImage";
    import ResponseData from "../types/ResponseData";
    import logo from '../assets/logo.svg'

    export default defineComponent({
        name: 'Cats',
        data() {
            return {
                breedDetail: {} as CatBreed,
                breedImages: [] as CatBreedImage[],
                logo,
                loaded: false
            };
        },
        methods: {
            getBreedDetail(breed: string) {
                CatDataService.get(breed)
                    .then((response: ResponseData) => {
                        if (response.data.length == 1) {
                            this.breedDetail = response.data[0];
                            this.getBreedImages(this.breedDetail.id);
                        }
                        else
                            console.log("multiple breeds")
                    })
                    .catch((e: Error) => {
                        console.log(e);
                    });
            },
            getBreedImages(breed: string) {
                CatDataService.getImages(breed)
                    .then((response: ResponseData) => {
                        this.breedImages = response.data;
                        this.loaded = true
                    })
                    .catch((e: Error) => {
                        console.log(e);
                    });
            }

        },
        beforeMount() {
            let breed: string = this.$route.params.breed.toString();

            if (breed != "" || breed != null)
                this.getBreedDetail(breed);
        },
    })
</script> 