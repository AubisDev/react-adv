import { Props as ProductCardProps} from '../components/ProductCard';
import { Props as ProductButtonsProps } from '../components/ProductButtons';
import { Props as ProductTitleProps } from '../components/ProductTitle';
import { Props as ProductImageProps } from '../components/ProductImage';


export interface Product {
  id: string;
  img?: string;
  title?: string;
}

export interface ProductContextProps{
  counter: number;
  increaseBy : (value:number) => void;
  maxCount?: number;
  product: Product;
}

export interface ProductCartHOCProps {
  ({children, product}:ProductCardProps): JSX.Element
  Buttons: ( Props: ProductButtonsProps ) => JSX.Element;
  Image:   ( Props: ProductImageProps )   => JSX.Element;
  Title:   ( Props: ProductTitleProps )   => JSX.Element;
}


export interface onChangeArgs {
  count: number;
  product: Product;
  
}

export interface ProductInCart extends Product {
  count:number;
}

export interface InitialValues {
  count?: number;
  maxCount?: number;
}

export interface ProductCartHandlers {
  count: number;
  isMaxCountReach: () => boolean;
  maxCount?: number;
  product: Product;
  increaseBy: (value: number) => void; 
  reset: () => void;
}