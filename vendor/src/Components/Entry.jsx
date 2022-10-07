import { useState } from "react";
import { GlobalStates } from "../Context";

const Entry = () => {

    const { SERVER, vendor } = GlobalStates()

    const [ state, setState ] = useState({
        product: "",
        price: ""
    })

    const [image, setImage] = useState(null);

    const fileSet = async (e) => {
        const reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload = () => setImage(reader.result)
    }

    const addProduct = async () => {
        
        const res = await fetch(`${SERVER}/api/products/list_products`, {
            method: "POST",
            mode: "cors",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({...state, image, vendorid: vendor._id})
        })
        
        const data = await res.json()
        
    }

    return (
        <div>
            <div class="mb-3">
                <label class="form-label">Product Name</label>
                <input 
                    type="text" 
                    class="form-control" 
                    name="product"
                    value={state.product}
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
            <button onClick={addProduct} class="btn btn-primary">Submit</button>
        </div>
    )
}

export default Entry;