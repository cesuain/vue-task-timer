<template>
  <div class="task-list">
    <TaskListItem v-for="(task, index) in tasks" :key="index" :task="task" />
    <TaskBox v-if="emptyList"> No tasks have been created yet. </TaskBox>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import TaskListItem from "@/components/TaskListItem.vue";
import TaskBox from "@/components/TaskBox.vue";

import ITask from "@/interfaces/ITask";

export default defineComponent({
  name: "App",
  props: {
    tasks: {
      type: Array as PropType<ITask[]>,
      required: true,
    },
  },
  components: {
    TaskListItem,
    TaskBox,
  },
  computed: {
    emptyList(): boolean {
      return this.tasks.length === 0;
    },
  },
});
</script>

<style scoped>
.task-list {
  padding: 1.25em;
}
</style>
