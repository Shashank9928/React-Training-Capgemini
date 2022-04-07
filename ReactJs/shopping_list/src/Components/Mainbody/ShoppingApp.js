import React from "react";
import Nevigation from "../Navigation/Navbar";
import Product from "../Items/Product";
import DATA from "./Data.json";
import { useState } from "react";


const cartList = [];
export default function ShoppingApp() {
    const [count, setCount] = useState(0);
    
    const addToCart = (num) => {
        console.log("Id recive: " + num)
        let present = false;
        for (let i = 0; i < cartList.length; i++) {
            if (cartList[i].id === num) {
                cartList[i].count++;
                present = true;
            }
        }
        if (!present) {
            cartList.push({
                id: num,
                count: 1
            })
            setCount(count + 1);
        }
        console.log(cartList)
    }
    function recuceCount(num) {
        console.log("Id recive: " + num)
        for (let i = 0; i < cartList.length; i++) {
            if (cartList[i].id === num) {
                cartList[i].count--;
                if (cartList[i].count === 0) {
                    cartList.splice(i, 1);
                    setCount(count - 1);
                }
            }
        }
        console.log(cartList)
    }

    function increaseCount(num) {
        console.log("Id recive: " + num)
        for (let i = 0; i < cartList.length; i++) {
            if (cartList[i].id === num) {
                cartList[i].count++;
            }
        }
        console.log(cartList)
    }

    function removeItem(num) {
        console.log("Id recive: " + num)
        for (let i = 0; i < cartList.length; i++) {
            if (cartList[i].id === num) {
                cartList.splice(i, 1);
                setCount(count - 1);
            }
        }
        console.log(cartList)
    }
    return (
        <div>
            <Nevigation
                cartItemsCount={count}
                cartIteams={cartList}
                removeItem={removeItem}
                recuceCount={recuceCount}
                increaseCount={increaseCount}
            />
            <div className="container-fluid">
                <div className="px-lg-5">

                    <div className="row py-5">
                        {
                            DATA.map((item) => {
                                return (
                                    <Product
                                        key={item.id}
                                        id={item.id}
                                        name={item.name}
                                        price={item.price}
                                        image={item.image}
                                        description={item.description}
                                        Cart={addToCart}
                                    />
                                );
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    );
}