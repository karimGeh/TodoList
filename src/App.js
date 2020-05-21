import React, { Component } from "react";
import { v1 as uuid } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";

import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";

class App extends Component {
	state = {
		items: [
			{ id: 1, title: "wake up" },
			{ id: 2, title: "make breakfast" },
		],
		id: uuid(),
		item: "",
		editItem: false,
	};

	handleChange = (e) => {
		console.log(e);
	};

	handleSubmit = (e) => {
		e.preventDefault();
		console.log(e);
	};

	clearList = () => {
		console.log("clear list");
	};

	handleDelete = (id) => {
		console.log(`handle delete ${id}`);
	};
	handleEdit = (id) => {
		console.log(`handle edit ${id}`);
	};

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-10 mx-auto col-md-8 mt-5">
						<h3 className="text-capitalize text-center">Todo Input</h3>
						<ToDoInput
							item={this.state.item}
							handleChange={this.handleChange}
							handleSubmit={this.handleSubmit}
							editItem={this.state.editItem}
						/>
						<ToDoList
							items={this.state.items}
							clearList={this.clearList}
							handleDelete={this.handleDelete}
							handleEdit={this.handleEdit}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
