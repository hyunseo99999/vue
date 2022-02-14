<template>
  <div>
    <ul>
      <transition-group name="list" tag="ul">
        <li v-for="(todoItem, idx) in this.storedTodoItems" :key="idx">
          <i class="fas fa-solid fa-check checkBtn" v-bind:class="{checkBtnCompleted: todoItem.completed}" @click="toggleComplete(todoItem, idx)"></i>
          <span v-bind:class="{textCompleted: todoItem.completed}">{{todoItem.item}}</span>
          <span class="removeBtn" @click="removeTodo(todoItem, idx)">
            <i class="fas fa-trash-alt"></i>
          </span>
        </li>
      </transition-group>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  computed: {
    ...mapGetters(['storedTodoItems'])
  },
  methods: {
    removeTodo(todoItem, idx) {
      this.$store.commit('removeOneItem', {todoItem, idx});
    }, toggleComplete(todoItem, idx) {
      this.$store.commit('toggleOneItem', {todoItem, idx});
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

  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }
</style>
