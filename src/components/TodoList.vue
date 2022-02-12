<template>
  <div>
    <ul>
      <li v-for="(items, i) in propsData" :key="i">
        <i class="fas fa-solid fa-check checkBtn" v-bind:class="{checkBtnCompleted: items.completed}" @click="toggleComplete(items, i)"></i>
<!--        -->
        <span v-bind:class="{textCompleted: items.completed}">{{items.item}}</span>
        <span class="removeBtn" @click="removeTodo(items, i)">
          <i class="fas fa-trash-alt"></i>
        </span>

      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoList: [],
    }
  }, created() {
    // 인스턴스 생성되자마자 생성되는 라이프사이클 훅
  },
  props: ['propsData'] ,
  methods: {
    removeTodo(todoItem, idx) {
      localStorage.removeItem(todoItem.item);
      this.todoList.splice(idx, 1);
      this.$emit('removeTodoItem', todoItem, idx);
    }, toggleComplete(todoItem, idx) {
      this.$emit('toggleTodoItem', todoItem, idx)
    }
  }

}
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
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

  .checkBtn {
    line-height: 50px;
    color: #62acde;
    margin-right: 5px;
  }

  .checkBtnCompleted {
    color: #b3adad;
  }

  .textCompleted {
    text-decoration: line-through;
    color: #b3adad ;
  }

  .removeBtn {
    margin-left: auto;
    color: #de4343;
  }
</style>