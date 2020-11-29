<template>
  <div class="bem">
    <div>
      <h2>Sass</h2>
      <h4>Sassを使った管理、運用方法 あくまで一例</h4>
      <h3>@import</h3>
      <p>CSSの@importとは異なる。コンパイル後に一つにまとめる。</p>
      <p>
        BEMの設計で取り入れるメリットは、新しいルールセットで古いルールセットを上書きする事故が減る。
      </p>
      <br />
      <h3>@extend</h3>
      <p>シングルクラスでの運用の際にOOCSSのルールと組み合わせると役に立つ。</p>
      <p>あまりに使いすぎると、CSSの肥大化、スタイル崩れを招く恐れ</p>
      <br />
      <h3>placeholder</h3>
      <p>.の部分を%にすることで、CSSを出力しない様にするselectorの一つ。</p>
      <p>例：%block{}等</p>
    </div>
    <hr />
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.block {
  background-color: #efefef;
  border: 1px solid;
  width: 200px;
  height: 200px;
  margin: 5px;
}

.block_modifier {
  background-color: #59e15b;
  border: 1px solid;
  width: 200px;
  height: 200px;
  margin: 5px;
}

.block__element {
  background-color: rgb(224, 207, 22);
  border: 1px solid;
  width: 150px;
  height: 50px;
  margin: 5px;
}

.bemblock {
}
.bemblock__element {
  color: brown;
  background-color: cornflowerblue;
}
.bemblock__element--modifier {
  color: yellow;
  background-color: black;
}
</style>
