<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-input></todo-input>
    <todo-list></todo-list>
    <todo-footer></todo-footer>
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
  box-shadow: 5px 10px 10px rgb(0, 0, 003);
}

</style>
