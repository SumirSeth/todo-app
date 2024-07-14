import { reactive } from "vue";

export const todoList = reactive([
    {
        task: "get the dog out",
        createdAt: "7 AM Monday",
        priority: "red"
    },
    {
        task: "get the cat out",
        createdAt: "8 PM Saturday",
        priority: "yellow"
    },
    {
        task: "get the horse out",
        createdAt: "9 PM Sunday",
        priority: "green"
    },
])
