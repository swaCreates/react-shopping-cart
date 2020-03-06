import React, {useContext} from 'react';

// Components
import Product from './Product';

import {ProductContext} from '../context/ProductContext';

// Now that our ProductContext is now providing data we can finally consume it! 
// To do so let's head over to our Products component and import the useContext hook as well as our ProductContext.

// In the component, call the useContext hook and pass in the context object we want to use into it.

// When we do this, useContext is going to return value passed by our ProductContext Provider value prop.
//  In our case we're getting back an object with two properties. 
// A products property and a addItem property. We can go ahead and destructure those.

const Products = () => {

	const {products, addItem}= useContext(ProductContext);

	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
