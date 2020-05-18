<template>
  <div>
    <li
      class="task"
      v-for="task in tasks"
      :key="task.id"
      :class="{ 'task++done': task.done }"
    >
      <input type="checkbox" :checked="task.done" v-model="task.done" />
      <input
        v-if="task.edit"
        v-model="task.title"
        @keyup.enter="editTask(task, false)"
        @blur="editTask(task, false)"
        class="task__edit"
        v-focus
      />
      <label @click="editTask(task, true)" v-else> {{ task.title }} </label>
      <button class="task__button">
        <DeleteIcon class="task__svg" @click="deleteTask(task.id)" />
      </button>
    </li>
  </div>
</template>

<script>
import DeleteIcon from '../../../assets/delete.svg';

export default {
  name: 'task',
  props: {
    tasks: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  components: {
    DeleteIcon
  },
  methods: {
    editTask(task, handlerEdit) {
      task.edit = handlerEdit;
    },

    deleteTask(taskID) {
      const tasks = this.tasks.filter((task) => taskID != task.id);

      this.$emit('update:tasks', tasks);
    }
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      }
    }
  }
};
</script>

<style lang="scss">
.task {
  margin-bottom: 8px;

  &__done {
    text-decoration: line-through;
  }

  &__edit {
    border: none;
    font-size: 16px;
  }

  &__svg {
    height: 20px;
    fill: black;
  }

  &__button {
    height: 30px;
    background: none;
    border-radius: 4px;
    margin: 0 4px;
  }
}
</style>
