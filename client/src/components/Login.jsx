function Login(props) {
    return(    <div id="login" className="flex flex-col justify-start items-center p-4 w-max border-yellow-600 border-2 bg-yellow-300 rounded-lg">
        <h2 className="font-bold">Login</h2>
        <form onSubmit={props.submitHandler} className="login-form flex flex-col justify-center items-center gap-2">
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
            >login</button>
        </form>
    </div>
)
}

export default Login