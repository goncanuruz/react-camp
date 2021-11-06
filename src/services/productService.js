import axios from 'axios'
export default class ProductService{
getProducts(){
    return axios.get("https://localhost:44320/api/Products/getall");
}
}