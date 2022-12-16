import {useDispatch} from "react-redux"
import { addItem } from "../../store/cart";
import { like } from "../../store/produce";

function ProduceDetails({ produce }) {
  const cartItem = {};

  const dispatch = useDispatch()

  const addToCart = (e) => {
    e.preventDefault()
    dispatch(addItem(produce.id))
  }

  const handleLike = (e) => {
    e.preventDefault()
    dispatch(like(produce.id))
  }

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produce.liked ? " selected" : "")}
          onClick={handleLike}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          className={"plus-button" + (cartItem ? " selected" : "")}
          onClick={addToCart}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;