import React from 'react';
import ToDoListTask from './ToDoListTask';
import {ITask} from "./types/types";

interface IProps {
    todolistId: string
    deleteTask: (taskId: string) => void
    changeTask: (updatedTask: ITask) => void
    tasks: Array<ITask>
}

class ToDoListTasks extends React.Component<IProps> {
    render = () => {
        const tasksElements = this.props.tasks.map(
            task => <ToDoListTask todolistId={this.props.todolistId}
                                  key={task.id}
                                  task={task}
                                  deleteTask={this.props.deleteTask}
                                  changeTask={this.props.changeTask}
            />
        );
        return (
                    <div className="todoList-tasks">
                     {tasksElements}
                    </div>
        );
    }
}

export default ToDoListTasks;