<template>
  <section>
    <strong class="timer-display"> {{ countedTime }} </strong>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TaskTimerDisplay",
  props: {
    time: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    countedTime(): string {
      return new Date(this.time * 1000).toISOString().substr(11, 8);
    },
  },
});
</script>

<style scoped>
.timer-display {
  color: var(--text-primary);
}
</style>