<template>
    <div id="dashboard">
        <ul class="collection with-header">
            <li class="collection-header"><h4>Employee</h4></li>
            <li v-for="employee in employees" :key="employee.id" class="collection-item">
                <div class="chip">{{employee.dept}}</div>
                {{employee.employee_id}}:{{employee.name}}

                <router-link :to="{name:'view-employee',params:{employee_id: employee.employee_id}}" class="secondary-content">
                    <i class="material-icons">visibility</i>
                </router-link>
            </li>
        </ul>

        <div class="fixed-action-btn">
            <router-link :to="{name:'new-employee'}" class="btn-floating btn-large red">
                <i class="material-icons">add</i>
            </router-link>
        </div>
    </div>
</template>

<script>
import db from "../firebase"

export default {
    name:"dashboard",
    data(){
        return{
            employees:[]
        }
    },
    created(){
        db.collection('employee').orderBy('dept').get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc =>{
                    const data ={
                        'id': doc.id,
                        'employee_id': doc.data().employee_id,
                        'name': doc.data().name,
                        'dept': doc.data().dept,
                        'position': doc.data().position
                    }
                    this.employees.push(data)
                })
            })
    }
}
</script>