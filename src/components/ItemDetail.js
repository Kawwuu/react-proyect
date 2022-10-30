import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";

export const ItemDetail = ({ data }) => {
	const [goToCart, setGoToCart] = useState(false);
	const { addProduct } = useCartContext();

	const onAdd = (quantity) => {
		setGoToCart(true);
		addProduct(data, quantity);
	};

	return (
		<div className="container">
			<div className="detail">
				<img className="detail__image" src={data.image} alt="" />
				<div className="content">
					<h1>{data.title}</h1>
					{goToCart ? (
						<Link to="/cart" className="compra"> Terminar compra en el carrito</Link>
					) : (
						<ItemCount initial={3} stock={5} onAdd={onAdd} />
					)}
				</div>
			</div>
		</div>
	);
};

export default ItemDetail;