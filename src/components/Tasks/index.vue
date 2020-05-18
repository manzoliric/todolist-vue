<template>
  <div class="tasks">
    <input type="text" class="tasks__input" v-model="newTaskTitle" />
    <button class="tasks__button" @click="createTask">
      Create Task
    </button>
    <ul class="tasks__list">
      <Task :tasks="tasks" @update:tasks="$emit('update:tasks', $event)" />
    </ul>
  </div>
</template>

<script>
import Task from '../Task';

export default {
  name: 'tasks',
  data() {
    return {
      newTaskTitle: null
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
      if (!this.newTaskTitle) return;

      const task = {
        id: this.createRandomID(),
        title: this.newTaskTitle,
        edit: false,
        done: false
      };

      this.tasks.push(task);
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
  }

  &__button {
    height: 30px;
    background: none;
    border-radius: 4px;
    margin: 0 4px;
  }
}
</style>
