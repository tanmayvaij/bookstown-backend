import { useState } from "react";

const Entry = () => {

    const [ state, setState ] = useState({
        name: "",
        price: ""
    })

    const [file, setFile] = useState(null);

    const fileSet = async (e) => {
        const reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload = () => setFile(reader.result)
    }

    return (
        <div>
            <img src={file} alt="" />
            <div class="mb-3">
                <label class="form-label">Product Name</label>
                <input 
                    type="text" 
                    class="form-control" 
                    name="name"
                    value={state.name}
                    onChange={(e)=>setState({ ...state, [e.target.name]: e.target.value })}
                />
            </div>
            <div class="mb-3">
                <label class="form-label">Price</label>
                <input 
                    type="number" 
                    class="form-control" 
                    name="price"
                    value={state.price}
                    onChange={(e)=>setState({ ...state, [e.target.name]: e.target.value })}
                />
            </div>
            <div class="input-group mb-3">
                <input 
                    type="file" 
                    class="form-control" 
                    name="filename"
                    value={state.filename}
                    onChange={(e)=>fileSet(e)}
                />
            </div>
            <button class="btn btn-primary">Submit</button>
        </div>
    )
}

export default Entry;