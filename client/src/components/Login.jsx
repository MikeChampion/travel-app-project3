function Login() {
    return (
        <main className="flex flex-col items-center mt-4 w-11/12 gap-4">
            <h1 className="text-2xl font-bold">Login</h1>
            <div className="flex flex-col md:flex-row w-11/12 items-center md:justify-center md:items-start gap-4">
                <div id="login" className="flex flex-col justify-start items-center p-4 w-max border-yellow-600 border-2 bg-yellow-300 rounded-lg">
                    <h2 className="font-bold">Login</h2>
                    <form className="login-form flex flex-col justify-center items-center gap-2">
                        <div className="flex flex-col justify-center items-center">
                            <label for="email-login" className="font-bold self-start">email:</label>
                            <input className="form-input" type="text" id="email-login" />
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <label
                            for="password-login"
                            className="font-bold self-start"
                            >password:</label>
                            <input className="form-input" type="password" id="password-login" />
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
                    <form className="signup-form flex flex-col justify-center items-center gap-2">
                        <div className="flex flex-col justify-center items-center">
                            <label for="name-signup" className="font-bold self-start">name:</label>
                            <input className="form-input" type="text" id="name-signup" />
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <label for="email-signup" className="font-bold self-start">email:</label>
                            <input className="form-input" type="text" id="email-signup" />
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <label
                            for="password-signup"
                            className="font-bold self-start"
                            >password:</label>
                            <input className="form-input" type="password" id="password-signup" />
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