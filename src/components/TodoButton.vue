<script setup>

import { ref } from 'vue';
import { todoList } from '@/store';

const task = ref("a sample task")
const selected = ref("")



const addTask = (task, selected) => {
    const createdAt = new Date().toDateString()
    todoList.push({task, createdAt:createdAt, priority:selected})
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
    
  