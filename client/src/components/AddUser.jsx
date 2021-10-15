function Signup(props) {
return(  <div id="signup" className="flex flex-col justify-start items-center p-4 w-max border-yellow-600 border-2 bg-yellow-300 rounded-lg">
        <h2 className="font-bold">Signup</h2>
        <form onSubmit={props.submitHandler} className="signup-form flex flex-col justify-center items-center gap-2">
            {/*  onChange={handleChange}  */}
            <div className="flex flex-col justify-center items-center">
                <label htmlFor="username" className="font-bold self-start">username:</label>
                <input className="form-input" type="text" id="username" name="username" />
            </div>
            <div className="flex flex-col justify-center items-center">
                <label htmlFor="addEmail" className="font-bold self-start">email:</label>
                <input className="form-input" type="text" id="addEmail" name="addEmail" />
            </div>
            <div className="flex flex-col justify-center items-center">
                <label
                htmlFor="addPassword"
                className="font-bold self-start"
                >password:</label>
                <input className="form-input" type="password" id="addPassword" name="addPassword" />
            </div>
            <button
                className="border-yellow-900 border bg-yellow-600 rounded-lg px-2 py-1 self-end text-white"
                type="submit"
            >signup</button>
        </form>
    </div>
)
}

export default Signup