<template>
    <div class="m-2 bg-blue-300 h-50 shadow-md rounded">
        <img :src="card_image" class="w-11/20 m-auto pt-2 pb-2">
        <div class="w-19/20 bg-blue-100 p-2 rounded m-auto">
            {{ nom }}
        </div>
        {{ description }}
    </div>
</template>

<script>
    import card_image from "../assets/img/dark_unicorn_butterfly.jpg"

    export default {
        name: "unicornCard",
        data() {
            return {
                card_image: card_image
            }
        },
        props: {
            nom: {
                type: String,
                default: `Prop "nom" à définir`
            },
            description: {
                type: String,
                default: `Prop "description" à définir`
            },
            image: {
                type: String,
                default: `../assets/img/logo_eye.webp`
                //TODO définir un traitement pour importer l'image
            },
        },
        computed: {
            image_import() {
                return import(this.image);
            }
        },
    }
</script>

<style scoped>

</style>