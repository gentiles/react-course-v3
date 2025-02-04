import CartItem from './CartItem'
import { useGlobalAppContext } from './context'
// import cartItems from './data'
const CartContainer = () => {
  const { clearList, resetList, state, cart, totalCost } = useGlobalAppContext()
  const cartArray = Array.from(cart.entries())

  if (cartArray.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
          <button className="btn btn-hipster" onClick={resetList}>
            Reset cart
          </button>
        </header>
      </section>
    )
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cartArray.map((cartItem) => {
          const [id, item] = cartItem
          return <CartItem key={id} {...item} />
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div>
          <h5 className="cart-total">
            total <span>{totalCost}</span>
          </h5>
        </div>

        <button className="btn btn-hipster" onClick={clearList}>
          clear cart
        </button>
      </footer>
    </section>
  )
}

export default CartContainer
