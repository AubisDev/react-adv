import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

export const FormikComponents = () => {

  return (
    <div>
        <h1>Formik Components Tutorial0</h1>

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
                    <label htmlFor='firstName'>First Name</label>
                    <Field name="firstName" type="text"/>
                    <ErrorMessage name="firstName" component="span"/>
        
                    <label htmlFor='lastName'>Last Name</label>
                    <Field name="lastName" type="text"/>
                    <ErrorMessage name="lastName"  component="span"/>
        
                    <label htmlFor='email'>Email Address</label>
                    <Field name="email" type="text"/>
                    <ErrorMessage name="email" component="span" />     

                    <label htmlFor='jobType'>Job Type</label>
                    <Field name="jobType" as="select">
                        <option value="">Pick something</option>
                        <option value="developer">Developer</option>
                        <option value="designer">Designer</option>
                        <option value="it-senior">IT Senior</option>
                        <option value="it-jr">IT Jr</option>
                    </Field>
                    <ErrorMessage name="jobType" component="span" />  

                    <label>
                        <Field name="terms" type="checkbox"/>
                        Terms and Conditions
                    </label>
                    <ErrorMessage name="terms" component="span" />

                    <button type='submit'>Submit</button>
                </Form>
            )}
        </Formik>


        
    </div>
  )
}

