<template>
  <div class="modal" :class="{ 'modal--active': active }">
    <div class="modal__content">
      <span class="modal__close" @click="closeModal">&times;</span>
      <slot />
    </div>
  </div>
</template>

<script>
import './style.scss';
export default {
  name: 'modal',
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeModal() {
      this.$emit('update:active', false);
    }
  }
};
</script>
