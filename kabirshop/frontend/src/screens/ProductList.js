import {useSelector} from 'react-redux'
import styled from "styled-components";
import Header from "../components/Header";
import {Row,Col } from 'react-bootstrap'
import Products from '../components/Products';
import Product from '../components/Product';
import Message from '../components/Message'
import Loader from '../components/Loader'
//import Announcement from "../components/Announcement";
//import Products from "./Products";
//import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import { useLocation}  from "react-router";
import { useState } from "react";
//import NavbarSecond from "../components/NavbarSecond"; 

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  const productList = useSelector((state) => state.productList)
  const {loading,error,products} = productList

  return (
    <Container>
     
      <Title>{cat}</Title>
      <FilterContainer> 
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Color</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}> 
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      {loading ? <Loader/> : error ? <Message variant='danger'>{Error}</Message> :
    <Row>
        {products.map((product,cat) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3} >
                <Product product={product}  cat={cat} filters={filters} sort={sort}/>
            </Col>
        ))}
    </Row>
    
        }
     
    </Container>
  );
};

export default ProductList;
