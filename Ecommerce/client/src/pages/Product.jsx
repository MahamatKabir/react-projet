import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import{useEffect,useState} from "react";
import {publicRequest} from "../requestMethods";
import {addProduct} from "../redux/cartRedux";
import {useDispatch} from "react-redux";



const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  background-color:#6931c2;
  opacity:0.8;

  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 90%;
  height: 70vh;
  border-radius:50%;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  color: white;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 900;
  letter-spacing:5px;
`;

const Desc = styled.p`
  margin: 20px 0px;
  font-size:20px;
  color:black;
  font-weight:bold;
`;

const Price = styled.span`
  font-weight: 600;
  font-size: 40px;
  color:white;
  letter-spacing:5px; 
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
  font-size: 40px;
  font-weight: 700;
  
`;

const FilterColor = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 10px 10px 0px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
  width:80px;
  color:black;
 
`;

const FilterSizeOption = styled.option`
  color:white;
  background-color:black;
`;

const AddContainer = styled.div`
  margin-top: 40px;
  position:relative;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 50px;
`;

const Amount = styled.span`
  width: 30px;
  height: 25px;
  border-radius: 20px;
  border: 10px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: black;
  cursor: pointer;
  font-weight: 900;
  color: white;

  &:hover {
    background-color: black;
    color:red;
  }
`;
const Buttone = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 900;
  color: black;

  &:hover {
    background-color: black;
    color:red;
    border-radius: 5%;
  }
`;
const Hr = styled.hr`

  margin-top: 20px;
  border-raduis:50%;
  border:10px double white
  
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
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      }catch{}
    };
    getProduct();
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
      addProduct({...product,quantity,color,size})
      );
 }


  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>{product.price} TL</Price>
          <Hr />
          <FilterContainer>
            <Filter>
              <FilterTitle>Renk</FilterTitle>
              {product.color?.map((c) => (
                 <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Beden</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                       <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
                 
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("dec")}/>
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")}/>
            </AmountContainer>
            <Button onClick={handleClick}>SEPETE EKLE</Button>
            <Buttone onClick={handleClick}>HEMEN AL</Buttone>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
