<template>
  <div class="inputBox">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <span class="addContainer">
      <i class="fas fa-plus addBtn"></i>
    </span>

    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">
        경고!
        <i class="fas fa-times closeModalBtn" @click="showModal = false"></i>
      </h3>
      <div slot="body">
        todo it 입력 해주세요.
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal'
export default {
  components: {
      Modal
  },
  data() {
    return {
      newTodoItem: "",
      showModal: false
    }
  },
  methods: {
    addTodo() {
      // 저장
      if (this.newTodoItem != "") {
        this.$store.commit('addOneItem', this.newTodoItem);
        this.clearInput();
      } else {
        this.showModal = true;
      }
    }, clearInput() {
      // 초기화
      this.newTodoItem = "";
    }
  }
}
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
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }
  .addBtn {
    color: white;
    vertical-align: middle;
  }

  .closeModalBtn {
    color: #42b983;
  }
</style>
