<template>
  <div>
    <ul>
      <li
        v-for="(todoItem, index) in this.storedTodoItems"
        :key="todoItem.item"
        class="shadow"
      >
        <i
          class="checkBtn fas fa-check"
          v-bind:class="{ checkBtnCompleted: todoItem.completed }"
          @click="toggleComplete({ todoItem, index })"
        ></i>
        <span v-bind:class="{ textCompleted: todoItem.completed }">
          {{ todoItem.item }}
        </span>
        <div class="removeBtn" v-on:click="removeTodo({ todoItem, index })">
          <i class="fas fa-trash"></i>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    // todoItems() {
    //   return this.$store.getters.storedTodoItems;
    // }
    ...mapGetters(["storedTodoItems"])
  },
  methods: {
    ...mapMutations({
      removeTodo: "removeOneItem",
      toggleComplete: "toggleOneItem"
    })
    // removeTodo(todoItem, index) {
    //   //this.$emit("removeItem", todoItem, index);
    //
    //   this.$store.commit("removeOneItem", { todoItem, index });
    // },
    // toggleComplete(todoItem, index) {
    //   //this.$emit("toggleItem", todoItem, index);
    //   this.$store.commit("toggleOneItem", { todoItem, index });
    // }
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
