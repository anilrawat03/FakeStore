import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LoadProductsRequestAction } from "../store/products/productsactioncreater";
const Products = () => {
    const dispatch = useDispatch();
    const [productlist, setproductlist] = useState();

    useEffect(() => {
        console.log("Products==>");
        dispatch(LoadProductsRequestAction());
    }, [])
    var productlist_ = useSelector(x => x.ProductReducer.productlist);
    console.log("productlist_==>",productlist_)
    if (!productlist_) {
        return;
    }

    console.log("productlist_==>",productlist_)
    return (<>
        {
            productlist_.map((item, index) =>
            (
                <div key={index}>
                    <Link to={`/productdetail/${item.id}`}>
                        <h2>{item.title} ({item.category})</h2>
                        <img src={item.image} style={{ height: 200, width: 200 }} />
                        <span>{item.description}</span>
                        <b>{item.price}</b>
                    </Link>

                </div>
            ))
        }
    </>);
}

export default Products;