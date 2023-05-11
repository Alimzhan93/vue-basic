const App = {
  data() {
    return {
      counter: 0,
      title: "Счетчик",
      list: "Список заметок",
      placeholderString: "Введите название заметки",
      inputValue: "",
      notes: ["Заметка 1", "Заметка 2"],
    };
  },
  methods: {
    // Двухсторонняя связь
    inputChangeHandler(event) {
      this.inputValue = event.target.value;
    },
    // Добавление заметки
    addNewNote() {
      if (this.inputValue !== "") {
        this.notes.push(this.inputValue);
        this.inputValue = "";
      }
    },

    toUpperCase(item) {
      return item.toUpperCase();
    },
    // Удаление заметки
    removeNote(index) {
      this.notes.splice(index, 1);
    },
    // inputKeyPress(event) {
    //   // Добавление заметки по нажатию Enter
    //   console.log(event);
    //   if (event.key === "Enter") {
    //     this.addNewNote();
    //   }
    // },
  },
  computed: {
    doubleCountComputed() {
      return this.notes.length * 2;
    },
  },
  watch: {
    inputValue(value) {
      if (value.length > 10) {
        this.inputValue = "";
      }
    },
  },
};
const app = Vue.createApp(App);
app.mount("#app");
