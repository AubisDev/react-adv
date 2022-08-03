import {ProductCard as ProductCardHOC} from './ProductCard';

import { ProductButtons } from './ProductButtons';
import { ProductTitle } from './ProductTitle';
import {ProductImage} from './ProductImage';
import { ProductCartHOCProps } from '../interfaces/interfaces';

export { ProductButtons } from './ProductButtons';
export { ProductTitle } from './ProductTitle';
export {ProductImage} from './ProductImage';
// export { ProductCard } from './ProductCard';


// Asi podemos volvera utilizar esta forma:

      // eslint-disable-next-line no-lone-blocks
      {/* <ProductCard product={ product }>
        <ProductCard.Image />
        <ProductCard.Title title={""} />
        <ProductCard.Buttons  />
      </ProductCard> */}

export const ProductCard: ProductCartHOCProps = Object.assign( ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons
})

export default ProductCard;