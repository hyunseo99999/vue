import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

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

import * as getters from './getters.js';
import * as mutations from './mutations.js';
export const store = new Vuex.Store({
   state: {
       headerText: 'TODO it!',
       todoItems: storage.fetch()

    },
    getters: getters,
    mutations: mutations
});

/*export const store = new Vuex.Store({
    modules: {
        todoApp
    }
});*/
