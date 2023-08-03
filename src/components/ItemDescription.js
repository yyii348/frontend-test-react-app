import React, { useEffect, useState } from 'react'; 
import './ItemDescription.css';

function ItemDescription(props) {
    const [item, setItem] = useState([]);
    const [itemSizeOption, setItemSizeOption] = useState([]);
    const [selectedItemSize, setSelectedItemSize] = useState([]);
    const [cartItem, setCartItem] = useState([]);
    const [cartItemCount, setCartItemCount] = useState(0);

    useEffect(() => {
        async function getItemApi() {
            await fetch("https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product")
            .then((response) => response.json())
            .then((json) => {
                setItem(json);
                setItemSizeOption(json.sizeOptions);
            })
        }

        getItemApi();
        }, []);

    
    const handleSizeChange = (target) => {
        setSelectedItemSize(target);
        console.log(selectedItemSize);
    }

    const handleAddtoCart = (selectedSize, item) => {
        if(!selectedSize?.length) {
            alert("Please select product size");
        } 
        else {
            let existingItem = cartItem.find((items) => items.id === item.id + selectedSize);
            if(existingItem) {
                setCartItem(cartItem.map(existItem => {
                    if(existItem.id === item.id + selectedSize) {
                        return {...existItem, count : existItem.count + 1};
                    } else {
                        return existItem;
                    }
                }))
            } else {
                const addItem = {
                    itemId: item.id, 
                    id: item.id + selectedSize,
                    title: item.title,
                    price: item.price,
                    imageURL: item.imageURL,
                    size: selectedSize,
                    count: 1
                }
                setCartItem([...cartItem, addItem]);
            }
            setCartItemCount(cartItemCount+1);
        }
        console.log(cartItemCount);
        console.log(cartItem);
        props.onClick(cartItemCount, cartItem);
    }

    return (
        <div className="Item-details">
            <img src={item.imageURL} alt='Logo' />
            <div className='Item-description'> 
                <h1>{item.title}</h1>

                <h2>${item.price}</h2>

                <p>{item.description}</p>

                <h3>SIZE<span className='inline-word'>*</span></h3>

                <div className="Item-size">
                    {itemSizeOption.map((item) => (
                        <button name="itemSize" key={item.id} value={item.label} onClick={()=>handleSizeChange(item.label)}> {item.label} </button>
                    ))}
                    
                </div>

                <div className='add-cart'>
                    <button className="add-to-cart" onClick={()=>handleAddtoCart(selectedItemSize, item)}> ADD TO CART </button>
                </div>
            </div>
        </div>
    )
}

export default ItemDescription