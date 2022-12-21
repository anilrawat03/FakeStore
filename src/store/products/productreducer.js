import { LoadProductDetails, LoadProducts } from './productsactiontype';
const InitialState={
    productdetails:{},
    productlist:[]
}
export const ProductReducer=(state=InitialState,action)=>{
switch (action.type) {
    case LoadProducts:
        return {...state,productlist:action.payload};
        break;
        case LoadProductDetails:
        return {...state,productdetails:action.payload}
        break;
    default:
        return {...state};
        break;
}
}