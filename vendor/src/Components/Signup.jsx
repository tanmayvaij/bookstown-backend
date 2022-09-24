import { useState } from "react"

const Signup = () => {

    const [ state, setState ] = useState({
        name: "", 
        email: "",
        number: "",
        password: "",
        cpassword: ""
    })

    return (
        <div className="mx-2">
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal-signup">
                Sign Up
            </button>

            <div className="modal fade" id="exampleModal-signup" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Sign Up</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">

                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleName" className="form-label">Name</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        value={state.name}
                                        name="name"
                                        onChange={ (e) => setState({ ...state, [e.target.name]: e.target.value }) }
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        value={state.email}
                                        name="email"
                                        onChange={ (e) => setState({ ...state, [e.target.name]: e.target.value }) }
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="examplenumber" className="form-label">Mobile Number</label>
                                    <input 
                                        type="tel" 
                                        className="form-control" 
                                        number={state.number}
                                        name="number"
                                        onChange={ (e) => setState({ ...state, [e.target.name]: e.target.value }) }
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        value={state.password}
                                        name="password"
                                        onChange={ (e) => setState({ ...state, [e.target.name]: e.target.value }) }
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputCPassword1" className="form-label">Confirm Password</label>
                                    <input 
                                        type="password" 
                                        className="form-control"
                                        value={state.cpassword}
                                        name="cpassword"
                                        onChange={ (e) => setState({ ...state, [e.target.name]: e.target.value }) }
                                    />
                                </div>
                            </form>

                        </div>

                        <div className="text-center mb-4">
                            <button type="button" className="btn btn-primary">Sign Up</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
