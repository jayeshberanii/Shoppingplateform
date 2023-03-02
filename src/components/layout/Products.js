import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import cartAction from "../../Redux/Actions/cartAction";

function Products(props) {
  const [productLIST, setproductLIST] = useState([])

  const dispatch=useDispatch();

  useEffect(() => {
    setproductLIST(props.products)
  }, [props.products])
  return (
    <>
      <div className="col-lg-12 col-md-8">
        <div className="row pb-3">
          {
            productLIST.length > 0 ? productLIST.map((item,pos) => {
              return (
                <div className="col-lg-3 col-md-4 col-sm-6 pb-1" key={pos}>
                  <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                      <img
                      height={200}
                      width={100}
                        className=" w-100"
                        src={item.image}
                        alt=""
                      />
                      <div className="product-action" >
                        <button className="btn btn-outline-dark btn-square" onClick={()=>dispatch(cartAction(item.id))}>
                          <i className="fa fa-shopping-cart"></i>
                        </button>
                        {/* <a className="btn btn-outline-dark btn-square" href="#home">
                          <i className="far fa-heart"></i>
                        </a>
                        <a className="btn btn-outline-dark btn-square" href="#home">
                          <i className="fa fa-sync-alt"></i>
                        </a>
                        <a className="btn btn-outline-dark btn-square" href="#home">
                          <i className="fa fa-search"></i>
                        </a> */}
                      </div>
                    </div>
                    <div className="text-center py-4">
                      <a
                        className="h6 text-decoration-none text-truncate"
                        href="#home"
                      >
                        {item.title}
                      </a>
                      <div className="d-flex align-items-center justify-content-center mt-2">
                        <h5 className="text-line">&#8377;{item.price}</h5>
                        <h6 className="text-muted ml-2">
                          <del></del>
                        </h6>
                      </div>
                      <div className="d-flex align-items-center justify-content-center mb-1">
                        <small className="fa fa-star text-primary mr-1"></small>
                        <small className="fa fa-star text-primary mr-1"></small>
                        <small className="fa fa-star text-primary mr-1"></small>
                        <small className="fa fa-star text-primary mr-1"></small>
                        <small className="fa fa-star text-primary mr-1"></small>
                        <small>(99)</small>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }) : ''
          }


        </div>
      </div>
    </>
  );
}

export default Products;
