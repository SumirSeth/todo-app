<script setup>

import {todoList} from '../store.js'



</script>



<template>
    <div class="list-view bg-red-500 text-center">
       <table>
        <!--<caption class="caption-bottom">tasks.</caption>-->
        <thead class="bg-red-700">
            <tr>
                <th scope="col">Task</th>
                <th scope="col">Created At</th>
                <th scope="col">Priority</th>
            </tr>
        </thead >
        <tbody>
            <tr v-for="todo in todoList" :key="todo">
                <th>{{ todo.task }}</th>
                <td>{{ todo.createdAt }}</td>
                <td>{{ todo.priority }}</td>
            </tr>
        </tbody>
       </table>
    </div>
</template>


<style scoped>  
table{
    border-collapse: collapse;
    border: 2px solid rgb(140 140 140);
}
th, td{
    border: 1px solid rgb(160 160 160);
    padding: 8px 10px;
}


</style>