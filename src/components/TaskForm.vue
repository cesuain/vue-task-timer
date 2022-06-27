<template>
  <div class="box task-form">
    <div class="columns">
      <div
        class="column is-5"
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
      <div class="column is-3">
        <div class="select">
          <select v-model="idProject">
            <option value="">Select the project</option>
            <option
              :value="project.id"
              v-for="project in projects"
              :key="project.id"
            >
              {{ project.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="column">
        <TaskTimer @stopedTimer="completeTask" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import { key } from "@/store";
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
      idProject: "",
    };
  },
  methods: {
    completeTask(ranTimer: number): void {
      this.$emit("onSaveTask", {
        description: this.taskDescription,
        secondsDuration: ranTimer,
        project: this.projects.find(project => project.id == this.idProject)
      });
      this.taskDescription = "";
    },
  },
  setup() {
    const store = useStore(key);

    return {
      projects: computed(() => store.state.projects),
    };
  },
});
</script>

<style>
.task-form {
  color: var(--text-primary);
  background-color: var(--bg-primary);
}
</style>