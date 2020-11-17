<template>
<v-btn icon @click="changebutton" fab elevation="0">
    <v-icon color="white" v-if="isActive" large>mdi mdi-heart</v-icon>
    <v-icon color="red" v-else large>mdi mdi-heart</v-icon>
</v-btn>
</template>

<script>
export default {
    data: {
        isActive: false,
    },

    methods: {
        changebutton: function () {
            this.isActive = !this.isActive;
        },
    },
};
</script>
