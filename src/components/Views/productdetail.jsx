import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RequestProductDetailsAction } from "../../store/products/productsactioncreater";

const Productdetails = (props) => {
    const { id } = useParams();
    const dispath = useDispatch();
    useEffect(() => {
        dispath(RequestProductDetailsAction(id));
    }, [])

    const product = useSelector(state => state.ProductReducer.productdetails);
    if (!product) return;
    
    return (<>
            <h3>{product.title}</h3>
            <b>{product.category}</b>
            <img src={product.image} style={{ height: 150, width: 150 }} />
            <span>{product.description}</span>
            <b>{product.price}</b><br></br>
            <span>Rating {product?.rating?.rate}</span>
    </>)
}
export default Productdetails;