console.log("Vue", Vue);

Vue.config.devtools = true;

const app = new Vue({
  el: "#app",
  data: {
    musics: [],
    generi: [],
    genere_selezionato: "",
  },
  methods: {},
  created() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((res) => {
        const response = res.data.response;
        this.musics = response;

        // girando nel'array music con forEach - se l'array generi non include music.genre allora puscia music.genre in generi
        this.musics.forEach((music) => {
          if (!this.generi.includes(music.genre)) {
            this.generi.push(music.genre);
          }
        });
        this.musics.sort(function (music1, music2) {
          return parseInt(music2.year) - parseInt(music1.year);
        });
      });
  },
});
