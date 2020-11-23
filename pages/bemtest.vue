<template>
  <div class="bem">
    <div>
      <h2>Rule</h2>
      <h4>CSS記述にあたりルールを設定</h4>
      <h3>Block</h3>
      <p>主要となる部分。わかりやすい命名で。</p>
      <br />
      <h3>Element</h3>
      <p>Block内を構成する要素。__を付け明示。</p>
      <br />
      <h3>Modifier</h3>
      <p>
        Block
        Elementのバージョン違い。プロジェクトにより明示方法は異なるが、--で一旦記述
      </p>
    </div>
    <hr />
    <div class="block">
      <h3>Block</h3>
      <div class="block__element">block__element</div>
    </div>
    <div class="block block_modifier">
      <h3>Block_modifier</h3>
      <div class="block__element">block__element</div>
    </div>
    <hr />
    <h2>BEMで書く一例 その2</h2>
    <div class="bembrock">
      <p class="bemblock__element">Element</p>
      <p class="bemblock__element--modifier">Modifier</p>
    </div>
    <img src="~/assets/vuebem_sample.png" />
    <p>elementのバージョン違いを--modifierに統一するルールで運用</p>
    <p>block自体もわかりやすくなる</p>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
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
