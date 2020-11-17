<template>
  <v-container fluid>
    <v-main>
      <div class="text-center">
        <Header />
        <Carousel />
        <MyCalender />
      </div>

      <v-container fluid class="my-3">
        <template>
          <v-row>
            <v-col sm="12" md="11" lg="9" xl="6">
              <v-sheet class="pa-3">
                <h2>Preview</h2>
                <v-form ref="form">
                  <v-avatar size="100">
                    <v-img v-if="uploadImageUrl" :src="uploadImageUrl"
                  /></v-avatar>
                  <v-file-input
                    v-model="input_image"
                    accept="image/*"
                    show-size
                    label="画像ファイルをアップロード"
                    filled
                    prepend-icon="mdi-camera"
                    @change="onImagePicked"
                  ></v-file-input>
                </v-form>
                <h2>テキスト入力</h2>
                <!-- テスト -->
                <template>
                  <v-card color="grey lighten-1" dark :loading="isUpdating">
                    <v-row>
                      <v-col class="text-right" cols="12">
                        <v-menu bottom left transition="slide-y-transition">
                          <v-list>
                            <v-list-item @click="isUpdating = true">
                              <v-list-item-action>
                                <v-icon>mdi-cog</v-icon>
                              </v-list-item-action>
                              <v-list-item-content>
                                <v-list-item-title>Update</v-list-item-title>
                              </v-list-item-content>
                            </v-list-item>
                          </v-list>
                        </v-menu>
                      </v-col>
                      <v-row class="pa-4" align="center" justify="center">
                        <v-col class="text-center">
                          <h3 class="headline">{{ name }} {{ title }}</h3>
                        </v-col>
                      </v-row>
                    </v-row>

                    <v-form>
                      <v-container>
                        <v-row>
                          <v-col cols="12" md="6">
                            <v-text-field
                              v-model="name"
                              :disabled="isUpdating"
                              filled
                              color="blue-grey lighten-2"
                              label="FamilyName"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" md="6">
                            <v-text-field
                              v-model="title"
                              :disabled="isUpdating"
                              filled
                              color="blue-grey lighten-2"
                              label="FirstName"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-form>
                    <v-divider></v-divider>
                    <v-spacer></v-spacer>
                    <v-btn
                      :loading="isUpdating"
                      color="blue-grey darken-3"
                      depressed
                      @click="isUpdating = true"
                    >
                      <v-icon left> mdi-update </v-icon>
                      保存
                    </v-btn>
                  </v-card>
                </template>
                <v-container fluid>
                  <v-row justify="center">
                    <v-col>
                      <v-card>
                        <v-card-title> 天気予報 </v-card-title>
                        <div class="text-center">
                          <v-img :src="imgUrl" />
                        </div>
                        <v-card-subtitle
                          >天気:{{ item.weather[0].main }}</v-card-subtitle
                        >
                        <v-card-subtitle
                          >温度:{{ item.main.temp }}</v-card-subtitle
                        >
                        <v-card-subtitle
                          >湿度:{{ item.main.humidity }}</v-card-subtitle
                        >
                      </v-card>
                    </v-col>
                  </v-row>
                </v-container>

                <v-container fluid>
                  <v-row>
                    <v-col
                      ><v-data-table
                        :headers="headers"
                        :items="desserts"
                        :items-per-page="5"
                        class="elevation-1"
                      ></v-data-table>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col
                      ><v-text-field
                        filled
                        label="検索"
                        prepend-inner-icon="mdi-map-marker"
                      ></v-text-field
                    ></v-col>
                  </v-row>
                </v-container>
              </v-sheet>
            </v-col>
          </v-row>
        </template>
      </v-container>
    </v-main>
  </v-container>
</template>


<script>
import Header from "~/components/Header.vue";
import MyCalender from "~/components/MyCalender.vue";
import Carousel from "~/components/Carousel.vue";
export default {
  components: {},

  head() {
    return {
      script: [
        {
          src:
            "https://tokbox.com/embed/embed/ot-embed.js?embedId=414f92c3-f966-48d5-aa0f-b9353ad3cac1&room=DEFAULT_ROOM",
          body: true,
        },
      ],
    };
  },
  data() {
    return {
      imgUrl: "'https://openweathermap.org/img/w/'+item.weather[0].icon+'.png'",
      value: null,
      input_image: null,
      uploadImageUrl: "",
      autoUpdate: true,
      isUpdating: false,
      name: "",
      title: "",

      headers: [
        {
          text: "Dessert (100g serving)",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" },
      ],
      desserts: [
        {
          itemID: 1,
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%",
        },
        {
          itemID: 2,
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%",
        },
        {
          itemID: 3,
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%",
        },
        {
          itemID: 4,
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%",
        },
        {
          itemID: 5,
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%",
        },
        {
          itemID: 6,
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%",
        },
        {
          itemID: 7,
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%",
        },
        {
          itemID: 8,
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%",
        },
        {
          itemID: 9,
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%",
        },
        {
          itemID: 10,
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
        },
      ],
    };
  },
  async asyncData({ route, app, error }) {
    try {
      const item = await app.$axios.$get(
        `https://api.openweathermap.org/data/2.5/weather?q=${route.params.name},jp&units=metric&lang=ja&appid=328f4c4e85555c0f4060215ab6af79e3`
      );
      return {
        item,
      };
    } catch (err) {
      error({
        statusCode: err.response.status,
        message: err.response.data.message,
      });
    }
  },
  methods: {
    onImagePicked(file) {
      if (file !== undefined && file !== null) {
        if (file.name.lastIndexOf(".") <= 0) {
          return;
        }
        const fr = new FileReader();
        fr.readAsDataURL(file);
        fr.addEventListener("load", () => {
          this.uploadImageUrl = fr.result;
        });
      } else {
        this.uploadImageUrl = "";
      }
    },
    findBy: function (list, value, column) {
      return list.filter(function (item) {
        // 入力がない場合は全件表示
        return item[column] == value || value === "";
      });
    },
  },
  computed: {
    itemsFiltered: function () {
      return this.findBy(this.items, this.keyword);
    },
  },
  watch: {
    isUpdating(val) {
      if (val) {
        setTimeout(() => (this.isUpdating = false), 3000);
      }
    },
  },
};
</script>

<style scoped>
</style>
