import axios from 'axios'
import {ITask} from "./types/types";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.1/todo-lists",
    withCredentials: true,
    headers: {"API-KEY": "0a4552fd-fc88-4874-a12b-39f74cc52685"}
});

export const todolistAPI = {
    getTodolists(){
        return  instance.get("");
    },
    createTodolist(title: string){
        return instance.post("", {title},)
    },
    deleteTodolist(todolistId: string){
        return instance.delete(`/${todolistId}`)
    },
    updateTodolistTitle(todolistId: string, title: string){
        return instance.put(`/${todolistId}`, {title})
    },
    createTask(newTaskTitle: string, todolistId: string){
        return   instance.post(`/${todolistId}/tasks`, {title: newTaskTitle})
    },
    updateTask(todolisId: string, updatedTask: ITask){
        return instance.put(`/${todolisId}/tasks/${updatedTask.id}`, updatedTask)
    },
    deleteTask(todolistId: string, taskId: string){
        return instance.delete(`/${todolistId}/tasks/${taskId}`)
    },
    getTasks(todolistId: string){
        return instance.get(`/${todolistId}/tasks`)
    }
};