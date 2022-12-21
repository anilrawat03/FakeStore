import axios from "axios";
const instance = axios.create({
  baseURL: "https://fakestoreapi.com/"
});
//api.defaults.headers.common = {'Authorization': `Bearer testing`}
//
instance.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});



export const APIUrls =
{
  Auth: {
    login: "/auth/login"
  },
  Products:{
    GetproductList:"/products",
    Productsdetail:"/products/"
  } ,
}

export default instance;
