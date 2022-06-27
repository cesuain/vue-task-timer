<template>
  <section>
    <TaskForm @onSaveTask="saveTask" />
    <TaskList :tasks="tasks" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TaskForm from "@/components/TaskForm.vue";
import TaskList from "@/components/TaskList.vue";

import ITask from "@/interfaces/ITask";

export default defineComponent({
  name: "App",
  components: {
    TaskForm,
    TaskList,
  },
  data() {
    return {
      tasks: [] as ITask[],
    };
  },
  methods: {
    saveTask(task: ITask) {
      this.tasks.push(task);
    },
  },
});
</script>