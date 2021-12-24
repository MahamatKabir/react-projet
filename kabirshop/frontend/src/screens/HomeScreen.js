import React, { useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Row,Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import Slider from '../components/Slider'
import { listProducts } from '../actions/productActions'
import Meta from '../components/Meta'
import Categories from '../components/Categories';
import "../index.css"

//import axios from 'axios'
//import products from '../products'

const HomeScreen = ({ match }) => {
    const keyword = match.params.keyword

    const pageNumber = match.params.pageNumber || 1

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
        <h1 className="titre">ÜRÜN KATEGORİLERİ</h1>
        <Categories/>
        
        <h1 className="titre">SİZİN İÇİN SEÇTİKLERİMİZ</h1>
        {loading ? <Loader/> : error ? <Message variant='danger'>{Error}</Message> :
    <Row>
        {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product}/>
            </Col>
        ))}
    </Row>
    
        }
        {/*<Paginate
            pages={pageNumber}
            page={pageNumber}
            keyword={keyword ? keyword : ''}
        />*/}
        
            
        </>
    )
}

export default HomeScreen
