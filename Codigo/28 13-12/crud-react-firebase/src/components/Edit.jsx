import {useState,useEffect } from "react";
import{useNavigate,useParams} from "react-router-dom"
import{getDoc,doc, updateDoc} from "firebase/firestore"
import {db} from "../firebaseConfig/firebase.js"

const Edit = ()=>{
    const [description,setDescription] = useState("")
    const [stock,setStock] = useState(0)

    const navigate = useNavigate()

    const {id} =useParams()

    const update = async(e)=>{
        e.preventDefault()
        const product = doc(db,"products",id)
        const data = {
            description:description, stock:stock
        }
        await updateDoc(product,data)
        navigate("/")
    }

    const getProductById= async(id)=>{
        const product = await getDoc(doc(db,"products",id))
        if(product.exists()){
        setDescription(product.data().description)
        setStock(product.data().stock)
        }else{
        console.log("el producto no existe")
        }
    }

    useEffect(()=>{
        getProductById(id)
        // eslint-disable-next-line
    },[])
return(
    <div className="container">
        <div className="row">
            <div className="col">
                <h1>Edit Product</h1>
                <form onSubmit={update}>
                    <div className="mb-3">
                        <input 
                        value={description}
                        onChange={(e)=>setDescription(e.target.value)}
                        type="text" className="form-control" 
                        />
                    </div>
                    <div className="mb-3">
                        <input 
                        value={stock}
                        onChange={(e)=>setStock(e.target.value)}
                        type="text" className="form-control" 
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">editar</button>
                </form>
            </div>
        </div>
    </div>
)
}

export default Edit