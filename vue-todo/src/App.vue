<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <TodoList :propdata="todoItems"></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import TodoFooter from "./components/TodoFooter";

export default {
  data() {
    return {
      todoItems: []
    };
  },
  methods: {
    addOneItem(todoItem) {
      let obj = { completed: false, item: todoItem };
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    }
  },
  created() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          //this.todoItems.push(localStorage.key(i));
          this.todoItems.push(
            JSON.parse(localStorage.getItem(localStorage.key(i)))
          );
        }
        //this.todoItems.push(localStorage.key(i));
        //console.log(localStorage.key(i));
      }
    }
  },
  components: {
    TodoHeader,
    TodoFooter,
    TodoInput,
    TodoList
  }
};
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
