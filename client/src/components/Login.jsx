import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER, LOGIN } from '../utils/mutations';

function Login() {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [addUser] = useMutation(ADD_USER);
    const [login, { error }] = useMutation(LOGIN);

    const handleSignupSubmit = async (event) => {
        event.preventDefault();
        const newSignup = Object.fromEntries(new FormData(event.target))

        const mutationResponse = await addUser({
            variables: {...newSignup}
        });
        const token = mutationResponse.data.addUser.token;
        Auth.login(token);
      };

      const handleLoginSubmit = async (event) => {
        event.preventDefault();
        const loginSubmission = Object.fromEntries(new FormData(event.target))

        try {
          const mutationResponse = await login({
            variables: loginSubmission,
          });
          const token = mutationResponse.data.login.token;
          Auth.login(token);
        } catch (e) {
          console.log(e);
        }
      };
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
          ...formState,
          [name]: value,
        });
      };

    return (
        <main className="flex flex-col items-center mt-4 w-11/12 gap-4">
            <h1 className="text-2xl font-bold">Login</h1>
            <div className="flex flex-col md:flex-row w-11/12 items-center md:justify-center md:items-start gap-4">
                <div id="login" className="flex flex-col justify-start items-center p-4 w-max border-yellow-600 border-2 bg-yellow-300 rounded-lg">
                    <h2 className="font-bold">Login</h2>
                    <form onSubmit={handleLoginSubmit} className="login-form flex flex-col justify-center items-center gap-2">
                        <div className="flex flex-col justify-center items-center">
                            <label htmlFor="email" className="font-bold self-start">email:</label>
                            <input className="form-input" type="text" id="email" name="email" onChange={handleChange} />
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <label
                            htmlFor="password"
                            className="font-bold self-start"
                            >password:</label>
                            <input className="form-input" type="password" id="password" name="password" onChange={handleChange} />
                        </div>
                        <button
                            className="border-yellow-900 border bg-yellow-600 rounded-lg px-2 py-1 self-end text-white"
                            type="submit"
                        >login</button>
                    </form>
                </div>
                <p className="self-center"> -- or --</p>
                <div id="signup" className="flex flex-col justify-start items-center p-4 w-max border-yellow-600 border-2 bg-yellow-300 rounded-lg">
                    <h2 className="font-bold">Signup</h2>
                    <form onSubmit={handleSignupSubmit} className="signup-form flex flex-col justify-center items-center gap-2">
                        <div className="flex flex-col justify-center items-center">
                            <label htmlFor="firstName" className="font-bold self-start">first name:</label>
                            <input className="form-input" type="text" id="firstName" name="firstName" onChange={handleChange} />
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <label htmlFor="lastName" className="font-bold self-start">last name:</label>
                            <input className="form-input" type="text" id="lastName" name="lastName" onChange={handleChange} />
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <label htmlFor="email" className="font-bold self-start">email:</label>
                            <input className="form-input" type="text" id="email" name="email" onChange={handleChange} />
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <label
                            htmlFor="password"
                            className="font-bold self-start"
                            >password:</label>
                            <input className="form-input" type="password" id="password" name="password" onChange={handleChange} />
                        </div>
                        <button
                            className="border-yellow-900 border bg-yellow-600 rounded-lg px-2 py-1 self-end text-white"
                            type="submit"
                        >signup</button>
                    </form>
                </div>
            </div>   
        </main>
    )
}

export default Login