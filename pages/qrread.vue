<template>
  <div>
    <p class="error">{{ error }}</p>

    <div class="qrcode-stream">
      <qrcode-stream @decode="onDecode" @init="onInit" />
      <p class="decode-result">
        取得したリンク: <b>{{ result }}</b>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  layout: "client/simple",
  data() {
    return {
      result: "",
      error: "",
      link: "",
      qrcodeStream: false,
    };
  },
  methods: {
    onDecode(result) {
      this.result = result;
      location.href = result;
    },

    async onInit(promise) {
      try {
        await promise;
      } catch (error) {
        if (error.name === "NotAllowedError") {
          this.error = "ERROR: you need to grant camera access permisson";
        } else if (error.name === "NotFoundError") {
          this.error = "ERROR: no camera on this device";
        } else if (error.name === "NotSupportedError") {
          this.error = "ERROR: secure context required (HTTPS, localhost)";
        } else if (error.name === "NotReadableError") {
          this.error = "ERROR: is the camera already in use?";
        } else if (error.name === "OverconstrainedError") {
          this.error = "ERROR: installed cameras are not suitable";
        } else if (error.name === "StreamApiNotSupportedError") {
          this.error = "ERROR: Stream API is not supported in this browser";
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.qrcode-stream {
  width: 320px;
  height: 240px;
}
</style>
