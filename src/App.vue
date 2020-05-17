<template>
  <div id="app" class="task">
    <input type="text" class="task__input" v-model="newTaskValue" />
    <button class="task__button" @click="createTask">Create Task</button>
    <ul class="task__list">
      <li
        class="task__list-item"
        v-for="task in tasks"
        :key="task.id"
        :class="{ 'task__list-item__done': task.done }"
      >
        <input type="checkbox" :checked="task.done" v-model="task.done" />
        {{ task.title }}
        <button class="task__button">
          <EditIcon class="task__svg" />
        </button>
        <button class="task__button">
          <DeleteIcon class="task__svg" @click="deleteTask(task.id)" />
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import EditIcon from '../assets/edit.svg';
import DeleteIcon from '../assets/delete.svg';

export default {
  name: 'App',
  data() {
    return {
      newTaskValue: null,
      tasks: [
        {
          id: 1,
          title: 'Create a todo list',
          done: false
        },
        {
          id: 2,
          title: ' Create a task',
          done: false
        }
      ]
    };
  },
  components: {
    EditIcon,
    DeleteIcon
  },
  methods: {
    createTask() {
      if (!this.newTaskValue) return;

      const task = {
        id: this.createRandomID(),
        title: this.newTaskValue,
        done: false
      };

      this.tasks.push(task);
    },

    deleteTask(taskID) {
      const newTaskList = this.tasks.filter((task) => taskID != task.id);
      this.tasks = newTaskList;
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
.task {
  font-family: 'Open Sans', sans-serif;
  max-width: 768px;
  margin: auto;
  text-align: center;

  &__list {
    list-style: none;

    &-item {
      margin-bottom: 8px;

      &__done {
        text-decoration: line-through;
      }
    }
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

  &__svg {
    height: 20px;
    fill: black;
  }
}
</style>
