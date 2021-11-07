import axios from 'axios'
export default class ProductService{
getProducts(){
    return axios.get("https://localhost:44320/api/Products/getall");
}
getProductsById(id){
    return axios.get(`https://localhost:44320/api/Products/getbyid?id=${id}`);
}
addProduct(product){
    return axios.post(`https://localhost:44320/api/Products/add`);
}
}