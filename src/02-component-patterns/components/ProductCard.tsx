import styles from '../styles/styles.module.css';

import { useProduct } from '../hooks/useProducts';
import { createContext, useContext } from 'react';
import {  ProductContextProps, ProductCardProps } from '../interfaces/interfaces';



export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }:ProductCardProps) => {

  const { counter, increaseBy } = useProduct()

  return (
    <Provider value={{
      counter, 
      increaseBy,
      product
    }}>
      <div className={ styles.productCard } >
        {children}
      </div>
    </Provider>
    
  )
}

export default ProductCard
