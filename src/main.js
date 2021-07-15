import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import firebase from "firebase/app"
// import "firebase"
// require('firebase/auth')

// firebase.auth().onAuthStateChanged( (user) =>{
//     if (!user) {
//         createApp(App).use(router).mount("#app");
//     }
// })

createApp(App).use(router).mount("#app");
