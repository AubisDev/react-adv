import '../styles/styles.css';
import { FormEvent  } from 'react';
import { useForm } from '../hooks/useForm';


export const RegisterPage = () => {

    const { onChange, formData, name, email,password1, password2, resetForm, isValidEmail} = useForm({
        name:'',
        email:'',
        password1:'',
        password2:''
    });

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

  return (
    <div>
        <h1>Register Page</h1>
        
        <form
            noValidate
            onSubmit={ (ev) => onSubmit(ev) }
        >
            <input
                name="name"
                type="text"
                placeholder="Name"
                value={name}
                onChange={ onChange }
                className={`${name.trim().length <= 0 &&  'has-error'}`}
                
            />
            { name.trim().length <= 0 && <span>Este campo es necesario</span> }

            <input
                name="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={ onChange }
                className={`${!isValidEmail( email ) &&  'has-error'}`}
            />
            { !isValidEmail( email ) && <span>Email no es valido</span> }
            
            <input
                name="password1"
                type="password"
                placeholder="Password"
                value={password1}
                onChange={ onChange }
            />

            { password1.trim().length <= 0 && <span>Este campo es necesario</span> }
            { (password1.trim().length < 6 && password1.trim().length > 0 ) && <span>La contrasena debe ser de mas de 6 caracteres</span> }

            <input
                name="password2"
                type="password"
                placeholder="Reintroduce Password"
                value={password2}
                onChange={ onChange }
            />
            
            { password2.trim().length <= 0 && <span>Este campo es necesario</span> }
            { password2.trim().length > 0 &&password1 !== password2 && <span>Las contrasenas deben ser iguales </span> }

            <button type="submit"> 
                Create
            </button>
            <button 
                type="button"
                onClick={resetForm}
            > 
                Reset Form
            </button>
        </form>
    </div>
  )
}
