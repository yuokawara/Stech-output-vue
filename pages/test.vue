<template>
  <div class="page">
    <!-- <p>{{ posts }}</p> -->
    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post }}
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    axios
      .get("https://api.twitter.com/1.1/lists/list.json")
      .then((response) => (this.posts = response.data));
  },
};
</script>
