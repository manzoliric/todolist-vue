<template>
  <div id="app" class="app">
    <Tasks :tasks.sync="tasks" />
  </div>
</template>

<script>
import Tasks from './components/Tasks';

export default {
  name: 'App',
  data() {
    return {
      tasks: [
        {
          id: 1,
          title: 'Create a todo list',
          edit: false,
          done: false
        },
        {
          id: 2,
          title: ' Create a task',
          edit: false,
          done: false
        }
      ]
    };
  },
  components: {
    Tasks
  }
};
</script>
<style lang="scss">
.app {
  font-family: 'Open Sans', sans-serif;
  max-width: 768px;
  margin: auto;
  text-align: center;
}
</style>
