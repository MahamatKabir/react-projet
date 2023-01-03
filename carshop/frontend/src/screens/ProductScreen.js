import React from 'react';
import {Link} from 'react-router-dom'
import {Row, Col ,Image, ListGroup} from 'react-bootstrap'
import products from '../products'

const ProductScreen = ({match}) => {
    const product = products.find((p) => p._id === match.params._id)
    return (
    <>
      <Link className='btn btn-dark my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
            <Image src={product.image} alt={product.name} />
        </Col>
        <Col md={3}>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h2>{product.name}</h2>
                </ListGroup.Item>
            </ListGroup>
        </Col>
      </Row>
    </>
    )
}

export default ProductScreen;