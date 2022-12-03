import './styles.css'
export default function CarItem({cartItem, onIncrementQuantity, onDecrementQuantity}) {
  return (
    <div className="movies__cart-card">
      <li>
              <ul>
                <li>
                  ID: {cartItem.id}
                </li>
                <li>
                  Name: {cartItem.name}
                </li>
                <li>
                  Price: ${cartItem.price}
                </li>
              </ul>
              <div className="movies__cart-card-quantity">
                <button onClick={() => onDecrementQuantity(cartItem.id)}>
                  -
                </button>
                <span>
                  {cartItem.quantity}
                </span>
                <button onClick={() =>  onIncrementQuantity(cartItem.id)}>
                  +
                </button>
              </div>
            </li>
    </div>
  )
}
