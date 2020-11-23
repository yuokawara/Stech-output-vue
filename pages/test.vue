<template>
  <div class="page">
    <!-- <p>{{ posts }}</p> -->
    {{ info }}
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      posts: [],
      info: null,
    };
  },
  mounted() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => (this.info = response.data.bpi));
    // .get("https://api.twitter.com/1.1/lists/list.json")
    // .then((response) => (this.posts = response.data));
  },
};
</script>
