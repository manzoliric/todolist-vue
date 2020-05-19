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

<style lang="scss">
.task {
  $this: &;
  background: #fff;
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  padding-bottom: 16px;
  font-size: 18px;
  border-bottom: 1px solid #efe8e8;

  &--done {
    text-decoration: line-through;
  }

  &__checkbox {
    + #{$this}__label:before {
      content: '';
      display: block;
      width: 20px;
      height: 20px;
      border: 1px solid #6cc0e5;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0.6;
      -webkit-transition: all 0.12s, border-color 0.08s;
      transition: all 0.12s, border-color 0.08s;
    }

    &:checked {
      + #{$this}__label:before {
        width: 10px;
        top: -5px;
        left: 5px;
        border-radius: 0;
        opacity: 1;
        border-top-color: transparent;
        border-left-color: transparent;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
      }
    }
  }

  &__label {
    width: 100%;
    display: block;
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    padding-left: 35px;
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
