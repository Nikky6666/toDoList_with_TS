import React, {ChangeEvent} from 'react';
import './App.css';

interface IProps {
    deleteTodolist: (todolistId: string) => void
    updateTodolistTitle: (todolistId: string, todolistTitle: string)  => void
    todolistId: string
    title: string
}

interface IState {
    editMode: boolean
    title: string
}

class ToDoListTitle extends React.Component<IProps, IState> {
    state = {
        editMode: false,
        title: this.props.title
    };
    deactivateEditMode = (): void => {
        this.setState({
            editMode: false
        });
        this.props.updateTodolistTitle(this.props.todolistId, this.state.title);
    };
    activateEditMode = (): void =>{
        this.setState({
            editMode: true
        })
    };
    onTitleChanged = (e: ChangeEvent<HTMLInputElement>): void =>{
        this.setState({
            title: e.currentTarget.value,
        })
    };
    deleteTodolist = (): void => {
        this.props.deleteTodolist(this.props.todolistId);
    };
    render = () =><div className="todoList-header__title">
        {this.state.editMode? <input onBlur={this.deactivateEditMode} autoFocus={true} value={this.state.title} onChange={this.onTitleChanged}/>:
        <><h3 onDoubleClick={this.activateEditMode}>{this.props.title}</h3>
            <button className="buttonDelete" onClick={this.deleteTodolist}>X</button></>}
    </div>
}

export default ToDoListTitle;

