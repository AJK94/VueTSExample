<template>
    <v-layout>
        <v-app-bar>
                <v-img max-height="60"
                       max-width="150"
                       contain
                       :src="logo"
                     />
            <v-toolbar-title class="ml-5">

            </v-toolbar-title>
            <ThemeButton />

        </v-app-bar>
        <v-navigation-drawer permanent>
            <v-list density="compact"
                    nav>
                <v-list-item prepend-icon="mdi-home" value="home" to="/">
                    Home
                </v-list-item>
                <v-list-item prepend-icon="mdi-cat" value="cats" to="/cats">
                    Cats
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-main>
            <v-card>
                <router-view />
            </v-card>
        </v-main>
    </v-layout>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import ThemeButton from './components/ThemeButton.vue'
    import logo from './assets/SSC-blueprism-logo.png'

    export default defineComponent({
        name: 'App',

        components: {
            ThemeButton
        },

        data() {
            return {
                //
                logo
            }
        },
    })


</script>

<style>
    .v-list-item {
        color: #78797c !important;
    }


    a {
        text-decoration: none !important;
        color: #78797c !important;
    }
</style>
