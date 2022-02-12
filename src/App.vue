<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-input @addTodoItem="addOneItem"></todo-input>
    <todo-list v-bind:propsData="todoItems" @removeTodoItem="removeOneItem" @toggleTodoItem="toggleOneItem"></todo-list>
    <todo-footer @todoAllClear="removeAllItem"></todo-footer>
  </div>
</template>

<script>

import TodoHeader from "@/components/TodoHeader";
import TodoFooter from "@/components/TodoFooter";
import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";

export default {
  name: 'App',
  components: {
    TodoHeader,
    TodoFooter,
    TodoInput,
    TodoList
  }, data() {
    return {
      todoItems: []
    }
  } ,
  created() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
  }, methods: {
    addOneItem(todoItem) {
      var obj = { completed: false, item: todoItem}
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    }, removeOneItem(todoItem, idx) {
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(idx, 1);
    }, removeAllItem() {
      this.todoItems = [];
    }, toggleOneItem(todoItems, index) {
      this.todoItems[index].completed = !this.todoItems[index].completed;
      localStorage.removeItem(todoItems.item);
      localStorage.setItem(todoItems.item, JSON.stringify(todoItems));
    }
  }
}
</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F6;
}

input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
  margin: 10px;
}

.shadow {
  box-shadow: 5px 10px 10px rgb(0, 0, 0, 003);
}

</style>
