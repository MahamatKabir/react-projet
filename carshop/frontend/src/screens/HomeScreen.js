import React from 'react'
import products from '../products'
import Product from '../components/Product' 
import {Row,Col} from 'react-bootstrap'

const HomeScreen = () => {
  
  return (
    <div>
        <Row>
        {products.map(product =>(
            <Col sm={10} md={6} lg={4} xl={3}>
            <Product product={product} />
            </Col>
        ))}
        </Row>
        
    </div>
  )
}

export default HomeScreen;
