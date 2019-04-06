/**
 * @file             : index.js
 * @author           : pdeguing <pdeguing@student.42.us.org>
 * Date              : 05.04.2019
 * Last Modified Date: 05.04.2019
 * Last Modified By  : pdeguing <pdeguing@student.42.us.org>
 */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./TodoList";

var destination = document.querySelector("#container");

ReactDOM.render (
	<div>
		<TodoList/>
	</div>,
	destination
);
