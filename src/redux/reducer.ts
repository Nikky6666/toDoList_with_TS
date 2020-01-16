import {ITask, ITodolist} from "../types/types";
import {Action} from "redux";
import {todolistAPI} from "../todolistAPI";
import {ThunkAction} from 'redux-thunk'
import {AppStateType} from "./store";

const ADD_TODOLIST = "TodoListTS/reduser/ADD_TODOLIST";
const ADD_TASK = "TodoListTS/reduser/ADD_TASK";
const CHANGE_TASK = "TodoListTS/reduser/CHANGE_TASK";
const DELETE_TODOLIST = "TodoListTS/reduser/DELETE_TODOLIST";
const DELETE_TASK = "TodoListTS/reduser/DELETE_TASK";
const SET_TODOLISTS = "TodoListTS/reduser/SET_TODOLISTS";
const SET_TASKS = "TodoListTS/reduser/SET_TASKS";
const UPDATE_TODOLIST_TITLE = "TodoListTS/reduser/UPDATE_TODOLIST_TITLE";

interface IInitialState {
    todolists: Array<ITodolist>
}

const initialState = {
    todolists: [
        {
            addedDate: "", id: "", order: 0, title: "", tasks: [
                {
                    addedDate: "",
                    completed: false,
                    deadline: null,
                    order: 0,
                    priority: 0,
                    startDate: null,
                    status: 0,
                    id: "",
                    title: "",
                    todoListId: ""
                }]
        }
    ]
};

const reducer = (state = initialState, action: TodolistsReducerActionTypes): IInitialState => {
    switch (action.type) {
        case ADD_TODOLIST:
            return {...state, todolists: [...state.todolists, action.todolist]};
        case ADD_TASK:
            return {
                ...state,
                todolists: state.todolists.map((tl) => {
                        if (tl.id === action.todolistId) return {...tl, tasks: [...tl.tasks, action.task]};
                        else return tl
                    }
                )
            };
        case UPDATE_TODOLIST_TITLE:
            return {
                ...state, todolists: state.todolists.map(tl => {
                    if (tl.id === action.todolistId) return {...tl, title: action.todolistTitle};
                    else return tl
                })
            };
        case CHANGE_TASK: //action = {type: "", taskId, isDone, todolistId}
            return {
                ...state,
                todolists: state.todolists.map(tl => {
                    if (tl.id === action.todolistId) return {
                        ...tl, tasks: tl.tasks.map(t => {
                            if (t.id !== action.taskId) return t;
                            else return action.newTask
                        })
                    };
                    else return tl
                })
            };
        case DELETE_TODOLIST:
            return {
                ...state,
                todolists: state.todolists.filter(tl => tl.id !== action.todolistId)
            };

        case DELETE_TASK:
            return {
                ...state,
                todolists: state.todolists.map(tl => {
                    if (tl.id === action.todolistId) return {
                        ...tl, tasks: tl.tasks.filter(t => t.id !== action.taskId)
                    };
                    else return tl
                })
            };
        case SET_TODOLISTS:
            return {
                ...state,
                todolists: action.todolists.map(tl => ({...tl, tasks: []}))
            };
        case SET_TASKS:
            return {
                ...state,
                todolists: [...state.todolists.map(tl => {
                    if (tl.id === action.todolistId) return {...tl, tasks: action.tasks};
                    else return tl;
                })
                ]
            };
        default:
            return state;
    }
};

type ILoadTasks = (todolisId: string) => ThunkAction<void, AppStateType, null, Action>
type IAddTask = (todolistId: string, title: string) => ThunkAction<void, AppStateType, null, Action>
type IUpdateTask = (todolistId: string, newTask: ITask) => ThunkAction<void, AppStateType, null, Action>
type IAddTodolist = (title: string) => ThunkAction<void, AppStateType, null, Action>
type ISetTodolists = () => ThunkAction<void, AppStateType, null, Action>
type IDeleteTodolist = (todolistId: string) => ThunkAction<void, AppStateType, null, Action>
type IDeleteTask = (todolistId: string, taskId: string) => ThunkAction<void, AppStateType, null, Action>
type IUpdateTodolistTitle = (todolistId: string, todolistTitle: string) => ThunkAction<void, AppStateType, null, Action>

