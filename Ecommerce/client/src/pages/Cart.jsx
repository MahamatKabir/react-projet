import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NavbarSecond from "../components/NavbarSecond";
import { mobile } from "../responsive";
import {useSelector} from "react-redux";
import{useState,useEffect,} from "react";
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "../requestMethods";
import { useHistory } from "react-router";

const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 900;
  text-align: center;
  color:#6931c2;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
 
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 900;
  cursor: pointer;
  letter-spacing:3px;
  dorder-raduis:40% ;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "red"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
  
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
  font-weight:900px;
  color: black;
  
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight:900px;
  ${mobile({ flexDirection: "column" })}
  
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 20px double white;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  background-color:#6931c2;
  color:white
`;

const SummaryTitle = styled.h1`
  font-weight: 900;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
 const cart = useSelector(state => state.cart);
 const [stripeToken,setStripeToken] = useState(null);
 const history = useHistory();

 const onToken = (token) => {
   setStripeToken(token);
 };

 useEffect(() => {
   const makeRequest = async () => {
       try{
         const res = await userRequest.post("/checkout/payment",{
           tokenId: stripeToken.id,
           amount: 500,
         });
          history.push("/success", {
            stripeData:res.data,
            products: cart,});
       }catch{}
   };
   stripeToken && makeRequest();
   
 },[stripeToken,cart.total,history]);

  return (
    <Container>
      <Announcement />
      <Navbar />
      <NavbarSecond/>
      
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
           {cart.products.map((product) => (
            <Product>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Size:</b> {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>
                    {product.price * product.quantity} TL
                  </ProductPrice>
                </PriceDetail>
              </Product>
           ))}
              
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>SİPARİŞ TAMAMLA</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Sipariş Tutarı</SummaryItemText>
              <SummaryItemPrice>{cart.total} TL</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Sepet Toplamı</SummaryItemText>
              <SummaryItemPrice>{cart.total} TL</SummaryItemPrice>
            </SummaryItem>
            
              <StripeCheckout
                name="mahamatkabir shop"
                image="http://avatars.githubusercontent.com/u/1486366?v=4"
                billingAddress
                shippingAddress
                descriptions={`Toplam Tutarın ${cart.total}`}
                amount={cart.total*100}
                token={onToken}
                stripeKey={KEY}>
              </StripeCheckout>
            
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
