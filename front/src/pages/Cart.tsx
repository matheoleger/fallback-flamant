import { DownloadIcon } from '@chakra-ui/icons';
import * as React from 'react';
import { useState } from 'react';
import "../assets/css/Cart.css";
import item1 from "../assets/img/item1.jpg"
import item2 from "../assets/img/item2.jpg"
import item3 from "../assets/img/item3.png"
import cartIcon from "../assets/img/cartIcon.png"

export const Cart = () => {
     // Stocker les produits dans le panier
     const [cart, setCart] = useState([{name: "table", priceOfOneElement: 25, quantity: 3}, {name: "chaise", priceOfOneElement: 10, quantity: 6}]);
  
     // Gestionnaire d'événement pour ajouter un produit au panier
     const AddToCart = (product: any) => {
       setCart(product);
     };
     
     const totalPrice = 100;
     
    return (
        <div className="cart">
            <div className="CartContainer">
                <div>
                    {
                        cart.map((value, index) => (
                            <div className="Cart-Items" key={index}>
                                <div className="product-information">
                                    <img src={cartIcon}/>
                                    <h1 className="title">{value.name}</h1>
                                </div>
                                <div className="compteur">
                                    <div className="btn">-</div>
                                    <div className="quantity">{value.quantity}</div>
                                    <div className="btn">+</div>
                                </div>
                                <div className="prix">
                                    <div className="total">{value.priceOfOneElement * value.quantity}€</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <hr className="divider"/>
                <div className="Total">
                    <div className="somme">
                        <div className="sommeTotal">Items number : {cart.length}</div>
                        <div className="sommeTotal">Total : {totalPrice}€</div>
                    </div>
                    <button className="button">Checkout <DownloadIcon/></button>
                </div>
            </div>
        </div> 
        )
}