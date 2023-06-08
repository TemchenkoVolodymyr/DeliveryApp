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
                {data ? data.map(item => <><p>{item.product}</p>
                    <p>{item.price}</p>
                    <img src={item.image} alt="image"/>
                    <p>{count}</p>
                    <button onClick={incCountCart}>+</button>
                    <button onClick={divCountCart}>-</button>
                    <button onClick={() => deleteItem(item.id)}>delete product</button>
                </>) : null}
        </>
    );
};

export default CartItems;