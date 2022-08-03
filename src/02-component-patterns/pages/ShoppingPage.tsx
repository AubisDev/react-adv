import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import { products } from "../../data/products";

import '../styles/custom-styles.css';

const product = products[0];

const ShoppingPage = () => {


  return (
    <div >
      <h1>ShoppingPage</h1>
      <hr/>
      
      <ProductCard 
        key={product.id}
        product={ product }
        className="bg-dark text-white"
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {
          ({ reset, increaseBy, isMaxCountReach }) => (
            <>
              <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,.2)'}}/>
              <ProductTitle  className=""/>
              <ProductButtons  className="custom-buttons"/>
              <button onClick={reset}>Reset</button>
              <button onClick={ () => increaseBy(-2) }>-2</button>
              { !isMaxCountReach() &&  <button onClick={ () =>  increaseBy(+2) }>+2</button> }
              
            </>
          )
        }
      </ProductCard>

    </div>
  )
}

export default ShoppingPage