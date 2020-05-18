<template>
  <div class="tasks">
    <ul class="tasks__list">
      <Task :tasks="tasks" @update:tasks="$emit('update:tasks', $event)" />
    </ul>
    <input
      type="text"
      class="tasks__input"
      :class="{ 'tasks__input--error': showInputError }"
      v-model="newTaskTitle"
    />
    <button class="tasks__button" @click="createTask">
      + New Task
    </button>
  </div>
</template>

<script>
import Task from '../Task';

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
  components: { Task },
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
        edit: false,
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
    height: 30px;
    background: none;
    border-radius: 50px;
    border: 1px solid pink;
    margin: 0 4px;
  }
}
</style>
