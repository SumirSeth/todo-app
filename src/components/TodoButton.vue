<script setup>

import { ref } from 'vue';


const task = ref("a sample task")
const selected = ref("")

const todoList = ref([
    {
        task: "get the dog out",
        createdAt: "7 AM Monday",
        priority: "1"
    },
    {
        task: "get the cat out",
        createdAt: "8 PM Saturday",
        priority: "2"
    },
    {
        task: "get the horse out",
        createdAt: "9 PM Sunday",
        priority: "3"
    },
])

const addTask = (task, selected) => {
    const createdAt = new Date().toDateString()
    todoList.value.push({task, createdAt:createdAt, priority:selected})
    console.log(todoList.value)
}

</script>


<template>
    <div class="getTodo">
        <label for="">Enter New task: </label>
        
        <input id="task" name="task" type="text" v-model="task">
        <select v-model="selected">
            <option disabled value="">Priority?</option>
            <option value="red">Red</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
        </select>
        
        <button class="bg-black text-white rounded-md" @click="addTask(task, selected)">
            New Task
        </button>
        
    </div>
</template>


<style scoped>



</style>
    
  