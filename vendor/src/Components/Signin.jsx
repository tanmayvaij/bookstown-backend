import { useState } from "react"

const Signin = () => {

    const [ state, setState ] = useState({
        email: "",
        password: ""
    })

    return (
        <div className="mx-2">
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal-signin">
                Sign In
            </button>

            <div className="modal fade" id="exampleModal-signin" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Sign In</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">

                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        name="email"
                                        value={state.email}
                                        onChange={ (e) => setState({ ...state, [e.target.name]: e.target.value }) }
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        name="password"
                                        value={state.password}
                                        onChange={ (e) => setState({ ...state, [e.target.name]: e.target.value }) }
                                    />
                                </div>
                            </form>

                        </div>

                        <div className="text-center mb-4">
                            <button type="button" className="btn btn-primary">Sign In</button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Signin