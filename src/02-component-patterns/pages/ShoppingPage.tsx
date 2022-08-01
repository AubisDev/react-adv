import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import { Product } from '../interfaces/interfaces';
import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from "../../data/products";

import '../styles/custom-styles.css';


const ShoppingPage = () => {

  const { shoppingCart, onProductCountChange } = useShoppingCart();

  return (
    <div >
      <h1>ShoppingPage</h1>
      <hr/>

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>

      {
        products.map( (product:Product) => ( 
          <ProductCard 
            key={product.id}
            product={ product }
            className="bg-dark text-white"
            onChange={ onProductCountChange }
            value={ shoppingCart[product.id]?.count ||  0 }
          >
            <ProductImage className="custom-image"/>
            <ProductTitle  className=""/>
            <ProductButtons className="custom-buttons"/>
          </ProductCard>
        ))
      } 

      </div> 

      <div className="shopping-cart">
        { 
          Object.entries(shoppingCart).map( ([key, product]) => (
            <ProductCard 
              key={key}
              product={ product }
              className="bg-dark text-white"
              style={{ width: '100px', }}
              value={ product.count}
              onChange={ onProductCountChange }
            >
              <ProductImage className="custom-image"/>
              <ProductButtons className="custom-buttons" style={{ display:'flex', justifyContent:'center' }}/>
            </ProductCard>
          )) 
        }
      </div>

    </div>
  )
}

export default ShoppingPage