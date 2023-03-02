import React, { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { removefromcartAction } from "../../Redux/Actions/cartAction";

function Cartitem() {
  const [cartList, setCartList] = useState([]);
  console.log(cartList);

  const dispatch=useDispatch()

  const cartData = useSelector((state) => {
    return state.cartlist;
  });

  useEffect(() => {
    const { products } = cartData;
    setCartList(products);
  }, [cartData]);

  return (
    <>
      {cartList.length > 0
        ? cartList.map((item, pos) => {
            return (
              <tr>
                <td className="align-middle">
                  <img
                    className="col-12 col-sm-6 col-md-4 col-lg-3"
                    src={item.image}
                    alt=""
                  />{" "}
                  Product Name
                </td>
                <td className="align-middle">{item.price}</td>
                <td className="align-middle col-2">
                  <div className="input-group quantity mx-auto">
                    <div className="input-group-btn">
                      <button className="btn btn-sm btn-primary btn-minus">
                        <i className="fa fa-minus"></i>
                      </button>
                    </div>
                    <input
                      type="text"
                      className="form-control form-control-sm bg-secondary border-0 text-center"
                    />
                    <div className="input-group-btn">
                      <button className="btn btn-sm btn-primary btn-plus">
                        <i className="fa fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </td>
                <td className="align-middle">$150</td>
                <td className="align-middle">
                  <button className="btn btn-sm btn-danger" onClick={()=>dispatch(removefromcartAction(item.id))}>
                    <i className="fa fa-times"></i>
                  </button>
                </td>
              </tr>
            );
          })
        : ""}
    </>
  );
}

export default Cartitem;
