<template>
  <div class="tasks">
    <h1 class="tasks__title">Tasks</h1>
    <ul class="tasks__list" v-if="tasks.length">
      <Task :tasks="tasks" @update:tasks="$emit('update:tasks', $event)" />
    </ul>
    <p class="tasks__empty" v-else>
      no task created
    </p>

    <Modal :active.sync="showNewTaskModal">
      <h1 class="tasks__title">Create task</h1>
      <input
        type="text"
        class="tasks__input"
        :class="{ 'tasks__input--error': showInputError }"
        v-model="newTaskTitle"
        placeholder="Init new project..."
      />
      <button class="tasks__create-button" @click="createTask">Create</button>
    </Modal>
    <button class="tasks__button" @click="handleCreateTaskModal">
      New task
    </button>
  </div>
</template>

<script>
import Task from '../Task';
import Modal from '../Modal';
import './style.scss';

export default {
  name: 'tasks',
  data() {
    return {
      newTaskTitle: null,
      showInputError: false,
      showNewTaskModal: false
    };
  },
  props: {
    tasks: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  components: { Task, Modal },
  methods: {
    handleCreateTaskModal() {
      this.showNewTaskModal = true;
    },
    createTask() {
      if (!this.newTaskTitle) {
        this.showInputError = true;
        return;
      }

      this.showInputError = false;

      const task = {
        id: this.createRandomID(),
        title: this.newTaskTitle,
        done: false
      };

      this.tasks.push(task);

      this.newTaskTitle = '';
      this.showNewTaskModal = false;
    },
    createRandomID() {
      return (
        '_' +
        (
          Number(String(Math.random()).slice(2)) +
          Date.now() +
          Math.round(performance.now())
        ).toString(36)
      );
    }
  }
};
</script>
