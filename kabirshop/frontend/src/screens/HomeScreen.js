import React, { useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Row,Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Slider from '../components/Slider'
import { listProducts } from '../actions/productActions'
import Meta from '../components/Meta'
//import axios from 'axios'
//import products from '../products'

const HomeScreen = ({ match }) => {
    const keyword = match.params.keyword
    const dispatch = useDispatch()

    const productList = useSelector((state) => state.productList)
    const {loading,error,products} = productList

    useEffect(()=>{
       dispatch(listProducts(keyword))
    },[dispatch,keyword])

   
    return (
        <>
        <Meta/>
        <Slider/>
            <h1>Latest Products</h1>
        {loading ? <Loader/> : error ? <Message variant='danger'>{Error}</Message> :
        <Row>
        {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product}/>
            </Col>
        ))}
    </Row>
        }
            
        </>
    )
}

export default HomeScreen
