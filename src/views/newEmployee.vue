<template>
    <div id="new-employee">
        <h3>Add Employee</h3>
        <div class="row">
            <form @submit.prevent="saveEmployee" class="col s12">
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="employee_id" required>
                        <label>Employee ID#</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="name" required>
                        <label>Name</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="dept" required>
                        <label>Department</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="position" required>
                        <label>Position</label>
                    </div>
                </div>
                <button class="waves-effect waves-light btn" @click="saveEmployee">Submit</button>
                <router-link :to="{name:'dashboard'}" class="btn red">Cancel</router-link>
            </form>
        </div>
    </div>
</template>

<script>
import db from "../firebase"

export default {
    name:"new-employee",
    data(){
        return{
            employee_id: null,
            name: null,
            dept: null,
            position: null,
        }
    },
    methods:{
        saveEmployee(){
            if (confirm("Are you sure?")) {
                db.collection("employee").add({
                    employee_id: this.employee_id,
                    name: this.name,
                    dept: this.dept,
                    position: this.position,
                })
                .then( this.$router.push('/') )
                .catch(error => console.log(error) )
            }
        }
    }
}
</script>

<style lang="scss">
.btn{
    margin-right: 0.5rem;
    margin-bottom: 1rem;
}
</style>