<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-calendar v-model="picker" />
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
