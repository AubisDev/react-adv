import { ChangeEvent, useState } from "react";


export const useForm = <T>( initialData: T) => {  // La T indica, el tipo de dato que estoy recibiendo, es el tipo de dato que quiero que sea

    const [formData, setFormData] = useState(initialData);

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFormData( prevState => ({
        ...prevState, [event.target.name]: event.target.value
        }))
    }

    const resetForm = () => {
        setFormData({ ...initialData }); // Tambien sirve sin {...} pero se pone para asegurarse que es un nuevo objeto
    }

    const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    return {
        ...formData,
        //Hacer  ...Forma es como que hiciera:
        //name: formData.name,
        //email: formData.email y asi...
        formData,
        
        isValidEmail,
        onChange,
        resetForm
    }
}