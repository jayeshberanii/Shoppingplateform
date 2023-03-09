import React from 'react'
import { useEffect } from 'react'
import Footer from '../layout/Footer'
import Products from '../layout/Products'
import { useDispatch,useSelector } from 'react-redux'
import userAction from '../../Redux/Actions/productAction';
import { productdataaction } from '../../Redux/Actions/productdataAction'

function Shop() {
  const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(userAction())
        dispatch(productdataaction())
    },[])

    const productdata=useSelector((state)=>{
        return state.productlist
    })
    const productlistdata=useSelector((state)=>{
      return state.productdata
  })
  console.log(productlistdata);

    const {loading,products,error}=productdata
    

  return (
    <>
    <div>
      {
        loading?<div>Loading</div>:error?<div>error</div>:
        <Products products={products}/>
      }      
    </div>
    <Footer/>
    </>
  )
}

export default Shop