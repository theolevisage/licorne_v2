<template>
    <div class="content">
        <div class="element w-4/10">
            <img :src="card_image">
            <div class="gestionarticles">
                <div class="titrearticles">
                    <h2>{{ nom }}</h2>
                </div>

                <div class="contentarticles">
                    {{ description}}
                </div>
            </div>
        </div>
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