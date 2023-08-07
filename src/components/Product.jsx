import React, { useContext, useState } from 'react';
import './Product.css';
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { card, cardBtn, cardInnerContainer, cardPriceBtn, cardPrice } from '../styles/cardStyles';
import PropTypes from 'prop-types';
import { productsContext } from '../context/ProductsContext';
const Product = ({ prod }) => {
  const { addToCart } = useContext(productsContext);
  const [isFullDescription, setIsFullDescription] = useState(false);
  const handleExpand = () => {
    setIsFullDescription(!isFullDescription);
  };
  return (
    <div key={prod.id} style={card}>
      <h3>{prod.title}</h3>
      <div style={cardInnerContainer}>
        <img src={prod.image} alt={prod.title} style={{ width: '50%' }} />
        <div style={cardPriceBtn}>
          <p style={cardPrice}>${prod.price}</p>
          <button style={cardBtn} onClick={() => addToCart(prod)}>comprar</button>
        </div>
      </div>
      {isFullDescription ? (<span >{prod.description}<MdExpandLess className='icon-more-less' size={27} title='more info' onClick={handleExpand} /></span>) : (<span>{prod.description.slice(0, 40)}...<MdExpandMore className='icon-more-less' size={27} title='less info' onClick={handleExpand} /></span>)}
    </div>);
};

Product.propTypes = {
  prod: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string
  }),
  addCart: PropTypes.func
};
export default Product;