<template>
    <nav>
        <div class="nav-wrapper green">
            <div class="container">
                <router-link :to="{name: 'dashboard'}" class="brand-logo">Employee Manager</router-link>
                <ul class="right">
                    <li><router-link :to="{name:'dashboard'}">Dashboard</router-link></li>
                    <li><router-link :to="{name:'login'}">Login</router-link></li>
                    <li><router-link :to="{name:'register'}">Register</router-link></li>
                    <li><button @click="logout" class="btn black">Logout</button></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import firebase from "firebase/app";

export default {
    name:"navbar",
    data(){
        return{
            isLoggedIn: false,
            currentUser: false
        }
    },
    methods:{
        logout(){
            firebase.auth().signOut()
                .then( () => {
                    this.$router.push('/login')
                })
        }
    }
}
</script>