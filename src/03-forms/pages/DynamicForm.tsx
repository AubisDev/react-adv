import { Formik, Form } from 'formik';
import formJson from '../../data/custom-form.json'
import { MySelect, MyTextInput } from '../components';
import * as Yup from 'yup';


const initialValues: {[key: string]: any} = {};
const requiredFields: {[key: string]: any} = {};

for (const input of formJson) {
    initialValues[ input.name] = input.value; //Capturamos el valor inicial y creamos nuestro objeto

    if (!input.validations ) continue; //Comporbar si tiene validaciones

    let schema = Yup.string();  //Schema para cada uno de los campos

    for (const rule of input.validations) {  // Ciclo de las validaciones segun el tipo de validacion
        if( rule.type === 'required' ){
            schema = schema.required("Este campo es requerido")
        }

        if( rule.type === 'minLength' ){
            schema = schema.min( (rule as any).value || 2, `Debe tener tener minimo ${(rule as any).value || 2 } caracteres`)
        }

        if( rule.type === 'email' ){
            schema = schema.email('Debe ser un email valido')
        }

        // ... otras reglas de validacion
    }

    requiredFields[input.name] = schema;
}


const validationSchema = Yup.object({ ...requiredFields});

export const DynamicForm = () => {
  return (
    <div>
        <h1> Dynamic Form </h1>
    
        <Formik
            initialValues={initialValues}
            onSubmit={ (formValues) => console.log(formValues)}
            validationSchema={validationSchema}
        >
            
            { (formik) => (
                <Form noValidate>
                    { formJson.map( ({type, name, placeholder, label, options }) => {

                        if (type === 'input' || type === 'password' || type === 'email'){
                            return <MyTextInput 
                                        key={name} 
                                        type={ (type as any)} 
                                        name={name} label={label} 
                                        placeholder={placeholder}
                                    />
                        }else if ( type === 'select'){
                            return (
                                <MySelect key={ name } label={ label } name={ name } >
                                    <option value="">Select an option</option>
                                    {
                                        options?.map( ({ label, id }) => (
                                            <option key={label} value={id} >{label}</option>
                                        ) )
                                    }
                                </MySelect>
                            )
                        }
                        
                        
                    })

                    }
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    </div>

  )
}
