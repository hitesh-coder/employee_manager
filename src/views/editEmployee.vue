<template>
    <div id="edit-employee">
        <h3>Edit-employee</h3>
        <div class="row">
            <form @submit.prevent="saveEmployee" class="col s12">
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="employee_id" disabled>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="name" required>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="dept" required>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="position" required>
                    </div>
                </div>
                <button class="waves-effect waves-light btn" @click="updateEmployee">Update</button>
                <router-link :to="{name:'dashboard'}" class="btn red">Cancel</router-link>
            </form>
        </div>
    </div>
</template>

<script>
import db from "../firebase"

export default {
    name:"edit-employee",
    data(){
        return{
            employee_id: null,
            name: null,
            dept: null,
            position: null,
        }
    },
    beforeRouteEnter(to, from, next) {
        db.collection("employee")
            .where("employee_id", "==", to.params.employee_id)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    next((vm) => {
                        vm.employee_id = doc.data().employee_id;
                        vm.name = doc.data().name;
                        vm.dept = doc.data().dept;
                        vm.position = doc.data().position;
                    });
                });
            });
    },
    watch: {
        '$router': 'fetchData',
    },
    methods:{
        fetchData() {
            db.collection("employee")
                .where("employee_id", "==", this.$route.params.employee_id)
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        this.employee_id = doc.data().employee_id;
                        this.name = doc.data().name;
                        this.dept = doc.data().dept;
                        this.position = doc.data().position;
                    });
                });
        },
        updateEmployee(){
            db.collection("employee")
                .where("employee_id", "==", this.$route.params.employee_id)
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        doc.ref.update({
                            employee_id: this.employee_id,
                            name: this.name,
                            dept: this.dept,
                            position: this.position,
                        })
                        .then(this.$router.push({name: 'view-employee', params:{employee_id: this.employee_id}}))
                    });
                });
        }
    },
}
</script>

<style lang="scss">
.btn{
    margin-right: 0.5rem;
    margin-bottom: 1rem;
}
</style>