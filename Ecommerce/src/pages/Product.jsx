import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import{useEffect,useState} from "react";
import {publicRequest} from "../requestMethode";
import {addProduct} from "../redux/cartRedux";
import {useDispatch} from "react-redux";


const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product,setProduct] = useState({});
  const [quantity,setQuantity] = useState(1);
  const [color,setColor] = useState("null");
  const [size,setSize] = useState("null");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () =>{
      try{
        const res = publicRequest
      }catch{}
    }
  },[id])

 const handleQuantity = (type) => {
   if(type === "dec"){
     quantity>1 && setQuantity(quantity-1);
   }else {
     setQuantity(quantity +1);
   }
 }
 const handleClick = () =>{
    dispatch(
      addProduct({product,quantity,color,size})
      );
 }


  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png" />
        </ImgContainer>
        <InfoContainer>
          <Title>best</Title>
          <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            In ab voluptates recusandae repudiandae provident cum quibusdam, quod odit numquam nulla nostrum omnis officiis eveniet nihil harum perferendis impedit veniam laudantium!</Desc>
          <Price>$ 54</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
             
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize >
                  <FilterSizeOption >40</FilterSizeOption>
                
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("dec")}/>
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")}/>
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
