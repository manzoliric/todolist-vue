<template>
  <div>
    <li
      class="task"
      v-for="task in tasks"
      :key="task.id"
      :class="{ 'task--done': task.done }"
    >
      <input
        type="checkbox"
        :id="task.id"
        class="task__checkbox"
        :checked="task.done"
        v-model="task.done"
      />
      <label class="task__label" :for="task.id">
        {{ task.title }}
      </label>
      <DeleteIcon class="task__svg" @click="deleteTask(task.id)" />
    </li>
  </div>
</template>

<script>
import './style.scss';
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
