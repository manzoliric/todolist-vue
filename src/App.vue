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
    return {};
  },
  components: {
    Tasks
  },
  computed: {
    tasks() {
      return this.$store.getters.getAllTasks;
    }
  }
};
</script>
<style lang="scss">
.app {
  font-family: 'Open Sans', sans-serif;
  padding: 10px;
}
</style>
