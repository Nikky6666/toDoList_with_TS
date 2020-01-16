import React from 'react';
import './App.css';

interface IProps {
    changeFilter: (newFilterValue: string) => void
    filterValue: string
}

interface IState {
    isHidden: boolean
}

class ToDoListFooter extends React.Component<IProps, IState> {

    state = {
        isHidden: false
    };

    onAllFilterClick = (): void => {this.props.changeFilter("All") };
    onCompletedFilterClick = (): void => {this.props.changeFilter("Completed")};
    onActiveFilterClick = (): void => {this.props.changeFilter("Active") };
    onShowFiltersClick = (): void => {this.setState({isHidden: false})};
    onHideFiltersClick = (): void => {this.setState({isHidden: true})};

    render = () => {

        let classForAll = this.props.filterValue === "All" ? "filter-active" : "";
        let classForCompleted = this.props.filterValue === "Completed" ? "filter-active" : "";
        let classForActive = this.props.filterValue === "Active" ? "filter-active" : "";

        return (
            <div className="todoList-footer">
                {!this.state.isHidden && <div>
                <button onClick={this.onAllFilterClick} className={classForAll}>All</button>
                <button onClick={ this.onCompletedFilterClick} className={classForCompleted}>Completed</button>
                <button onClick={ this.onActiveFilterClick} className={classForActive}>Active</button>
                </div>
               }
                {!this.state.isHidden && <span onClick={this.onHideFiltersClick}>hide</span>}
                {this.state.isHidden && <span onClick={this.onShowFiltersClick}>show</span>}
            </div>
        );
    }
}

export default ToDoListFooter;
