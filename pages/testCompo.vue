<template>
  <div>
    <h1>例1:ボタン</h1>
    <p>実装例</p>
    <button>ボタン</button>
    <hr />
    <img src="~/assets/test_component.png" />
    <hr />
    <h4>
      buttonそのものには記述せず、buttonコンポーネントのルールセットにbutton要素の初期化を記述
    </h4>
  </div>
</template>

<style scoped>
button {
}

.button {
  background-color: #efefef;
  -webkit-transform: none;
  -moz-transform: none;
  margin: 0;
  font-size: inherit;
  color: inherit;
  text-decoration: none;
  display: inline-block;
  border: 1px solid #000;
  padding: 0.3rem;
  background-color: #eee;
  cursor: pointer;
}
</style>
