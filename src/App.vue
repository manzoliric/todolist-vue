<template>
  <div id="app" class="task">
    <input type="text">
    <button>Create Task</button>
    <ul class="task-list">
      <li class="task-list__item">
        Create a todo list
        <button>Delete Task</button>
      </li>
      <li class="task-list__item">
        Create a task
        <button>Delete Task</button>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>