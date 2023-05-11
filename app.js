Vue.createApp({
  data() {
    return {
      myHtml: "<h1>Vue 3 App</h1>",
      title: "название авто",
      person: {
        firstname: "Alimzhan",
        lastNane: "Zhakashev",
        age: 29,
      },
      items: [1, 2, 3, 4, 5, 6],
    };
  },
  methods: {
    addItem(event) {
      this.items.unshift(this.$refs.myInput.value);
      this.$refs.myInput.value = "";
      console.log(event.key);
    },
    remove(i) {
      this.items.splice(i, 1);
    },
    log(item) {
      console.log("Log item: ", item);
    },
  },

  computed: {
    evenItems() {
      return this.items.filter((i) => i % 2 === 0);
    },
  },
}).mount("#app");
