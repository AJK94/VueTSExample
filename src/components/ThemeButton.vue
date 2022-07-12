<template>
    <v-btn icon="mdi-theme-light-dark" @click="toggleTheme"> </v-btn>
</template>

<script lang='ts'>
    import { useTheme } from 'vuetify'

    export default {
        setup() {
            const theme = useTheme()

            return {
                theme,
                toggleTheme: () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
            }
        }
    }
</script>