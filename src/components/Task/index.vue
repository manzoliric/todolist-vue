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
        :checked="task.done"
        class="task__checkbox"
        @input="finishTask(task, $event)"
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
      this.$store.dispatch('deleteAction', tasks);
    },
    finishTask(task, event) {
      task.done = event.target.checked;
      this.$store.dispatch('finishAction', task);
    }
  }
};
</script>
