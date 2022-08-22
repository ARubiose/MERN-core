import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import { useAuthStore } from '../../hooks';
import { useForm } from '../../hooks/useForm';
import './Login.css';

const loginFormFields = {
    loginEmail: 'arubio@google.com',
    loginPassword: '123456789',
};

const registerFormFields = {
    registerName: 'arubio',
    registerEmail: 'arubio@google.com',
    registerPassword: '123456789',
    registerPassword2: '123456789',
};

export const LoginPage = () => {
    // Hooks
    const { startLogin, startRegister, errorMessage } = useAuthStore();
    const {
        loginEmail,
        loginPassword,
        // formData: loginFormData,
        onInputChange: onLoginInputChange,
        // formValidations: loginFormValidations,
    } = useForm(loginFormFields);
    const {
        registerName,
        registerEmail,
        registerPassword,
        registerPassword2,
        // formData: registerFormData,
        onInputChange: onRegisterInputChange,
        // formValidations: registerFormValidations,
    } = useForm(registerFormFields);

    useEffect(() => {
      if ( errorMessage !== undefined ){
        Swal.fire('Authentication error', errorMessage, 'error')
      }
    }, [errorMessage])
    

    // Handlers
    const onLoginSubmit = (event) => {
        event.preventDefault();
        startLogin({ email: loginEmail, password: loginPassword });
    };
    const onRegisterSubmit = (event) => {
        event.preventDefault();
        if ( registerPassword !== registerPassword2) {
            Swal.fire('Register error', 'Password do not match', 'error')
            return
        }
        startRegister({
            name: registerEmail,
            email: registerEmail,
            password: registerPassword
        });
    };
    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={onLoginSubmit}>
                        <div className="form-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name="loginEmail"
                                value={loginEmail}
                                onChange={onLoginInputChange}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="loginPassword"
                                value={loginPassword}
                                onChange={onLoginInputChange}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Login"
                            />
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form onSubmit={onRegisterSubmit}>
                        <div className="form-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                name="registerName"
                                value={registerName}
                                onChange={onRegisterInputChange}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                                name="registerEmail"
                                value={registerEmail}
                                onChange={onRegisterInputChange}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="registerPassword"
                                value={registerPassword}
                                onChange={onRegisterInputChange}
                            />
                        </div>

                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña"
                                name="registerPassword2"
                                value={registerPassword2}
                                onChange={onRegisterInputChange}
                            />
                        </div>

                        <div className="form-group mb-2">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Crear cuenta"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
