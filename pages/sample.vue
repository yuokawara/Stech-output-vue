<template>
  <v-container fluid>
    <v-main>
      <v-col class="practice">
        <v-row class="practice__row"
          >BEM CSS クラスpracticeの領域 Elementはelement__row</v-row
        >
        <v-row class="practice__row--red">modifier red</v-row>
        <v-row class="practice__row--green">modifier green</v-row>
        <v-row class="practice__row--yellow">modifier yellow</v-row>
      </v-col>
      <v-col class="middlecontent">
        <v-row
          class="middlecontent__button"
          justify="center
"
        >
          <v-btn class="button">button</v-btn>
        </v-row>
        <v-row class="middlecontent__button" justify="center">
          <v-btn class="button__color--red">modifier button</v-btn>
        </v-row>
        <v-row class="middlecontent__button" justify="center">
          <v-btn class="button__color--yellow">modifier button</v-btn>
        </v-row>
      </v-col>
    </v-main>
  </v-container>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.button {
  &__color {
    &--red {
      background-color: red !important;
    }
    &--yellow {
      background-color: yellow !important;
    }
  }
}

.practice {
  background-color: #efefef;
  &__row {
    &--red {
      color: red;
    }
    &--green {
      color: green;
    }
    &--yellow {
      color: yellow;
    }
  }
}

.middlecontent {
  background-color: burlywood;
  &__button {
    margin: 0.5rem;
    padding: 0.5rem;
  }
}
</style>
