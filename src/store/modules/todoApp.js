const storage = {
    fetch() {
        const arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
                }
            }
        }
        return arr;
    }
}

const state = {
    storedTodoItems() {
        return storage.fetch();
    }
}


const mutations = {
    addOneItem(state, todoItem) {
        const obj = { completed: false, item: todoItem}
        localStorage.setItem(todoItem, JSON.stringify(obj));
        state.todoItems.push(obj);
    },

    removeOneItem(state, {todoItem, idx}) {
        console.log(todoItem)
        localStorage.removeItem(todoItem.item);
        state.todoItems.splice(idx, 1);
    },

    toggleOneItem(state, {todoItem, idx}) {
        state.todoItems[idx].completed = !state.todoItems[idx].completed;
        localStorage.removeItem(todoItem.item);
        localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },

    clearAll(state) {
        localStorage.clear();
        state.todoItems = [];
    }
}

export default {mutations, state}