import { LoadProductDetails, LoadProducts,LoadProductsRequest, RequestProductDetails } from './productsactiontype';
export const  LoadProductAction=(data)=>{
return {
    type:LoadProducts,
    payload:data
}}

export const LoadProductsRequestAction=()=>{
return {
    type:LoadProductsRequest
}
}
export const  RequestProductDetailsAction=(Id)=>{
    return {
        type:RequestProductDetails,
        payload:Id
    }
    }
export const LoadProductsDetailsAction=(data)=>{
    return {
        type:LoadProductDetails,
        payload:data
    }
    }