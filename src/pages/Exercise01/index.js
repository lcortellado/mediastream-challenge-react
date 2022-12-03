/**
 * Exercise 01: The Retro Movie Store
 * Implement a shopping cart with the next features for the Movie Store that is selling retro dvds:
 * 1. Add a movie to the cart
 * 2. Increment or decrement the quantity of movie copies. If quantity is equal to 0, the movie must be removed from the cart
 * 3. Calculate and show the total cost of your cart. Ex: Total: $150
 * 4. Apply discount rules. You have an array of offers with discounts depending of the combination of movie you have in your cart.
 * You have to apply all discounts in the rules array (discountRules).
 * Ex: If m: [1, 2, 3], it means the discount will be applied to the total when the cart has all that products in only.
 * 
 * You can modify all the code, this component isn't well designed intentionally. You can redesign it as you need.
 */

import CarItem from '../../components/CardsItem'
import MovieList from '../../components/MovieList'
import { useCart } from '../../hooks/useCart'
import { movies } from '../../Utils/movies'
import './assets/styles.css'

export default function Exercise01 () {
  
  const {handleAddToCart, handleRemoveItemToCart, handleAddQuantity, carts, getTotal, getDiscount} = useCart()

  return (
    <section className="exercise01">
      <div className="movies__list">
        <ul>
          {movies.map(movie => (
            <MovieList 
            key={movie.id}
            movieItem={movie}
            handleAddToCart={handleAddToCart}
            />
          ))}
        </ul>
      </div>
      <div className="movies__cart">
        <ul>
          {carts.map(cartItem => (
            <CarItem 
            key={cartItem.id}
            cartItem={cartItem}
             onDecrementQuantity={handleRemoveItemToCart}
              onIncrementQuantity={handleAddQuantity}
            />
          ))}
        </ul>
        <div className="movies__cart-total">
          <p>Total: ${getTotal()}</p>
             <h4 className='discount-info'>Discount: {getDiscount()}</h4>
        </div>
      </div>
    </section>
  )
} 