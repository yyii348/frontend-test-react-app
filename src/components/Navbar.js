import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Navbar.css';
import CartItem from './CartItem';

function Navbar(props) {
  const cartItems = props.cartItems;
  const itemCount = props.itemCount;
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  const handleClose = () => setShow(false);

  return (
    <div className='nav-bar'>
      <div className='navbar-cart' onClick={handleShow}>My Cart ({itemCount}) </div>

      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Body >
          <CartItem cartItems={cartItems} itemCount={itemCount}/>
        </Offcanvas.Body>
      </Offcanvas>
    </div>


  )
}

export default Navbar