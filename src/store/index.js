import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: 'todolist-app',
  storage: window.localStorage
});

export const store = new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        title: 'Create a todo list',
        done: false
      },
      {
        id: 2,
        title: 'Create a task',
        done: false
      }
    ]
  },
  mutations: {
    finishTask(state, payload) {
      const tasksIndex = state.tasks.findIndex(
        (task) => task.id === payload.id
      );
      state.tasks[tasksIndex].done = payload.done;
    },
    createTask(state, payload) {
      state.tasks = [...state.tasks, payload];
    },
    deleteTask(state, payload) {
      state.tasks = payload;
    }
  },
  actions: {
    finishAction(context, payload) {
      context.commit('finishTask', payload);
    },
    createAction(context, payload) {
      context.commit('createTask', payload);
    },
    deleteAction(context, payload) {
      context.commit('deleteTask', payload);
    }
  },
  getters: {
    getAllTasks(state) {
      return state.tasks;
    }
  },
  plugins: [vuexPersist.plugin]
});
