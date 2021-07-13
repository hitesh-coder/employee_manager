import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: () =>
      import("../views/dashboard.vue"),
  },
  {
    path: "/edit/:employee_id",
    name: "edit-employee",
    component: () =>
      import("../views/editEmployee.vue"),
  },
  {
    path: "/new",
    name: "new-employee",
    component: () =>
      import("../views/newEmployee.vue"),
  },
  {
    path: "/view/:employee_id",
    name: "view-employee",
    component: () =>
      import("../views/viewEmployee.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
