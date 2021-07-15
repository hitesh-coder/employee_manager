<template>
    <div class="login-form">
        <div class="section"></div>
        <main>
            <div class="center-align">
                <img
                    src="https://i.pinimg.com/originals/eb/17/d0/eb17d0925c49ef13af6e84cdfeaad079.gif"
                    style="width: 200px"
                    class="responsive-img"
                />
                <!-- <div class="section"></div> -->

                <h5 class="indigo-text">Login, with your account</h5>
                <!-- <div class="section"></div> -->

                <div class="container">
                    <div
                        class="z-depth-1 grey lighten-4 row"
                        style="
                            display: inline-block;
                            padding: 32px 48px 0px 48px;
                            border: 1px solid #eee;
                        "
                    >
                        <form class="col s12">
                            <!-- <div class="row">
                                <div class="col s12"></div>
                            </div> -->

                            <div class="row">
                                <div class="input-field col s12">
                                    <i class="material-icons prefix">email</i>
                                    <input
                                        type="email"
                                        id="email"
                                        v-model="email"
                                    />
                                    <label for="email">Enter your email</label>
                                </div>
                            </div>

                            <div class="row">
                                <div class="input-field col s12">
                                    <i class="material-icons prefix">lock</i>
                                    <input
                                        type="password"
                                        id="password"
                                        v-model="password"
                                    />
                                    <label for="password"
                                        >Enter your password</label
                                    >
                                </div>
                                <!-- <label style="float: right">
                                    <a class="pink-text" href="#!"
                                        ><b>Forgot Password?</b></a
                                    >
                                </label> -->
                            </div>

                            <br />
                            <div class="center-align">
                                <div class="row">
                                    <button
                                        class="
                                            col
                                            s12
                                            btn btn-large
                                            waves-effect
                                            indigo
                                        "
                                        @click="login"
                                    >
                                        Login
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div class="section"></div>
            <div class="section"></div>
        </main>
    </div>
</template>

<script>
import firebase from "firebase/app"

export default {
    name: "login",
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        login(e) {
            e.preventDefault();
            firebase
                .auth()
                .signInWithEmailAndPassword(this.email, this.password)
                .then(() => {
                    // console.log(userCredentail);
                    alert(`You are logged in as ${this.email}`);
                    this.$router.push("/");
                })
                .catch((error) => {
                    alert(error.message);
                });
        },
    },
};
</script>
