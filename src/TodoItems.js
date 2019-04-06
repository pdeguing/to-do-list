/**
 * @file             : TodoItems.js
 * @author           : pdeguing <pdeguing@student.42.us.org>
 * Date              : 05.04.2019
 * Last Modified Date: 05.04.2019
 * Last Modified By  : pdeguing <pdeguing@student.42.us.org>
 */

import React, { Component } from "react";
import FlipMove from "react-flip-move";

class TodoItems extends Component {
	constructor(props) {
		super(props);

		this.createTasks = this.createTasks.bind(this);
	}

	delete(key) {
		this.props.delete(key);
	}

	createTasks(item) {
		return <li /*onClick={() => this.delete(item.key)}
				key={item.key}*/>
					<input type="checkbox"/>
					<span class="checkmark"></span>
					{item.text}
				</li>
	}

	render() {
		var todoEntries = this.props.entries;
		var listItems = todoEntries.map(this.createTasks);

		return (
			<ul className="theList">
				<FlipMove duration={250} easing="ease-out">
					{listItems}
				</FlipMove>
			</ul>
		);
	}
};

export default TodoItems;
