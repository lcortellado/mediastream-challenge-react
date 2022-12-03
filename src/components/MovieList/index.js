import './styles.css'
export default function MovieList({movieItem, handleAddToCart}) {
  return (
    <div>
      <li className="movies__list-card">
              <ul>
                <li>
                  ID: {movieItem.id}
                </li>
                <li>
                  Name: {movieItem.name}
                </li>
                <li>
                  Price: ${movieItem.price}
                </li>
              </ul>
              <button onClick={() => handleAddToCart(movieItem)}>
                Add to cart
              </button>
            </li>
    </div>
  )
}
