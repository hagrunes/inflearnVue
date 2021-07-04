<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />
    <!--    <button @click="addTodo">add</button>-->
    <span class="addContainer" @click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>
    <Modal v-if="showModal" @close="showModal = false">
      <!--
    you can use custom content here to overwrite
    default content
  -->
      <h3 slot="header">
        경고
        <i class="closeModalButton fas fa-times" @click="showModal = false"></i>
      </h3>
      <div slot="body">
        글이 없다
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from "./common/modal";
export default {
  components: {
    Modal
  },
  data() {
    return {
      newTodoItem: "",
      showModal: false
    };
  },
  methods: {
    addTodo() {
      //console.log(this.newTodoItem);
      if (this.newTodoItem !== "") {
        //this.$emit("addTodoItem", this.newTodoItem);
        //const text = this.newTodoItem.trim();
        this.$store.commit("addTodoItem", this.newTodoItem);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = "";
    }
  }
};
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.closeModalButton {
  color: #43b983;
}
</style>
