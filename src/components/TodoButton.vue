<script setup>

import { ref } from 'vue';
import { todoList } from '@/store';

const taskInput = ref("a sample task")
const selectedInput = ref("")



const addTask = (task, selected) => {
    const createdAt = new Date().toDateString()
    todoList.push({task, createdAt:createdAt, priority:selected})
    taskInput.value = ""
    selectedInput.value = ""
}

</script>


<template>
    <div class="getTodo">
        <label for="">Enter New task: </label>
        
        <input id="task" name="task" type="text" v-model="taskInput">
        <select v-model="selectedInput">
            <option disabled value="">Priority?</option>
            <option value="red">Red</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
        </select>
        
        <button class="bg-black text-white rounded-md" @click="addTask(taskInput, selectedInput)">
            New Task
        </button>
        
    </div>
</template>


<style scoped>



</style>
    
  