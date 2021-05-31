<template>
  <div>
    <ul>
      <li
        v-for="(todoItem, index) in propdata"
        :key="todoItem.item"
        class="shadow"
      >
        <i
          class="checkBtn fas fa-check"
          v-bind:class="{ checkBtnCompleted: todoItem.completed }"
          @click="toggleComplete(todoItem, index)"
        ></i>
        <span v-bind:class="{ textCompleted: todoItem.completed }">
          {{ todoItem.item }}
        </span>
        <div class="removeBtn" v-on:click="removeTodo(todoItem, index)">
          <i class="fas fa-trash"></i>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["propdata"],
  methods: {
    removeTodo(todoItem, index) {
      console.log(todoItem, index);
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    },
    toggleComplete(todoItem, index) {
      todoItem.completed = !todoItem.completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    }
  }
};
</script>
<style>
ul {
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
</style>
