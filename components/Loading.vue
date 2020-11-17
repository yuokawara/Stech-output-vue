<template>
<v-container fluid>
    <v-col>
        <v-row justify="center">
            <div class="text-center">
                <p v-if="isLoading">ロード中</p>
                <p v-else>ロード完了</p>
            </div>
        </v-row>
    </v-col>
</v-container>
</template>

<script>
export default {
    data() {
        return {
            isLoading: true,
        }
    },

    method: {},

    mounted: function () {
        setTimeout(() => {
            this.isLoading = false
        }, 2000)
    }
}
</script>
