<template>
  <div>
    <li
      class="task"
      v-for="task in tasks"
      :key="task.id"
      :class="{ 'task--done': task.done }"
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
      <DeleteIcon class="task__svg" @click="deleteTask(task.id)" />
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
  background: #fff;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;

  &--done {
    text-decoration: line-through;
  }

  &__edit {
    border: none;
    font-size: 16px;
  }

  &__svg {
    height: 20px;
    fill: #7d7d7d;
  }

  &__button {
    height: 30px;
    background: none;
    border: none;
  }
}
</style>
