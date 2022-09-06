import '../styles/styles.css';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { MyTextInput } from '../components';


export const RegisterFormikPage = () => {

  return (
    <div>
        <h1>Register Formik Page</h1>
    
        <Formik
            initialValues={{
                name: '',
                email: '',
                password1: '',
                password2: ''
            }}
            onSubmit={ (formValues) =>{
                console.log(formValues);
            }}
            validationSchema={ Yup.object({
                name: Yup
                    .string()
                    .min(2, "Debe tener mas de 2 caracteres")
                    .max(15,'Debe de tener 15 caracteres o menos')
                    .required("Campo Requerido"),
                email: Yup
                    .string()
                    .email('Deber ser un correo valido')
                    .required("Campo Requerido"),
                password1: Yup
                    .string()    
                    .min(6, "Debe tener mas de 2 caracteres"),
                    password2: Yup
                    .string()
                    .oneOf([Yup.ref('password1')], 'Las contrasenas no son iguales')
                    .required("Requerido")
            })
            }
            >
                { (formik) => (
                <Form >

                    <MyTextInput 
                        label='Name' 
                        name="name"  
                        placeholder='Your Name'
                    />

                    <MyTextInput 
                        label='Email' 
                        name="Email"  
                        placeholder='YourEmail@example.com'
                    />

                    <MyTextInput 
                        label='Password' 
                        name="password1"  
                        placeholder='******'
                    />

                    <MyTextInput 
                        label='Confirm Password' 
                        name="password2"  
                        placeholder='******'
                    />

                    <button type='submit'>Submit</button>
                </Form>
                )}
        </Formik>
    </div>
  )
}

