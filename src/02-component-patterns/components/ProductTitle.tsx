import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';


export const ProductTitle = ({ title }: {title:string}) => {  // Asi ponemos que title siempre tenga valor
  
  const { product } = useContext( ProductContext );

  return (
    <span className={styles.productDescription}>
      {title ? title : product.title}
    </span>
  )
}