<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <TaskTimerDisplay :time="time" />
    <button class="button" @click="start" :disabled="runningTimer">
      <span class="icon">
        <i class="fas fa-play"></i>
      </span>
      <span>Play</span>
    </button>
    <button class="button" @click="stop" :disabled="!runningTimer">
      <span class="icon">
        <i class="fas fa-stop"></i>
      </span>
      <span>Stop</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TaskTimerDisplay from "@/components/TaskTimerDisplay.vue";

export default defineComponent({
  name: "TaskTimer",
  emits: ["stopedTimer"],
  components: {
    TaskTimerDisplay,
  },
  data() {
    return {
      time: 0,
      timer: 0,
      runningTimer: false,
    };
  },
  methods: {
    start() {
      this.runningTimer = true;
      this.timer = setInterval(() => {
        this.time += 1;
      }, 1000);
    },
    stop() {
      this.runningTimer = false;
      clearInterval(this.timer);
      this.$emit("stopedTimer", this.time);
      this.time = 0;
    },
  },
});
</script>