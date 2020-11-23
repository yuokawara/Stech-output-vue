<template>
  <v-container fluid>
    <v-main>
      <!-- <v-col class="practice">
        <v-row class="practice__row"
          >BEM CSS クラスpracticeの領域 Elementはelement__row</v-row
        >
        <v-row class="practice__row--red">modifier red</v-row>
        <v-row class="practice__row--green">modifier green</v-row>
        <v-row class="practice__row--yellow">modifier yellow</v-row>
      </v-col> -->
      <v-col class="middlecontent">
        <v-row class="middlecontent__button" justify="center">
          <v-btn class="button" to="/qrread">QRcodeReader</v-btn>
        </v-row>
        <v-row class="middlecontent__button" justify="center">
          <v-btn class="button__color--red" to="/bemtest">Rule Page</v-btn>
        </v-row>
        <v-row class="middlecontent__button" justify="center">
          <template>
            <div class="text-center">
              <v-dialog v-model="dialog" width="500">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn class="button__color--yellow" v-bind="attrs" v-on="on">
                    calendar
                  </v-btn>
                </template>
                <v-card>
                  <v-card-actions>
                    <template><MyCalender /></template>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
          </template>
        </v-row>
      </v-col>

      <v-col class="gallery">
        <v-row>
          <v-col>
            <v-img
              class="gallery__image"
              src="https://1.bp.blogspot.com/-GJeIiEME8ik/XxU0ecbEKCI/AAAAAAABaLo/XrPA-5JvpfMI3ANbwWt_3R5fol-SOyH6gCNcBGAsYHQ/s400/food_kanazawa_curry.png"
            />
          </v-col>
          <v-col>
            <v-img
              class="gallery__image"
              src="https://1.bp.blogspot.com/-aE1d5IM9FuY/XwkxlUXaVYI/AAAAAAABaC4/5Y9ueDFkL-ktyOHXczaj5dvlCXieT-pigCNcBGAsYHQ/s1600/syougatsu_mark_mochi.png"
            />
          </v-col>
          <v-col>
            <v-img
              class="gallery__image"
              src="https://1.bp.blogspot.com/-aE1d5IM9FuY/XwkxlUXaVYI/AAAAAAABaC4/5Y9ueDFkL-ktyOHXczaj5dvlCXieT-pigCNcBGAsYHQ/s1600/syougatsu_mark_mochi.png"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col class="gallery--blue">
        <v-row>
          <v-col>
            <v-img
              class="gallery__image"
              src="https://1.bp.blogspot.com/-GJeIiEME8ik/XxU0ecbEKCI/AAAAAAABaLo/XrPA-5JvpfMI3ANbwWt_3R5fol-SOyH6gCNcBGAsYHQ/s400/food_kanazawa_curry.png"
            />
          </v-col>
          <v-col>
            <v-img
              class="gallery__image"
              src="https://1.bp.blogspot.com/-aE1d5IM9FuY/XwkxlUXaVYI/AAAAAAABaC4/5Y9ueDFkL-ktyOHXczaj5dvlCXieT-pigCNcBGAsYHQ/s1600/syougatsu_mark_mochi.png"
            />
          </v-col>
          <v-col>
            <v-img
              class="gallery__image"
              src="https://1.bp.blogspot.com/-aE1d5IM9FuY/XwkxlUXaVYI/AAAAAAABaC4/5Y9ueDFkL-ktyOHXczaj5dvlCXieT-pigCNcBGAsYHQ/s1600/syougatsu_mark_mochi.png"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-bottom-navigation>
        <backButton />
      </v-bottom-navigation>
    </v-main>
  </v-container>
</template>

<script>
import MyCalender from "~/components/MyCalender.vue";
import backButton from "~/components/backButton.vue";

export default {
  components: { MyCalender, backButton },
  data() {
    return {
      dialog: false,
    };
  },
};
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

.gallery {
  background-color: cadetblue;
  &__image {
    width: 70px;
    height: 70px;
    background-color: beige;
  }
  &--blue {
    background-color: blue;
  }
}
</style>
