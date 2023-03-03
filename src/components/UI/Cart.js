import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import Cartitem from '../layout/Cartitem'
import Footer from '../layout/Footer'


function Cart() { 
    const[summaryTotal,setSummaryTotal]=useState(0)
    console.log(summaryTotal);
    const cartData = useSelector((state) => {
        return state.cartlist;
      }); 
    // useEffect(()=>{
    //     cartData.products.map(e=>{
    //         setSummaryTotal((prevsummaryTotal)=>prevsummaryTotal+e.total)
    //     })
    // },[cartData])

  return (
    <>
    <div>
    <div className="container-fluid">
        <div className="row px-xl-5">
            <div className="col-lg-8 table-responsive mb-5">
                <table className="table table-light table-borderless table-hover text-center mb-0">
                    <thead className="thead-dark">
                        <tr>
                            <th>Products</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody className="align-middle">
                        <Cartitem/>                        
                    </tbody>
                </table>
            </div>
            <div className="col-lg-4">
                
                <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Cart Summary</span></h5>
                <div className="bg-light p-30 mb-5">
                    <div className="border-bottom pb-2">
                        <div className="d-flex justify-content-between mb-3">
                            <h6>Subtotal</h6>
                            <h6>$150</h6>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h6 className="font-weight-medium">Shipping</h6>
                            <h6 className="font-weight-medium">$10</h6>
                        </div>
                    </div>
                    <div className="pt-2">
                        <div className="d-flex justify-content-between mt-2">
                            <h5>Total</h5>
                            <h5>$160</h5>
                        </div>
                        <button className="btn btn-block btn-primary font-weight-bold my-3 py-3">Proceed To Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Cart