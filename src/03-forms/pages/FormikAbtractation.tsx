import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyCheckbox, MySelect, MyTextInput } from '../components';
import '../styles/styles.css';

export const FormikAbtractation = () => {

  return (
    <div>
        <h1>Formik Abtractation Tutorial</h1>

        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                terms: false,
                jobType: ''
            }}
            onSubmit={ (formValues) =>{
                console.log(formValues);
            }}
            validationSchema={ Yup.object({
                firstName: Yup
                    .string()
                    .max(15,'Debe de tener 15 caracteres o menos')
                    .required("Campo Requerido"),
                lastName: Yup
                    .string()
                    .max(10,'Debe de tener 10 caracteres o menos')
                    .required("Campo Requerido"),
                email: Yup
                    .string()
                    .email('Deber ser un correo valido')
                    .required("Campo Requerido"),
                terms: Yup
                    .boolean()
                    .oneOf([true], 'Debe de aceptar las condiciones'),
                jobType: Yup
                    .string()
                    .required("Requerido")
            })
            }
        >
            { (formik) => (
                <Form >

                    <MyTextInput 
                        label='First Name' 
                        name="firstName"  
                        placeholder='Ragnarok'
                    />

                    <MyTextInput 
                        label='Last Name' 
                        name="lastName"  
                        placeholder='Valorant'
                    />

                    <MyTextInput 
                        label='Email Address' 
                        name="email"  
                        placeholder='test@test.com'
                        type='email'
                    />

                    {/* El componente MyTextInput es lo mismo que:
                    
                        <label htmlFor='firstName'>First Name</label>
                        <Field name="firstName" type="text"/>
                        <ErrorMessage name="firstName" component="span"/>
                    
                    */}
                      
                    <MySelect label='Job Type' name='jobType'>
                        <option value="">Pick something</option>
                        <option value="developer">Developer</option>
                        <option value="designer">Designer</option>
                        <option value="it-senior">IT Senior</option>
                        <option value="it-jr">IT Jr</option>
                    </MySelect>

                    <MyCheckbox label='Terms & Conditions' name='terms' />


                    <button type='submit'>Submit</button>
                </Form>
            )}
        </Formik>


        
    </div>
  )
}

