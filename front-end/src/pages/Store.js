import { useEffect, useState } from "react";
import ShopItem from "../Components/ShopItem";
// import ProductList from "../Components/Products/ProductList";
import { Helmet } from "react-helmet-async";
import StoreHero from "../Components/StoreHero";
import ShopItemExpanded from "./ShopItemExpanded";
import ProductsList from "../Components/Products/ProductsList";

// Store Commerce.js
import { commerce } from "../lib/commerce";

// Store Begins Here
const Store = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetchProducts();
	}, []);

	// Fetch Products
	const fetchProducts = () => {
		commerce.products
			.list()
			.then((products) => {
				setProducts({ products: products.data });
			})
			.catch((error) => {
				console.log("There was an error fetching the products", error);
			});
	};

	return (
		<div>
			<ProductsList products={products} />
		</div>
	);
};
export default Store;





// Old version of the store when based in an array

// const Store = () => {
// 	return (
// 		<div className="w-3/4 mx-auto">
// 			<Helmet>
// 				<title>Store | Student Survival Box</title>
// 			</Helmet>
// 			<ProductList />
// 		</div>
// 	);
// };

// const items = [
//     {
//         category: 'CATEGORY',
//         title: 'The Catalyzer',
//         price: 16.00,
//         image: "https://dummyimage.com/420x260",
//         description: 'description goes here',
//         page: "https://buy.stripe.com/test_00g16odHv7b4bv28ww"
//     },
//     {
//         category: 'CATEGORY',
//         title: 'Shooting Stars',
//         price: 21.15,
//         image: "https://dummyimage.com/420x260",
//         description: 'description goes here',
//         page: "/product2"
//     },
//     {
//         category: 'CATEGORY',
//         title: 'Neptune',
//         price: 12.00,
//         image: "https://dummyimage.com/420x260",
//         description: 'description goes here',
//         page: "/product3"
//     },
//     {
//         category: 'CATEGORY',
//         title: 'The 400 Blows',
//         price: 18.40,
//         image: "https://dummyimage.com/420x260",
//         description: 'description goes here',
//         page: "/product4"
//     },
//     {
//         category: 'CATEGORY',
//         title: 'The Catalyzer2',
//         price: 16.00,
//         image: "https://dummyimage.com/420x260",
//         description: 'description goes here',
//         page: "/product5"
//     },
//     {
//         category: 'CATEGORY',
//         title: 'Shooting Stars2',
//         price: 21.15,
//         image: "https://dummyimage.com/420x260",
//         description: 'description goes here',
//         page: "/product6"
//     },
//     {
//         category: 'CATEGORY',
//         title: 'Neptune',
//         price: 12.00,
//         image: "https://dummyimage.com/420x260",
//         description: 'description goes here',
//         page: "/product7"
//     },
//     {
//         category: 'CATEGORY',
//         title: 'The 400 Blows2',
//         price: 18.40,
//         image: "https://dummyimage.com/420x260",
//         description: 'description goes here',
//         page: "/product8"
//     }
//     ];

// const Store = () => {
//     return(
//     <section className="text-gray-600 body-font">
//         <div className="container px-5 py-24 mx-auto">
//             <div className="flex flex-wrap -m-4">
//                 {items.map(item => (
//                     <ShopItem category={item.category} title={item.title} price={item.price} image={item.image} description={item.description} page={item.page} />
//                 ))}
//             </div>
//         </div>
//     </section>
//     )
// }