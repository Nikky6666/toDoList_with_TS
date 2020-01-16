import React from 'react'
import {ITodolist} from "./types/types";
import ToDolist from "./ToDolist";
import {connect} from "react-redux";
import {AppStateType} from "./redux/store";
import AddNewItemForm from "./AddNewItemForm";
import {addTodolist, setTodolists} from "./redux/reducer";

interface IProps {
}
interface IMapStateProps {
    todolists: Array<ITodolist>
}
interface IMapDispatchProps {
    addTodolist: (title: string) => void
    setTodolists: () => void
}

class App extends React.Component <IProps & IMapStateProps & IMapDispatchProps> {

    componentDidMount(): void {
        this.props.setTodolists();
    }

    addTodolist = (title: string) => {
        this.props.addTodolist(title);
    };

    render =() => {
        const todolists = this.props
            .todolists
            .map(td => <ToDolist key={td.id} id={td.id} title={td.title} tasks={td.tasks}/>);
        return (
            <>
                <div>
                    <AddNewItemForm addItem={this.props.addTodolist}/>
                </div>
                <div className="App">
                    {todolists}
                </div>
            </>)
    };
}

let mstp = (state: AppStateType): IMapStateProps => ({
    todolists: state.todolists
});

export default connect(mstp, {addTodolist, setTodolists})(App);
