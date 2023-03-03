import { ADD_TO_CART, REMOVE_FROM_CART,INCREASE_AMOUNT_INTO_CART,DECREASE_AMOUNT_INTO_CART } from "../Constants/ProductContants"


const cartAction=(id)=>async dispatch=>{
    console.log(id);
    if(id){
    await fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res=>res.json ())
    .then(result=>dispatch({type:ADD_TO_CART,payload:{...result,total:result.price,amount:1}}))
    }
    
}
export const removefromcartAction=(id)=>dispatch=>{
    dispatch({type:REMOVE_FROM_CART,payload:id})
}
export const increaseAmountAction=(pos)=>dispatch=>{
    console.log("hello increaseAmountAction");
    dispatch({type:INCREASE_AMOUNT_INTO_CART,payload:pos})
}
export const decreaseAmountAction=(id)=>dispatch=>{
    console.log("hello decreaseAmountAction");
    dispatch({type:DECREASE_AMOUNT_INTO_CART,payload:id})
}
export default cartAction