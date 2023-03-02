import { FETCH_PRODUCT_FAIL, FETCH_PRODUCT_RUNNING, FETCH_PRODUCT_SUCCESS } from "../Constants/ProductContants"


const userAction=()=>async dispatch=>{
    dispatch({type:FETCH_PRODUCT_RUNNING})
    await fetch('https://fakestoreapi.com/products')
    .then(res=>res.json ())
    .then(result=>dispatch({type:FETCH_PRODUCT_SUCCESS,payload:result}))
    .catch(error=>dispatch({type:FETCH_PRODUCT_FAIL,payload:error}))
}
export default userAction