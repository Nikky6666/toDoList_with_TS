(this["webpackJsonptodolist-with-ts"]=this["webpackJsonptodolist-with-ts"]||[]).push([[0],{11:function(t,e,n){},30:function(t,e,n){t.exports=n(59)},35:function(t,e,n){},59:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),i=n(12),r=n.n(i),s=(n(35),n(2)),c=n(13),l=n(4),d=n(3),u=n(5),p=n(14),f=n(1),k=n(27),T=n.n(k).a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/todo-lists",withCredentials:!0,headers:{"API-KEY":"0a4552fd-fc88-4874-a12b-39f74cc52685"}}),h=function(){return T.get("")},m=function(t){return T.post("",{title:t})},v=function(t){return T.delete("/".concat(t))},b=function(t,e){return T.put("/".concat(t),{title:e})},O=function(t,e){return T.post("/".concat(e,"/tasks"),{title:t})},E=function(t,e){return T.put("/".concat(t,"/tasks/").concat(e.id),e)},j=function(t,e){return T.delete("/".concat(t,"/tasks/").concat(e))},C=function(t){return T.get("/".concat(t,"/tasks"))},g="TodoListTS/reduser/ADD_TODOLIST",I="TodoListTS/reduser/ADD_TASK",y="TodoListTS/reduser/CHANGE_TASK",S="TodoListTS/reduser/DELETE_TODOLIST",A="TodoListTS/reduser/DELETE_TASK",w="TodoListTS/reduser/SET_TODOLISTS",L="TodoListTS/reduser/SET_TASKS",D={todolists:[{addedDate:"",id:"",order:0,title:"",tasks:[{addedDate:"",completed:!1,deadline:null,order:0,priority:0,startDate:null,status:0,id:"",title:"",todoListId:""}]}]},F=function(t){return{type:g,todolist:t}},M=function(t,e){return{type:I,task:t,todolistId:e}},N=function(t,e,n){return{type:y,taskId:t,newTask:e,todolistId:n}},_=function(t){return{type:S,todolistId:t}},H=function(t,e){return{type:A,todolistId:t,taskId:e}},K=function(t){return{type:w,todolists:t}},V=function(t,e){return{type:L,tasks:t,todolistId:e}},P=function(t,e){return{type:"TodoListTS/reduser/UPDATE_TODOLIST_TITLE",todolistId:t,todolistTitle:e}},B=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case g:return Object(f.a)({},t,{todolists:[].concat(Object(p.a)(t.todolists),[e.todolist])});case I:return Object(f.a)({},t,{todolists:t.todolists.map((function(t){return t.id===e.todolistId?Object(f.a)({},t,{tasks:[].concat(Object(p.a)(t.tasks),[e.task])}):t}))});case"TodoListTS/reduser/UPDATE_TODOLIST_TITLE":return Object(f.a)({},t,{todolists:t.todolists.map((function(t){return t.id===e.todolistId?Object(f.a)({},t,{title:e.todolistTitle}):t}))});case y:return Object(f.a)({},t,{todolists:t.todolists.map((function(t){return t.id===e.todolistId?Object(f.a)({},t,{tasks:t.tasks.map((function(t){return t.id!==e.taskId?t:e.newTask}))}):t}))});case S:return Object(f.a)({},t,{todolists:t.todolists.filter((function(t){return t.id!==e.todolistId}))});case A:return Object(f.a)({},t,{todolists:t.todolists.map((function(t){return t.id===e.todolistId?Object(f.a)({},t,{tasks:t.tasks.filter((function(t){return t.id!==e.taskId}))}):t}))});case w:return Object(f.a)({},t,{todolists:e.todolists.map((function(t){return Object(f.a)({},t,{tasks:[]})}))});case L:return Object(f.a)({},t,{todolists:Object(p.a)(t.todolists.map((function(t){return t.id===e.todolistId?Object(f.a)({},t,{tasks:e.tasks}):t})))});default:return t}},x=n(9),U=(n(11),function(t){function e(){var t,n;Object(s.a)(this,e);for(var o=arguments.length,i=new Array(o),r=0;r<o;r++)i[r]=arguments[r];return(n=Object(l.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(i)))).state={error:!1,title:""},n.onAddItemClick=function(){var t=n.state.title;""===t.trim()?n.setState({error:!0}):(n.props.addItem(t),n.setState({error:!1,title:""}))},n.onChangeInput=function(t){n.setState({title:t.currentTarget.value}),""===t.currentTarget.value?n.setState({error:!0}):n.setState({error:!1})},n.onKeyPress=function(t){"Enter"===t.key&&n.onAddItemClick()},n.render=function(){var t=n.state.error?"error":"";return a.a.createElement("div",{className:"newItemForm"},a.a.createElement("input",{onKeyPress:n.onKeyPress,onChange:n.onChangeInput,type:"text",placeholder:"New item name",className:"".concat(t," decorationInput"),value:n.state.title}),a.a.createElement("button",{onClick:n.onAddItemClick},"Add"))},n}return Object(u.a)(e,t),e}(a.a.Component)),J=function(t){function e(){var t,n;Object(s.a)(this,e);for(var o=arguments.length,i=new Array(o),r=0;r<o;r++)i[r]=arguments[r];return(n=Object(l.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(i)))).state={editMode:!1,title:n.props.title},n.deactivateEditMode=function(){n.setState({editMode:!1}),n.props.updateTodolistTitle(n.props.todolistId,n.state.title)},n.activateEditMode=function(){n.setState({editMode:!0})},n.onTitleChanged=function(t){n.setState({title:t.currentTarget.value})},n.deleteTodolist=function(){n.props.deleteTodolist(n.props.todolistId)},n.render=function(){return a.a.createElement("div",null,n.state.editMode?a.a.createElement("input",{onBlur:n.deactivateEditMode,autoFocus:!0,value:n.state.title,onChange:n.onTitleChanged}):a.a.createElement("h3",{onDoubleClick:n.activateEditMode,className:"todoList-header__title"},n.props.title,a.a.createElement("button",{onClick:n.deleteTodolist},"X")))},n}return Object(u.a)(e,t),e}(a.a.Component),W=function(t){function e(){var t,n;Object(s.a)(this,e);for(var o=arguments.length,i=new Array(o),r=0;r<o;r++)i[r]=arguments[r];return(n=Object(l.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(i)))).state={editMode:!1,title:n.props.task.title},n.activateEditMode=function(){n.setState({editMode:!0})},n.deactivateEditMode=function(){n.setState({editMode:!1});var t=Object(f.a)({},n.props.task,{title:n.state.title});n.props.changeTask(t)},n.onTitleChanged=function(t){n.setState({title:t.currentTarget.value})},n.onIsDoneChanged=function(t){var e=t.currentTarget.checked?2:0,o=Object(f.a)({},n.props.task,{status:e});n.props.changeTask(o)},n.render=function(){var t,e=2===n.props.task.status?"todoList-task done":"todoList-task";switch(n.props.task.priority){case 0:t="low";break;case 1:t="middle";break;case 2:t="hi";break;case 3:t="urgently";break;case 4:t="later";break;default:t="low"}return a.a.createElement("div",{className:e},a.a.createElement("input",{type:"checkbox",checked:2===n.props.task.status,onChange:n.onIsDoneChanged}),n.state.editMode?a.a.createElement("input",{onBlur:n.deactivateEditMode,autoFocus:!0,value:n.state.title,onChange:n.onTitleChanged}):a.a.createElement("span",{onClick:n.activateEditMode},n.props.task.title,", priority: ",t),a.a.createElement("button",{onClick:function(){n.props.deleteTask(n.props.task.id)}},"X"))},n}return Object(u.a)(e,t),e}(a.a.Component),X=function(t){function e(){var t,n;Object(s.a)(this,e);for(var o=arguments.length,i=new Array(o),r=0;r<o;r++)i[r]=arguments[r];return(n=Object(l.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(i)))).render=function(){var t=n.props.tasks.map((function(t){return a.a.createElement(W,{todolistId:n.props.todolistId,key:t.id,task:t,deleteTask:n.props.deleteTask,changeTask:n.props.changeTask})}));return a.a.createElement("div",{className:"todoList-tasks"},t)},n}return Object(u.a)(e,t),e}(a.a.Component),G=function(t){function e(){var t,n;Object(s.a)(this,e);for(var o=arguments.length,i=new Array(o),r=0;r<o;r++)i[r]=arguments[r];return(n=Object(l.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(i)))).state={isHidden:!1},n.onAllFilterClick=function(){n.props.changeFilter("All")},n.onCompletedFilterClick=function(){n.props.changeFilter("Completed")},n.onActiveFilterClick=function(){n.props.changeFilter("Active")},n.onShowFiltersClick=function(){n.setState({isHidden:!1})},n.onHideFiltersClick=function(){n.setState({isHidden:!0})},n.render=function(){var t="All"===n.props.filterValue?"filter-active":"",e="Completed"===n.props.filterValue?"filter-active":"",o="Active"===n.props.filterValue?"filter-active":"";return a.a.createElement("div",{className:"todoList-footer"},!n.state.isHidden&&a.a.createElement("div",null,a.a.createElement("button",{onClick:n.onAllFilterClick,className:t},"All"),a.a.createElement("button",{onClick:n.onCompletedFilterClick,className:e},"Completed"),a.a.createElement("button",{onClick:n.onActiveFilterClick,className:o},"Active")),!n.state.isHidden&&a.a.createElement("span",{onClick:n.onHideFiltersClick},"hide"),n.state.isHidden&&a.a.createElement("span",{onClick:n.onShowFiltersClick},"show"))},n}return Object(u.a)(e,t),e}(a.a.Component),R=function(t){function e(){var t,n;Object(s.a)(this,e);for(var o=arguments.length,i=new Array(o),r=0;r<o;r++)i[r]=arguments[r];return(n=Object(l.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(i)))).state={filterValue:"All"},n.onAddTask=function(t){n.props.addTask(n.props.id,t)},n.changeFilter=function(t){n.setState({filterValue:t})},n.changeTask=function(t){n.props.updateTask(n.props.id,t)},n.deleteTask=function(t){n.props.deleteTask(n.props.id,t)},n.render=function(){var t=n.props.tasks,e=void 0===t?[]:t;return a.a.createElement("div",{className:"todoList"},a.a.createElement("div",{className:"todoList-header"},a.a.createElement(J,{title:n.props.title,updateTodolistTitle:n.props.updateTodolistTitle,deleteTodolist:n.props.deleteTodolist,todolistId:n.props.id}),a.a.createElement(U,{addItem:n.onAddTask})),a.a.createElement(X,{todolistId:n.props.id,tasks:function(t,e){return t.filter((function(t){switch(e){case"All":return!0;case"Completed":return 2===t.status;case"Active":return 2!==t.status}}))}(e,n.state.filterValue),deleteTask:n.deleteTask,changeTask:n.changeTask}),a.a.createElement(G,{changeFilter:n.changeFilter,filterValue:n.state.filterValue}))},n}return Object(u.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){this.props.loadTasks(this.props.id)}}]),e}(a.a.Component),Y=Object(x.b)(null,{addTask:function(t,e){return function(n){O(e,t).then((function(e){var o=e.data.data.item;n(M(o,t))}))}},updateTask:function(t,e){return function(n,o){var a=o().todolists.find((function(e){return e.id===t}));a&&a.tasks.forEach((function(o){o.id===e.id&&E(t,e).then((function(o){0===o.data.resultCode&&n(N(e.id,e,t))}))}))}},deleteTask:function(t,e){return function(n){j(t,e).then((function(o){0===o.data.resultCode&&n(H(t,e))}))}},deleteTodolist:function(t){return function(e,n){n().todolists.find((function(e){return e.id===t}))&&v(t).then((function(n){0===n.data.resultCode&&e(_(t))}))}},updateTodolistTitle:function(t,e){return function(n,o){o().todolists.find((function(e){return e.id===t}))&&b(t,e).then((function(o){0===o.data.resultCode&&n(P(t,e))}))}},loadTasks:function(t){return function(e){C(t).then((function(n){var o=n.data.items;e(V(o,t))}))}}})(R),$=function(t){function e(){var t,n;Object(s.a)(this,e);for(var o=arguments.length,i=new Array(o),r=0;r<o;r++)i[r]=arguments[r];return(n=Object(l.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(i)))).addTodolist=function(t){n.props.addTodolist(t)},n.render=function(){var t=n.props.todolists.map((function(t){return a.a.createElement(Y,{key:t.id,id:t.id,title:t.title,tasks:t.tasks})}));return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",null,a.a.createElement(U,{addItem:n.props.addTodolist})),a.a.createElement("div",{className:"App"},t))},n}return Object(u.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){this.props.setTodolists()}}]),e}(a.a.Component),q=Object(x.b)((function(t){return{todolists:t.todolists}}),{addTodolist:function(t){return function(e){m(t).then((function(t){var n=t.data.data.item;e(F(n))}))}},setTodolists:function(){return function(t){h().then((function(e){t(K(e.data))}))}}})($);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z=n(10),Q=n(29),Z=Object(z.c)(B,Object(z.a)(Q.a));r.a.render(a.a.createElement(x.a,{store:Z},a.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[30,1,2]]]);
//# sourceMappingURL=main.ba295661.chunk.js.map