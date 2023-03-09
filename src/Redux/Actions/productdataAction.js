import { addtocart } from "../Slices/cartSlice"
import { fetchingerror, fetchingsuccess, startfetching } from "../Slices/productSlice"


export const productdataaction=()=>async dispatch=>{
    dispatch(startfetching())
    await fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(result=>dispatch(fetchingsuccess(result)))
    .catch(err=>dispatch(fetchingerror(err.message)))
}
export const cartactiondata=(id)=>async dispatch=>{    
    await fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res=>res.json())
    .then(result=>dispatch(addtocart(result)))    
}