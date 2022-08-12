import React, { Component } from "react";
// import stripHtml from 'string-strip-html';

class ProductItem extends Component {
	render() {
		const { product } = this.props;
		// const { result } = stripHtml(product.description);
		const { result } = product.description;


		return (
			<div className="product__card">
				{product.image && (
					<img
						className="product__image"
						src={product.image.url}
						alt={product.name}
					/>
				)}
				<div className="product__info">
					<h4 className="product__name">{product.name}</h4>
					<p className="product__description">
						{/* product description stripped of html tags */}
						{result}
					</p>
					<div className="product__details">
						<p className="product__price">
							{product.price.formatted_with_symbol}
						</p>
					</div>
				</div>
			</div>
		);
	}
}
export default ProductItem;
