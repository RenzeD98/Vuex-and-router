/** ----------------------------
 * Imports
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


/** ----------------------------
 * Modules
 *
 */
// const moduleA = {
//
// };


/** ----------------------------
 * Create vuex store instance
 *
 * @type {Store}
 */
const store = new Vuex.Store({
    state: { //variables
        count: 6,
        message: 'test',
        todos: [
            { id: 1, text: 'banaan', done: true },
            { id: 2, text: 'appel',  done: false },
            { id: 3, text: 'peer',   done: true },
            { id: 4, text: 'kiwi' ,  done: false }
        ]
    },
    mutations: { //commiting changes to the variables
        increment (state) {
            state.count++;
        },
        incrementBy (state, payload) {
            state.count += payload.amount
        },
        updateMessage (state, payload) {
            state.message = payload.message
        }
    },
    actions: { // calling mutations and do other async calls
        increment ({commit}) {
            setTimeout(() => {
                commit('increment');
            }, 10);
        }
    },
    getters: { // parse to computed and export the value
        doneTodos: (state) => {
            return state.todos.filter(todo => todo.done)
        },
        doneTodosCount: (state, getters) => {
            return getters.doneTodos.length
        },
        getToDoById: (state) => (id) => {
            return state.todos.find(todo => todo.id === id)
        }
    }
});

export default store