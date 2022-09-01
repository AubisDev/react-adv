import { ErrorMessage, useField } from "formik"

interface Props {
    label:string;
    name: string;
    placeholder?: string;
    [x: string]: any; //Esto da la posibilidad de anadir cualqueir cantidad de parametros o variables adicionales

}

export const MySelect = ({ label, ...props }:Props) => {

    const [ field, meta ] = useField(props); // De aqui obtengo el onblur, onchange etc

  return (
    <>
        <label htmlFor={ props.id || props.name}>{ label }</label>
        <select {...field} {...props} />
        <ErrorMessage name={ props.name }  component='span' className="custom-span-error-class" />
        {/* {
            meta.touched && meta.error && (
                <span className="error">{ meta.error }</span>
            )
        } */}
    </>
    )
}