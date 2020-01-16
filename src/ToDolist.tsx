import React from "react";
import {ITask} from "./types/types";


import {
    addTask,
    deleteTask,
    deleteTodolist,
    loadTasks,
    updateTask,
    updateTodolistTitle
} from "./redux/reducer";
import {connect} from "react-redux";
import AddNewItemForm from "./AddNewItemForm";
import ToDoListTitle from "./ToDoListTitle";
import ToDoListTasks from "./ToDoListTasks";
import ToDoListFooter from "./ToDoListFooter";

interface IProps {
   id: string
    title: string
    tasks: Array<ITask>
}

interface IMapDispatchProps {
    addTask: (todolistId: string, title: string) => void;
    updateTask: (todolistId: string, newTask: ITask) => void
    deleteTask: (todolistId: string, taskId: string) => void
    deleteTodolist: (todolistId: string) => void
    updateTodolistTitle: (todolistId: string, todolistTitle: string)  => void
    loadTasks: (todolisId: string) => void
}

interface IState {
    filterValue: string
}


class ToDoList extends React.Component<IProps & IMapDispatchProps, IState> {

    componentDidMount() {
        this.props.loadTasks(this.props.id);
    }

    state = {
        filterValue: "All",
    };


    onAddTask = (newTitle: string): void => {
        this.props.addTask(this.props.id, newTitle);
    };

    changeFilter = (newFilterValue: string): void => {
        this.setState({
            filterValue: newFilterValue
        })
    };

    changeTask = (updatedTask: ITask): void => {
        this.props.updateTask(this.props.id, updatedTask)
    };

    deleteTask = (taskId: string): void => {
        this.props.deleteTask(this.props.id, taskId);
    };

    render = () => {
        let {tasks = []} = this.props;
        const getFiltredTasks = (tasks: Array<ITask>, filter: string) => {
            return tasks.filter(t => {
                switch (filter) {
                    case 'All':
                        return true;
                    case 'Completed':
                        return t.status===2;
                    case 'Active':
                        return t.status!==2;
                }
            })
        };

        return (
            <div className="todoList">
                <div className="todoList-header">
                    <ToDoListTitle
                        title={this.props.title}
                        updateTodolistTitle={this.props.updateTodolistTitle}
                        deleteTodolist={this.props.deleteTodolist}
                        todolistId={this.props.id} />
                    <AddNewItemForm addItem={this.onAddTask}/>
                </div>
                <ToDoListTasks todolistId={this.props.id} tasks={getFiltredTasks(tasks, this.state.filterValue)}
                               deleteTask={this.deleteTask}
                               changeTask={this.changeTask}
                />
                < ToDoListFooter changeFilter={this.changeFilter} filterValue={this.state.filterValue}/>
            </div>
        );
    }
}

const ConnectedToDoList = connect( null, {addTask, updateTask, deleteTask, deleteTodolist, updateTodolistTitle, loadTasks})(ToDoList);

export default ConnectedToDoList;

