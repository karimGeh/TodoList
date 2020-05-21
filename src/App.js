import React, { Component } from "react";
import { v1 as uuid } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";

import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";

class App extends Component {
	state = {
		items: [],
		id: uuid(),
		item: "",
		editItem: false,
	};

	handleChange = (e) => {
		this.setState({
			item: e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const newItem = {
			id: this.state.id,
			title: this.state.item,
		};
		const updatedItems = [...this.state.items, newItem];
		this.setState({
			items: updatedItems,
			id: uuid(),
			item: "",
			editItem: false,
		});
	};

	clearList = () => {
		this.setState({
			items: [],
			id: uuid(),
			item: "",
			editItem: false,
		});
	};

	handleDelete = (id) => {
		const updatedItems = this.state.items.filter((x) => x.id !== id);
		this.setState({
			items: updatedItems,
			id: uuid(),
			item: "",
			editItem: false,
		});
	};
	handleEdit = (id) => {
		const updatedItems = this.state.items.filter((x) => x.id !== id);
		const selectedItem = this.state.items.find((x) => x.id === id);
		this.setState({
			items: updatedItems,
			id: id,
			item: selectedItem.title,
			editItem: true,
		});
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
