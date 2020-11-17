

<template>
  <div>
    <h2>テストのページ</h2>
  </div>
</template>
<script>
import axios from "axios";
export default {
  mounted() {
    var request = new XMLHttpRequest();

    request.open("GET", "https://jsonplaceholder.typicode.com/users/3", true);
    request.responseType = "json";

    request.onload = function () {
      var data = this.response;
      console.log(data);
    };

    request.send();
  },
};
</script>
