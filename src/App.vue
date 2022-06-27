<template>
  <main :class="['columns is-gapless is-multiline', { 'dark-mode': darkMode }]">
    <div class="column is-one-fifth">
      <SideBar @onChangedTheme="changeTheme" />
    </div>
    <div class="column is-four-fifth content">
      <router-view></router-view>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SideBar from "@/components/SideBar.vue";

import ITask from "@/interfaces/ITask";

export default defineComponent({
  name: "App",
  components: {
    SideBar,
  },
  data() {
    return {
      darkMode: false,
    };
  },
  methods: {
    changeTheme(darkMode: boolean) {
      this.darkMode = darkMode;
    },
  },
});
</script>

<style>
main {
  --bg-primary: #fff;
  --text-primary: #000;
}
main.dark-mode {
  --bg-primary: #2b2d42;
  --text-primary: #ddd;
}
.content {
  background-color: var(--bg-primary);
}
</style>
