

const addOneItem = (state, todoItem) => {
    const obj = { completed: false, item: todoItem}
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
}

const removeOneItem = (state, {todoItem, idx}) => {
    console.log(todoItem)
    localStorage.removeItem(todoItem.item);
    state.todoItems.splice(idx, 1);
}

const toggleOneItem = (state, {todoItem, idx}) => {
    state.todoItems[idx].completed = !state.todoItems[idx].completed;
    localStorage.removeItem(todoItem.item);
    localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
}

const clearAll = (state) => {
    localStorage.clear();
    state.todoItems = [];
}

export {
    addOneItem
    , removeOneItem
    , toggleOneItem
    , clearAll
};