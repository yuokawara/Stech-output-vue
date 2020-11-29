<template>
  <v-app id="inspire">
    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card class="pa-md-4 mx-lg-auto" color="white" width="250px">
            <p class="text-uppercase">テキストを入力</p>
            <v-text-field
              v-bind:label="'前回の入力値:' + $store.state.text"
              single-line
              v-model="text"
            />
            <v-card-actions>
              <v-btn depressed small color="primary" @click="changeText"
                >テキストを保存する</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card class="pa-md-4 mx-lg-auto" color="white" width="250px">
            <p class="text-uppercase">カウント : {{ $store.state.count }}</p>
            <v-card-actions>
              <v-btn depressed small color="error" @click="counter"
                >カウントを追加<v-icon dark>mdi-plus</v-icon></v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card class="pa-md-4 mx-lg-auto" color="white" width="250px">
            <v-btn depressed small onclick="window.location.reload();"
              >reload</v-btn
            >
            <v-btn depressed small @click="clearText">clear</v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      text: "",
    };
  },
  methods: {
    counter() {
      this.$store.commit("increment");
    },
    changeText() {
      this.$store.commit("changeText", this.text);
    },
    clearText() {
      localStorage.clear();
    },
  },
};
</script>
