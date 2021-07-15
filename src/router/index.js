import { createRouter, createWebHistory } from "vue-router";
// import firebase from "firebase/app";

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: () =>
      import("../views/dashboard.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/register",
    name: "register",
    component: () =>
      import("../views/register.vue"),
    meta: {
      requiresGuest: true
    }
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import("../views/login.vue"),
    meta: {
      requiresGuest: true
    }
  },
  {
    path: "/edit/:employee_id",
    name: "edit-employee",
    component: () =>
      import("../views/editEmployee.vue"),
    meta:{
      requiresAuth: true
    }
  },
  {
    path: "/new",
    name: "new-employee",
    component: () =>
      import("../views/newEmployee.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/view/:employee_id",
    name: "view-employee",
    component: () =>
      import("../views/viewEmployee.vue"),
    meta: {
      requiresAuth: true
    }
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router.beforeEach((to,from,next) =>{
//   // check for requireAuth guard
//   if(to.matched.some(record => record.meta.requiresAuth)){
//     // check if NOT logged in
//     if(!firebase.auth().currentUser){
//       // Go to login
//       next({
//         path: "/login",
//         query:{
//           redirect: to.fullPath
//         }
//       })
//     }
//     else{
//       // Proceeds to route
//       next();
//     }
//   }
//   else if (to.matched.some(record => record.meta.requiresGuest)) {
//     // check if NOT logged in
//     if (firebase.auth().currentUser) {
//       // Go to login
//       next({
//         path: "/",
//         query: {
//           redirect: to.fullPath
//         }
//       })
//     }
//     else {
//       // Proceeds to route
//       next();
//     }
//   }
//   else{
//     // Proceeds to route
//     next();
//   }
// })

export default router;
