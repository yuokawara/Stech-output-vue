<template>
  <v-container fluid>
    <h2>favoriteのページ</h2>
    <v-row>
      <v-col>
        <video id="player" autoplay></video>
        <canvas id="snapshot" width="480" height="640"></canvas>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {},
  mounted() {
    let player = document.getElementById("player");
    let snapshotChanvas = document.getElementById("snapshot");
    let width = snapshotChanvas.width;
    let height = snapshotChanvas.height;

    let startScan = function (callback) {
      const canvasContext = snapshotChanvas.getContext("2d");
      // 500ms間隔 スナップショットを取得し、QRコードの読み取りを行う。
      let intervalHandler = setInterval(() => {
        canvasContext.drawImage(player, 0, 0, width, height);
        const imageData = canvasContext.getImageData(0, 0, width, height);
        const scanResult = jsQR(
          imageData.data,
          ImageData.width,
          imageData.height
        );
        if (scanResult) {
          clearInterval(intervalHandler);
          console.log(scanResult);

          if (callback) {
            callback(scanResult);
          }
        }
      }, 500);
    };
    let handleSuccess = function (stream) {
      // カメラストリームをplayerのdataに設定
      player.srcObject = stream;

      startScan.srcObject = stream;

      startScan((scanResult) => {
        // ページの呼び出し元に読み取り結果を返す
      });
    };
    // ユーザーにブラウザがカメラを使用することの許可を確認。
    // 許可されるとhandleSuccessが呼ばれる。
    navigator.mediaDevices
      .getUserMedia({
        video: { facingMode: "environment", width: width, height: height },
        audio: false,
      })
      .then(handleSuccess)
      .catch((err) => {
        console.log(JSON.stringify(err));
      });
  },
};
</script>
