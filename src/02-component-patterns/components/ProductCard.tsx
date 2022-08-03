import styles from '../styles/styles.module.css';

import { useProduct } from '../hooks/useProducts';
import { createContext } from 'react';
import { InitialValues, onChangeArgs, Product, ProductContextProps, ProductCartHandlers } from '../interfaces/interfaces';

export interface Props {
  product: Product,
  //children?: ReactElement | ReactElement[];
  children: (args: ProductCartHandlers) => JSX.Element;
  className?:  string;
  style?: React.CSSProperties;
  onChange?: ( args:onChangeArgs ) => void;
  value?: number; 
  initialValues?: InitialValues;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues   }:Props) => {

  const { counter, increaseBy, maxCount, reset, isMaxCountReach  } = useProduct({ onChange, product, value, initialValues}) // es quien maneja el estado

  return (
    <Provider value={{
      counter, 
      increaseBy,
      product,
      maxCount
    }}>
      <div 
        className={`${styles.productCard }  ${className}`}  
        style={style}
      >
        { children({
            count: counter,
            isMaxCountReach,
            reset,
            product,
            maxCount: initialValues?.maxCount,
            increaseBy
        }) }
      </div>
    </Provider>
    
  )
}

export default ProductCard

