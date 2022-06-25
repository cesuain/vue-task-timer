<template>
  <div class="box task-form">
    <div class="columns">
      <div
        class="column is-8"
        role="form"
        aria-label="A form to create a new task"
      >
        <input
          type="text"
          class="input"
          placeholder="What task would you like to start?"
          v-model="taskDescription"
        />
      </div>
      <div class="column">
        <TaskTimer @stopedTimer="completeTask" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TaskTimer from "@/components/TaskTimer.vue";

export default defineComponent({
  name: "TaskForm",
  emits: ["onSaveTask"],
  components: {
    TaskTimer,
  },
  data() {
    return {
      taskDescription: "",
    };
  },
  methods: {
    completeTask(ranTimer: number): void {
      this.$emit("onSaveTask", {
        description: this.taskDescription,
        secondsDuration: ranTimer,
      });
      this.taskDescription = "";
    },
  },
});
</script>

<style>
.task-form {
  color: var(--text-primary);
  background-color: var(--bg-primary);
}
</style>