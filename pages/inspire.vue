<template>
<v-layout justify-center align-center>
    <v-flex xs12 sm8 md6 lg4 xl2>
        <v-app>
            <v-app-bar>
                <template>
                    <h2>Test</h2>
                </template>
            </v-app-bar>
            <v-main>
                <MyCalender />
            </v-main>
            <v-bottom-navigation>
                <LikeButton />
            </v-bottom-navigation>
            <v-footer app></v-footer>
        </v-app>
    </v-flex>
</v-layout>
</template>

<script>
import MyCalender from "~/components/MyCalender.vue";
import LikeButton from "~/components/LikeButton.vue";
export default {
    components: {
        MyCalender,
        LikeButton,
    },
    data: {},
    computed: {},

    method: {},

    mounted: {},
};
</script>
