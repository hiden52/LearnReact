import React from "react";

class ProductRow extends React.Component {
    render() {
        const product = this.props.product;
        const name = product.stocked ? product.name : <span style={{color: 'red'}}>{product.name}</span>
        return (
            <tr>
                <td>
                    {name}
                </td>
                <td>
                    {product.price}
                </td>
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
		this.props.product.forEach((product) => {
			if (product.category !== lastCategory) {
				rows.push(
					<ProductCategoryRow
						category={product.category}
						key={product.category}
					/>
				);
			}
            rows.push(
                <ProductRow
                    product={product}
                    key={product.name}
                />
            );
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
		this.handleChangeSearchProduct = this.handleChangeSearchProduct.bind(this);
	}
	

	render() {
		const inStockOnly = this.props.inStockOnly;
		return (
			<form>
				<input type="text" placeholder="Search..." onChange={this.handleChangeSearchProduct}/>
				<p>
					<input type="checkbox" checked={inStockOnly} onChange={this.handleChangeCheckbox} /> Only show product in stock
				</p>
			</form>
		);
	}

	handleChangeSearchProduct(e) {
		e.preventDefault();
		this.props.onChangeSearchBar(e.target.value);
	}

	handleChangeCheckbox(e) {
		this.props.onCheckboxChange(e.target);
	}
}

class FilterableProductTable extends React.Component {
	constructor(props) {
		super(props);
		this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this);
		this.state = {
			filterText: "",
			inStockOnly: false,
		}
	}
	render() {
		return (
			<div>
				<SearchBar inStockOnly={this.state.inStockOnly} onCheckboxChange={this.handleChangeCheckbox} onChangeSearchBar={this.handleChangeSearchProduct}/>
				<ProductTable product={this.props.product}/>
			</div>
		);
	}

	handleChangeCheckbox() {
		this.setState(state => ({
			inStockOnly: !state.inStockOnly
		}));
	}

	handleChangeSearchProduct(e) {
		console.log(e);
	}
}

export default FilterableProductTable;