export const loadTasks: ILoadTasks = (todolistId) => (dispatch): void => {
    todolistAPI.getTasks(todolistId).then(res => {
        const allTasks = res.data.items;
        dispatch(setTasks(allTasks, todolistId));
    })
};
export const addTask: IAddTask = (todolistId, title) => (dispatch): void => {
    todolistAPI.createTask(title, todolistId).then(res => {
        const newTask = res.data.data.item;
        dispatch(createTaskSuccess(newTask, todolistId))
    })
};
export const updateTask: IUpdateTask = (todolistId, newTask) => (dispatch, getState): void => {
    const finedTodolists = getState().todolists.find(tl => tl.id === todolistId);
    if (finedTodolists) {
        finedTodolists.tasks.forEach((t => {
            if (t.id === newTask.id) {
                todolistAPI.updateTask(todolistId, newTask).then(res => {
                    if (res.data.resultCode === 0) dispatch(updateTaskSuccess(newTask.id, newTask, todolistId))
                })
            }
        }))
    }
};
export const addTodolist: IAddTodolist = (title) => (dispatch): void => {
    todolistAPI.createTodolist(title).then(res => {
        const newTodolist = res.data.data.item;
        dispatch(createTodolistSuccess(newTodolist));
    })
};
export const setTodolists: ISetTodolists = () => (dispatch): void => {
    todolistAPI.getTodolists().then(res => {
        dispatch(getTodolistsSuccess(res.data));
    })
};
export const deleteTodolist: IDeleteTodolist = (todolistId) => (dispatch, getState): void => {
    if (getState().todolists.find(tl => tl.id === todolistId)) {
        todolistAPI.deleteTodolist(todolistId).then(res => {
            if (res.data.resultCode === 0) dispatch(deleteTodolistSuccess(todolistId));
        })
    }
};
export const deleteTask: IDeleteTask = (todolistId, taskId)=> (dispatch): void => {
    todolistAPI.deleteTask(todolistId, taskId).then(res => {
        if (res.data.resultCode === 0) dispatch(deleteTaskSuccess(todolistId, taskId))
    })
};
export const updateTodolistTitle: IUpdateTodolistTitle = (todolistId, todolistTitle) => (dispatch, getState): void => {
    if (getState().todolists.find(tl => tl.id === todolistId)) {
        todolistAPI.updateTodolistTitle(todolistId, todolistTitle).then(res => {
            if (res.data.resultCode === 0) dispatch(updateTodolistTitleSuccess(todolistId, todolistTitle));
        })
    }
};

type TodolistsReducerActionTypes =
    ICreateTodolistSuccess
    | ICreateTaskSuccess
    | IUpdateTaskSuccess
    | IDeleteTodolistSuccess
    |
    IDeleteTaskSuccess
    | IGetTodolistsSuccess
    | ISetTasks
    | IUpdateTodolistTitleSuccess;

interface ICreateTodolistSuccess {
    type: typeof ADD_TODOLIST
    todolist: ITodolist
}
interface ICreateTaskSuccess {
    type: typeof ADD_TASK
    task: ITask
    todolistId: string
}
interface IUpdateTaskSuccess {
    type: typeof CHANGE_TASK
    taskId: string
    newTask: ITask
    todolistId: string
}
interface IDeleteTodolistSuccess {
    type: typeof DELETE_TODOLIST
    todolistId: string
}
interface IDeleteTaskSuccess {
    type: typeof DELETE_TASK
    todolistId: string
    taskId: string
}
interface IGetTodolistsSuccess {
    type: typeof SET_TODOLISTS
    todolists: Array<ITodolist>
}
interface ISetTasks {
    type: typeof SET_TASKS
    tasks: Array<ITask>
    todolistId: string
}
interface IUpdateTodolistTitleSuccess {
    type: typeof UPDATE_TODOLIST_TITLE
    todolistTitle: string
    todolistId: string
}

const createTodolistSuccess = (todolist: ITodolist): ICreateTodolistSuccess => ({type: ADD_TODOLIST, todolist});
const createTaskSuccess = (task: ITask, todolistId: string): ICreateTaskSuccess => ({type: ADD_TASK, task, todolistId});
const updateTaskSuccess = (taskId: string, newTask: ITask, todolistId: string): IUpdateTaskSuccess => ({
    type: CHANGE_TASK,
    taskId,
    newTask,
    todolistId
});
const deleteTodolistSuccess = (todolistId: string): IDeleteTodolistSuccess => ({type: DELETE_TODOLIST, todolistId});
const deleteTaskSuccess = (todolistId: string, taskId: string): IDeleteTaskSuccess => ({
    type: DELETE_TASK,
    todolistId,
    taskId
});
const getTodolistsSuccess = (todolists: Array<ITodolist>): IGetTodolistsSuccess => ({type: SET_TODOLISTS, todolists});
const setTasks = (tasks: Array<ITask>, todolistId: string): ISetTasks => ({type: SET_TASKS, tasks, todolistId});
const updateTodolistTitleSuccess = (todolistId: string, todolistTitle: string): IUpdateTodolistTitleSuccess => ({
    type: UPDATE_TODOLIST_TITLE,
    todolistId,
    todolistTitle
});

export default reducer;

