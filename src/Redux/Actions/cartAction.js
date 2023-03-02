import { ADD_TO_CART, REMOVE_FROM_CART } from "../Constants/ProductContants"


const cartAction=(id)=>async dispatch=>{
    console.log(id);
    if(id){
    await fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res=>res.json ())
    .then(result=>dispatch({type:ADD_TO_CART,payload:result}))
    }
    
}
export const removefromcartAction=(id)=>dispatch=>{
    dispatch({type:REMOVE_FROM_CART,payload:id})
}
export default cartAction