import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import Order from '../Order/Order';
import './Restaurant.css';

const Restaurant = () => {
    const [foods, setFoods] = useState([]);
    const [order, setOrder] = useState([]);
    const [randomOrder, setRandomOrder] = useState([]);
    //console.log(order)

    useEffect(() => {
        fetch('foods.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])

    const handleAddToOrder = (food) => {
        const newOrder = [...order, food];
        setOrder(newOrder);
    }

    //random food selection
    const handleAddToRandom = () => {
        const random = Math.floor(Math.random() * order.length);
        const randomFood = (random, order[random])

        try {
            setRandomOrder(randomFood.name)
        }
        catch (err) {
            alert('No Food Selected')
        }
    }

    const handleChooseAgain = () => {
        setOrder([]);
        setRandomOrder([])
    }

    return (
        <div className='restaurant-container'>
            <div>
                <h2>Food Menu</h2>
                <div className='menu-container'>
                    {
                        foods.map(food => <Food food={food} key={food.id} handleAddToOrder={handleAddToOrder}></Food>)
                    }
                </div>
            </div>
            <div className='order-container'>
                <h2>Your Order</h2>
                <div>
                    {
                        order.map(item => <Order key={item.id} item={item}></Order>)
                    }
                </div>
                <button className='btn-select' onClick={() => handleAddToRandom()}>CHOOSE 1 FOR ME</button><br />
                <button className='btn-remove' onClick={() => handleChooseAgain()}>CHOOSE AGAIN</button>
                <p className='bg-success text-center mt-5'>{randomOrder}</p>
            </div>
        </div>
    );
};

export default Restaurant;