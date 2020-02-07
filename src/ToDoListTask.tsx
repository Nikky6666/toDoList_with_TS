import React, {ChangeEvent} from 'react';
import './App.css';
import {ITask} from "./types/types";

interface IProps {
    todolistId: string
    deleteTask: (taskId: string) => void
    changeTask: (updatedTask: ITask) => void
    task: ITask
}

interface IState {
    editMode: boolean
    title: string
}

class ToDoListTask extends React.Component<IProps, IState> {

    state = {
        editMode: false,
        title: this.props.task.title
    };

    activateEditMode = (): void => {
        this.setState({
            editMode: true
        })
    };

    deactivateEditMode= (): void => {
        this.setState({
            editMode: false
        });
        const updatedTask = {...this.props.task, title: this.state.title};
        this.props.changeTask(updatedTask);
    };

    onTitleChanged = (e: ChangeEvent<HTMLInputElement>): void =>{
        this.setState({
            title: e.currentTarget.value
        })
    };

    onIsDoneChanged = (e: ChangeEvent<HTMLInputElement>): void => {
        let status = e.currentTarget.checked ? 2 : 0;
        const updatedTask = {...this.props.task, status};
        this.props.changeTask(updatedTask);
    };

        render = () => {
            const classForTask = this.props.task.status===2 ? "todoList-task done" : "todoList-task";
            let priority;
            switch (this.props.task.priority) {
                case 0: priority = "low"; break;
                case 1: priority = "middle"; break;
                case 2: priority = "hi"; break;
                case 3: priority = "urgently"; break;
                case 4: priority = "later"; break;
                default: priority="low"; break;
            }
        return (<div className={classForTask}>
            <input className="todoList-task__checkbox" type="checkbox" checked={this.props.task.status===2} onChange={this.onIsDoneChanged} />
                {this.state.editMode ? <input className="todoList-task_input"
                                        onBlur={this.deactivateEditMode}
                                        autoFocus={true}
                                        value={this.state.title}
                                        onChange={this.onTitleChanged}
                    /> :
                    <span onClick={this.activateEditMode}>{this.props.task.title}, priority: {priority}</span>
                }
                <button className="buttonDelete"  onClick={()=> {this.props.deleteTask(this.props.task.id)}}>X</button>
        </div>
        );
    }
}


export default ToDoListTask;

