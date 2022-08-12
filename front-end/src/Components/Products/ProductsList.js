import React, { useState } from "react";
import ProductItem from "./ProductItem";
import { Container, Row, Col } from 'react-grid-system';

const ProductsList = ({ products }) => {
	const [productsList, setProductsList] = useState(products);
	

// Product List Is Generated
	return (
		<div class="h-fit pb-20 w-full flex bg-white">
		<main class="w-full overflow-y-auto">
		  <div class="px-10 mt-5">
		  <div class="px-10 grid grid-cols-4 gap-4">
          <div
            class="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center"
        >
 		 <div className="products">
			{products.products &&
				products.products.map((product) => (
					<ProductItem key={product.id} product={product} />
				))}
		
		</div>
		</div>
		</div>
		</div>
		</main>
		</div>
	);

};

export default ProductsList;


// Previous Code Used

// return (
// 	<Container>
//   <Row>
//     <Col sm={4}>
//       One of three columns
//     </Col>
//     <Col sm={4}>
//       One of three columns
//     </Col>
//     <Col sm={4}>
//       One of three columns
//     </Col>
//   </Row>
// </Container>
// )