<template>
  <header>
    <h1>
      <img src="../assets/logo.png" :style="{ height: '120px' }" />
    </h1>
    <button class="button is-small" @click="handleTheme">
      Dark Mode: {{ buttonText }}
    </button>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SideBar",
  emits: ["onChangedTheme"],
  data() {
    return {
      darkMode: false,
    };
  },
  computed: {
    buttonText() {
      if (this.darkMode) {
        return "On";
      }

      return "Off";
    },
  },
  methods: {
    handleTheme() {
      this.darkMode = !this.darkMode;
      this.$emit("onChangedTheme", this.darkMode);
    },
  },
});
</script>

<style scoped>
header {
  padding: 1rem;
  background: #0d3b66;
  width: 100%;
  height: 100vh;
  text-align: center;
}
@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>