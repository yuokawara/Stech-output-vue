<template>
  <div class="page">
    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.name }}
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
      .get(
        "https://jsonplaceholder.typicode.com/users/" + this.$route.params.id
      )
      .then((response) => (this.posts = response));
  },
};
</script>
