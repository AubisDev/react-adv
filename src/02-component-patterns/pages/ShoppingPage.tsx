import { ProductButtons, ProductCard, ProductImage } from "../components"
import { ProductTitle } from '../components/ProductTitle';
import '../styles/custom-styles.css';

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png'
}

const ShoppingPage = () => {
  return (
    <div >
      <h1>ShoppingPage</h1>
      <hr/>

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>

        <ProductCard 
          product={ product }
          className="bg-dark text-white"
        >
          <ProductCard.Image className="custom-image"/>
          <ProductCard.Title title={""} />
          <ProductCard.Buttons  className="custom-buttons"/>
        </ProductCard>


        <ProductCard 
          product={ product }
          className="bg-dark text-white"
        >
          <ProductImage className="custom-image"/>
          <ProductTitle  className=""/>
          <ProductButtons className="custom-buttons"/>
        </ProductCard>

        <ProductCard 
          product={ product }
          style={{
            background: 'red'
          }}

        >
          <ProductImage />
          <ProductTitle/>
          <ProductButtons />
        </ProductCard>
      </div> 

      
    </div>
  )
}

export default ShoppingPage