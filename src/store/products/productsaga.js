import api, { APIUrls } from '../../services/api';
import { LoadProductDetails, LoadProductsRequest, RequestProductDetails } from './productsactiontype';
import { call, put, all, takeLatest, actionChannel } from 'redux-saga/effects';
import { LoadProductAction, LoadProductsDetailsAction } from './productsactioncreater';
function* getproductsaga() {
    try {
        const procudtresponse = yield call(api.get, APIUrls.Products.GetproductList);
        if (procudtresponse) {
            console.log("procudtresponse==>", procudtresponse);
            yield put(LoadProductAction(procudtresponse.data));
        }
    }
    catch (error) {

    }
}

function* getproductdetailsbyid({ payload }) {
    console.log(payload);
    try {
        const response = yield call(api.get, APIUrls.Products.Productsdetail + parseInt(payload));
        if (response) {
            console.log("response==>", response);
            yield put(LoadProductsDetailsAction(response.data));
        }
    }
    catch (error) {
    }
}
export default all([
    takeLatest(LoadProductsRequest, getproductsaga),
    takeLatest(RequestProductDetails, getproductdetailsbyid)
]);
