<template>
  <div class="tasks">
    <h1 class="tasks__title">Tasks</h1>
    <ul class="tasks__list">
      <Task :tasks="tasks" @update:tasks="$emit('update:tasks', $event)" />
    </ul>

    <Modal>
      <input
        type="text"
        class="tasks__input"
        :class="{ 'tasks__input--error': showInputError }"
        v-model="newTaskTitle"
      />
    </Modal>
    <button class="tasks__button" @click="createTask">
      New task
    </button>
  </div>
</template>

<script>
import Task from '../Task';
import Modal from '../Modal';

export default {
  name: 'tasks',
  data() {
    return {
      newTaskTitle: null,
      showInputError: false
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
<style lang="scss">
.tasks {
  &__title {
    font-family: 'Nunito', sans-serif;
    font-size: 32px;
    margin-bottom: 24px;
  }

  &__list {
    list-style: none;
  }

  &__input {
    height: 30px;
    border: 1px solid #e2e2e2;
    padding-left: 16px;
    border-radius: 4px;

    &--error {
      border-color: red;
    }
  }

  &__button {
    height: 40px;
    width: 100%;
    color: #ffffff;
    position: absolute;
    bottom: 0;
    left: 0;
    background: #006cff;
    font-size: 18px;
    border: 0;
  }
}
</style>
