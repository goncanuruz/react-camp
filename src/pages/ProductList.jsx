import React,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { Button, Icon, Menu, Table } from 'semantic-ui-react'
import ProductService from '../services/productService'
import { addToCardt } from '../store/actions/cartActions';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export default function ProductList() {

  const dispatch = useDispatch()

  const [products, setProducts] = useState([])
  useEffect(()=>{
    let productService=new ProductService();
    productService.getProducts().then(result=>setProducts(result.data.data));
  },[])

  const handleAddToCart=(product)=>{
    dispatch(addToCardt(product));
    toast.success(`Sepete eklendi!`)
  }

  return (
    <div>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Product Name</Table.HeaderCell>
            <Table.HeaderCell>Stock</Table.HeaderCell>
            <Table.HeaderCell>Unit Price</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
            products.map(product => (
              <Table.Row key={product.productId}>
                <Table.Cell>
                <Link to={`/products/${product.productId}`}>
                {product.productName}
                </Link>
                  </Table.Cell>
                <Table.Cell>{product.unitsInStock}</Table.Cell>
                <Table.Cell>{product.unitPrice}</Table.Cell>
                <Table.Cell>
                  <Button onClick={()=>handleAddToCart(product)}>
                    Sepete Ekle
                    </Button>
                  </Table.Cell>
              </Table.Row>
            ))
          }

        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='3'>
              <Menu floated='right' pagination>
                <Menu.Item as='a' icon>
                  <Icon name='chevron left' />
                </Menu.Item>
                <Menu.Item as='a'>1</Menu.Item>
                <Menu.Item as='a'>2</Menu.Item>
                <Menu.Item as='a'>3</Menu.Item>
                <Menu.Item as='a'>4</Menu.Item>
                <Menu.Item as='a' icon>
                  <Icon name='chevron right' />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  )
}
