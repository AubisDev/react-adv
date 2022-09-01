import { ErrorMessage, useField } from "formik"

interface Props {
    label:string;
    name: string;
    [x: string]: any; //Esto da la posibilidad de anadir cualqueir cantidad de parametros o variables adicionales

}

export const MyCheckbox = ({ label, ...props }:Props) => {

    const [ field, meta ] = useField({ ...props, type: 'checkbox'}); // De aqui obtengo el onblur, onchange etc

  return (
    <>
        <label>
            <input type="checkbox" {...field} {...props} />
            { label }
        </label>
        <ErrorMessage name={ props.name }  component='span' className="custom-span-error-class" />
        {/* {
            meta.touched && meta.error && (
                <span className="error">{ meta.error }</span>
            )
        } */}
    </>
    )
}
