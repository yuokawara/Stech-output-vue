<template>
<v-container fluid>
    <v-row>
        <v-col>
            <v-calendar v-model="picker"></v-calendar>
            <v-row justify="center">
                <v-card elevation="0">
                    <v-card-title v-text="picker"></v-card-title>
                </v-card>
            </v-row>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import LikeButton from "~/components/LikeButton.vue";
export default {
    data() {
        return {
            picker: new Date().toISOString().substr(0, 10),
        };
    },
};
</script>
