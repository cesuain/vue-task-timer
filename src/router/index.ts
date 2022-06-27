import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";

import ProjectsView from "@/views/ProjectsView.vue";
import TasksView from "@/views/TasksView.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "TasksView",
    component: TasksView,
  },
  {
    path: "/projects",
    name: "ProjectsView",
    component: ProjectsView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
