<template>
  <TaskBox>
    <div class="columns">
      <div class="column is-7">
        {{ task.description || "Task without description" }}
      </div>
      <div class="column">
        <TaskTimerDisplay :time="task.secondsDuration" />
      </div>
    </div>
  </TaskBox>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import TaskTimerDisplay from "@/components/TaskTimerDisplay.vue";
import TaskBox from "@/components/TaskBox.vue";

import ITask from "@/interfaces/ITask";

export default defineComponent({
  name: "TaskListItem",
  components: {
    TaskTimerDisplay,
    TaskBox,
  },
  props: {
    task: {
      type: Object as PropType<ITask>,
      required: true,
    },
  },
});
</script>