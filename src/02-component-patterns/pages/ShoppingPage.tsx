import { ProductCard } from "../components"

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png'
}

const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr/>

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>

        <ProductCard product={ product }>
          <ProductCard.Image />
          <ProductCard.Title title={""} />
          <ProductCard.Buttons  />
        </ProductCard>
      </div> 

      
    </div>
  )
}

export default ShoppingPage