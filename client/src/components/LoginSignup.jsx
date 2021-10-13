import { useMutation } from '@apollo/client';
import UserContext from "context/UserContext";
import React, { useState } from 'react';
import authService from "services/authService";
// import Auth from '../utils/auth';
import { ADD_USER, LOGIN } from '../utils/mutations';
// import AdminContext from '../context/AdminContext';
import AddUser from "./AddUser";
import Login from "./Login";
import { useHistory } from "react-router-dom";

function LoginForms() {
    const [_, setUser] = React.useContext(UserContext);
  const history = useHistory();

  const [addUser] = useMutation(ADD_USER, {
    // Add user to context
    onCompleted({ addUser }) {
      // Put token in local storage via Auth service
      authService.login(addUser.token);

      // Set user in context (not token - their data)
      setUser(addUser.user);

      // Redirect to home WITHOUT RESETTING THE WHOLE APP and losing context!
      history.push("/");
    },
  });

  const [login] = useMutation(LOGIN, {
    onCompleted({ addUser }) {
      authService.login(addUser.token);
      setUser(addUser.user);
      history.push("/");
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const submission = Object.fromEntries(new FormData(event.target));

    try {
      if (submission.firstName) {
        addUser({
          variables: submission,
        });
      } else {
        login({
          variables: submission,
        });
      }
    } catch (error) {
      // TODO: Handle error with a reusable error component
      console.error(error.message);
    }
  };
    // console.log('hello')
    // const [admin, setAdmin] = React.useContext(AdminContext)

    // const [formState, setFormState] = useState({ email: '', password: '' });
    // const [addUser] = useMutation(ADD_USER, {
    //     onCompleted() {
    //         console.log("Update admin context with logged in status")
    //         setAdmin(true)
    //     }
    // });
    // const [login, { error }] = useMutation(LOGIN, {
    //     onCompleted() {
    //         console.log("Update admin context with logged in status")
    //         setAdmin(true)
    //     }});

    // const handleSignupSubmit = async (event) => {
    //     event.preventDefault();
    //     const newSignup = Object.fromEntries(new FormData(event.target))

    //     const mutationResponse = await addUser({
    //         variables: newSignup
    //     });
    //     const token = mutationResponse.data.addUser.token;
    //     Auth.login(token);
    //   };

    //   const handleLoginSubmit = async (event) => {
    //     event.preventDefault();
    //     const loginSubmission = Object.fromEntries(new FormData(event.target))

    //     try {
    //       const mutationResponse = await login({
    //         variables: loginSubmission,
    //       });
    //       const token = mutationResponse.data.login.token;
    //       Auth.login(token);
    //     } catch (e) {
    //       console.log(e);
    //     }
    //   };
    
    //   const handleChange = (event) => {
    //     const { name, value } = event.target;
    //     setFormState({
    //       ...formState,
    //       [name]: value,
    //     });
    //   };

    return (
        <main className="flex flex-col items-center mt-4 w-11/12 gap-4">
            <h1 className="text-2xl font-bold">Login</h1>
            <div className="flex flex-col md:flex-row w-11/12 items-center md:justify-center md:items-start gap-4">
                <Login submitHandler={handleSubmit} />
                <p className="self-center"> -- or --</p>
                <AddUser submitHandler={handleSubmit} />
            </div>   
        </main>
    )
}

export default Login