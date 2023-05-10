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
    //   if (event.key === "Enter") {
    //     this.addNewNote();
    //   }
    // },
  },
};
const app = Vue.createApp(App);
app.mount("#app");
