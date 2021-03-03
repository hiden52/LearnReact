import React from "react";

class ProductRow extends React.Component {
	render() {
		const product = this.props.product;
		const name = product.stocked ? (
			product.name
		) : (
			<span style={{ color: "red" }}>{product.name}</span>
		);
		return (
			<tr>
				<td>{name}</td>
				<td>{product.price}</td>
			</tr>
		);
	}
}

class ProductCategoryRow extends React.Component {
	render() {
		const categoryName = this.props.category;
		return (
			<tr>
				<th colSpan="2">{categoryName}</th>
			</tr>
		);
	}
}

class ProductTable extends React.Component {
	render() {
		const rows = [];
		let lastCategory = null;
		let filteredPruducts = this.props.product.slice();
		if(this.props.inStockOnly) {
			filteredPruducts = filteredPruducts.filter(product => product.stocked);
		}
		filteredPruducts = filteredPruducts.filter(product => product.name.includes(this.props.filterText));

		filteredPruducts.forEach((product) => {
			if (product.category !== lastCategory) {
				rows.push(
					<ProductCategoryRow
						category={product.category}
						key={product.category}
					/>
				);
			}
			rows.push(<ProductRow product={product} key={product.name} />);
			lastCategory = product.category;
		});

		return (
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
		);
	}
}

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this);
		this.handleChangeSearchProduct = this.handleChangeSearchProduct.bind(
			this
		);
	}

	render() {
		const inStockOnly = this.props.inStockOnly;
		const fillterText = this.props.filterText;
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type="text"
					placeholder="Search..."
					value={fillterText}
					onChange={this.handleChangeSearchProduct}
				/>
				<p>
					<input
						type="checkbox"
						checked={inStockOnly}
						onChange={this.handleChangeCheckbox}
					/>{" "}
					Only show product in stock
				</p>
			</form>
		);
	}

	handleChangeSearchProduct(e) {
		//e.preventDefault();
		this.props.onFilterTextChange(e.target.value);
	}
	handleFilterSubmit(e) {
		//console.log(e);
		e.preventDefault();
	}

	handleChangeCheckbox(e) {
		this.props.onInStockChange(e.target.checked);
	}
}

class FilterableProductTable extends React.Component {
	constructor(props) {
		super(props);
		this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
		this.handleInStockChange = this.handleInStockChange.bind(this);
		this.state = {
			filterText: "",
			inStockOnly: false,
		};
	}
	render() {
		return (
			<div>
				<SearchBar
					filterText={this.state.filterText}
					inStockOnly={this.state.inStockOnly}
					onFilterTextChange={this.handleFilterTextChange}
					onInStockChange={this.handleInStockChange}
				/>
				<ProductTable
					filterText={this.state.filterText}
					inStockOnly={this.state.inStockOnly}
					product={this.props.product}
				/>
			</div>
		);
	}

	handleInStockChange(inStockOnly) {
		this.setState({
			inStockOnly: inStockOnly,
		});
	}

	handleFilterTextChange(filterText) {
		//e.preventDefault();
		this.setState({ filterText: filterText });
	}
}

export default FilterableProductTable;
