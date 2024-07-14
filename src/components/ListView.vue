<script setup>

import {todoList} from '../store.js'

const del = (todoID) => {
    const position = todoList.indexOf(todoID)
    todoList.splice(position, 1)
}

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
                <th scope="col">Action</th>
            </tr>
        </thead >
        <tbody>
            <tr v-for="todo in todoList" :key="todo">
                <th>{{ todo.task }}</th>
                <td>{{ todo.createdAt }}</td>
                <td>{{ todo.priority }}</td>
                <td><button class="del-btn" @click="del(todo)">Del</button></td>
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
th{
    border: 1px solid rgb(160 160 160);
    padding: 8px 10px;
}
td{
    border: 1px solid rgb(160 160 160);
    padding: 8px 10px;
}

tr {
    height: 2.5vh;
}

.del-btn{
    border-style: solid;
    border-color: black;
    border-width: 1px;
    border-radius: 5px;
}

</style>