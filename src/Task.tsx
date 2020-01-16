import React from "react";
import {ITask} from "./types/types";

interface IProps {
    task: ITask
}
const Task = (props: IProps) => <li>
    <input type="checkbox" checked={props.task.status ===1}/>
    {props.task.title}
</li>;

export default Task;