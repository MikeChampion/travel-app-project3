// import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';
// import Auth from '../utils/auth';
// import { ADD_USER } from '../utils/mutations';
// import AdminContext from '../context/AdminContext';

function Signup() {
    // const handleSignupSubmit = async (event) => {
    //     event.preventDefault();
    //     const newSignup = Object.fromEntries(new FormData(event.target))
    
    //     const mutationResponse = await addUser({
    //         variables: newSignup
    //     });
    //     const token = mutationResponse.data.addUser.token;
    //     Auth.login(token);
    //   };

    // const [formState, setFormState] = useState({ email: '', password: '' });

    // const [addUser] = useMutation(ADD_USER, {
    //     onCompleted() {
    //         console.log("Update admin context with logged in status")
    //         setAdmin(true)
    //     }
    // });

    <div id="signup" className="flex flex-col justify-start items-center p-4 w-max border-yellow-600 border-2 bg-yellow-300 rounded-lg">
        <h2 className="font-bold">Signup</h2>
        <form className="signup-form flex flex-col justify-center items-center gap-2">
            {/*  onChange={handleChange}  */}
            <div className="flex flex-col justify-center items-center">
                <label htmlFor="firstName" className="font-bold self-start">first name:</label>
                <input className="form-input" type="text" id="firstName" name="firstName" />
            </div>
            <div className="flex flex-col justify-center items-center">
                <label htmlFor="lastName" className="font-bold self-start">last name:</label>
                <input className="form-input" type="text" id="lastName" name="lastName" />
            </div>
            <div className="flex flex-col justify-center items-center">
                <label htmlFor="email" className="font-bold self-start">email:</label>
                <input className="form-input" type="text" id="email" name="email" />
            </div>
            <div className="flex flex-col justify-center items-center">
                <label
                htmlFor="password"
                className="font-bold self-start"
                >password:</label>
                <input className="form-input" type="password" id="password" name="password" />
            </div>
            <button
                className="border-yellow-900 border bg-yellow-600 rounded-lg px-2 py-1 self-end text-white"
                type="submit"
            >signup</button>
        </form>
    </div>
}

export default Signup