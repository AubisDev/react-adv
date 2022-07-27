import { useContext } from "react";

import { ProductContext } from "./ProductCard";

import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

export const ProductImage = ({ img = ''}) => {// Asi ponemos que img siempre sea opcional

  const { product } = useContext( ProductContext );
  let imgToShow: string;
  if ( img ){  // Verifica si le llega por parametro
    imgToShow = img;
  }else if ( product.img ) { // Verifica si existe en productos
    imgToShow = product.img;
  }else{
    imgToShow = noImage;
  }
  return (<img className={styles.productImg} src={ imgToShow } alt="Product images" /> )
}

export default ProductImage