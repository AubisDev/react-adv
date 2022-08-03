import { useCallback, useEffect, useRef, useState } from 'react';
import { InitialValues, onChangeArgs, Product } from '../interfaces/interfaces';


interface useProductArgs {
  product: Product; 
  onChange?: ( args: onChangeArgs ) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = ( { onChange, product, value = 0, initialValues  }: useProductArgs ) => {
  // No se producia correctamente porque teniamos un useffect que cambiaba segun el valor value, entonces usamos un useRef para tener referencia si ya se monto el componente el cual sera cambiado con otro useEffect
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const isMounted = useRef(false);

  const increaseBy = ( value:number) => {
    const newValue =  Math.max( counter + value, 0 );
    // Verifica si se mando maxCount y si se mando que no se pase y en caso contrario que siga libre aumentando
    initialValues?.maxCount ? setCounter( Math.min( initialValues?.maxCount, newValue ) )  
                            : setCounter( newValue )

    onChange && onChange({ count: newValue, product });
  }

  const reset = () => {
    setCounter( initialValues?.count || value );
  }

  const isMaxCountReach = useCallback(
    () => {
      if (counter === initialValues?.maxCount) return true;
      return false
    },
    [counter, initialValues?.maxCount],
  )
  

  useEffect(() => {
    if ( !isMounted.current ) return
    setCounter( value )
  }, [value]);
  
  useEffect(() => {
    isMounted.current = true;
  }, [])

  return {
    counter,
    increaseBy,
    isMaxCountReach,
    maxCount: initialValues?.maxCount,
    reset
  }
}