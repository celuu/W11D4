import { useState, useEffect } from 'react'; 
import { useDispatch } from 'react-redux';
import { incrementItem, decrementItem, removeItem } from '../../store/cart';

function CartItem({ item }) {
  const [count, setCount] = useState(item.count);

  const dispatch = useDispatch()

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  const incrementCount = (e) => {
    e.preventDefault()
    dispatch(incrementItem(item.id))
  }

  const decrementCount = (e) => {
    e.preventDefault()
    if (item.count === 1) {
      dispatch(removeItem(item.id))
    } else {
      dispatch(decrementItem(item.id))
    }
  }

  const clickToDelete = (e) => {
    e.preventDefault()
    dispatch(removeItem(item.id))
  }

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={count}
          onChange={e => setCount(e.target.value)}
        />
        <button
          className="cart-item-button"
          onClick={incrementCount}
        >
          +
        </button>
        <button
          className="cart-item-button"
          onClick={decrementCount}
        >
          -
        </button>
        <button
          className="cart-item-button"
          onClick={clickToDelete}
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;