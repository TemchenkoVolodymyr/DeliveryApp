import React, {useState} from 'react';

const CartItems = (props) => {

    let [count, setCount] = useState(0);

    let {data,deleteItem} = props

    const incCountCart = () => {
        setCount(count + 1)
    }
    const divCountCart = () => {
        if (count !== 0) {
            setCount(count - 1)
        }
    }
    return (
        <>
                <p>{data.product}</p>
                    <p>{data.price}</p>
                    <img src={data.image} alt="image"/>
                    <p>{count}</p>
                    <button onClick={incCountCart}>+</button>
                    <button onClick={divCountCart}>-</button>
                    <button onClick={() => deleteItem(data.id)}>delete product</button>
        </>
    );
};

export default CartItems;