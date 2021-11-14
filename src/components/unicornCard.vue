<template>
    <div class="m-2 bg-blue-300 shadow-md">
        <img :src="image_import">
        <div class="w-64 h-xl bg-blue-100 p-2 rounded m-auto">
            {{ nom }}
        </div>
        {{ description }}
    </div>
</template>

<script>
    export default {
        name: "unicornCard",
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