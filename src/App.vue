<template>
  <div id="app" class="task">
    <input type="text" class="task__input" />
    <button class="task__button">Create Task</button>
    <ul class="task__list">
      <li class="task__list-item">
        <input type="checkbox" />
        Create a todo list
        <button class="task__button">
          <EditIcon class="task__svg" />
        </button>
        <button class="task__button">
          <DeleteIcon class="task__svg" />
        </button>
      </li>
      <li class="task__list-item">
        <input type="checkbox" />
        Create a task
        <button class="task__button">
          <EditIcon class="task__svg" />
        </button>
        <button class="task__button">
          <DeleteIcon class="task__svg" />
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
  components: {
    EditIcon,
    DeleteIcon
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
