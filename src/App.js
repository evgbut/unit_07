import './App.css'
import React from 'react'
import goodsArr from './goods.json'

import Cart from './Cart/Cart'
import Goods from './Goods/Goods'

// For modern code you should almost always use functional components instead of class based components.
// Typically you'll only deal with class components if you're maintatining old code.
// Functional components also allow you to use hooks, which is the foundation of modern react and is
// ABSOLUTELY NECESARY TO LEARN. In most people's opinion, learn functional componenets right away.
class App extends React.Component {
  constructor() {
    super()
    // This is a state, which is basically a temporary storage inside your memory, which persists as long as
    // you stay inside the react app and don't refresh the page.
    // In this case, this state tracks how many total items are in the cart as 'count' (both apples and lemons)
    // and the contents of the cart as 'cart'.
    this.state = {
      cart: {},
      count: 0,
    }
  }

  // event.preventDefault() prevents the default behaviour of the browser. I don't know why it's needed here,
  // It would usually be used on a form submit event to prevent page refresh.
  // How this function works:
  // - Since the click event was added on the entire goods-field element, we are checking if we clicked the button or somethign else.
  //   If the button was clicked (class add-to-cart) then we run the code. If anything else was clicked, we stop the function.
  // - To avoid mutating the cart state directly, a copy is created. Mutating the state directly can sometimes lead to unintended consequences.
  // - event.target.dataset.key reads the data-key property of the clicked button (284s for apple, and 2s8d for lemon). This way we know
  //   exactly which of the two buttons was clicked, and which value to increment. On click, we check if this name exists in the cartTemp
  //   object as a property. If not, we create it and assign a value of 1. If yes, we increment the calue by 1.
  // - Finally, we set the mutated cart as a new state, increment the 'count' (which is total number of items), and update that value in state too.
  addToCart = (event) => {
    event.preventDefault()
    if (!event.target.classList.contains('add-to-cart')) return false
    let cartTemp = this.state.cart
    cartTemp[event.target.dataset.key]
      ? cartTemp[event.target.dataset.key]++
      : (cartTemp[event.target.dataset.key] = 1)
    // cartTemp++;
    this.setState({ cart: cartTemp })
    let count = this.state.count
    count++
    this.setState({ count: count })
  }

  render() {
    // This code looks unfinished. You're not doing anything with the showCart variable after assigning it.
    // You didn't render this variable inside the return statement so right now this code is not doing anything.
    let showCart
    if (this.state.count !== 0) {
      showCart = <Cart cart={this.state.cart} goods={goodsArr} />
    } else {
      showCart = 'Empty'
    }

    // The JSX which you are returning or 'rendering' on the screen. Think of it as HTML, which you are inserting dynamic data into.
    // Each time your state changes, all of the below code will re-render to display the changes.
    return (
      <div className='container'>
        <h1>Cart</h1>
        <div className='goods-field' onClick={this.addToCart}>
          {/* Mapping allows you to render a Goods component for every item in an array, and dynamically pass data into it as 'props'. */}
          {/* The map function iterates over the array, pulls data out of each item, inserts it into the component, and returns the component.  */}
          {/* There are two items in goodsArr, so you'll get two items rendered. */}
          {/* Goods.js defines the JSX that will be rendered by this component, and what props are passed into it. */}
          {goodsArr.map((item) => (
            <Goods
              title={item.title} // This component takes 4 props and a key (which is a unique identifier needed by the ma; function)
              cost={item.cost} // You'll be able to access these props from inside the component with 'this.props.title, this.props.cost, etc'.
              image={item.image}
              articul={item.articul}
              key={item.articul}
            />
          ))}
        </div>
        {/* Cart component which takes 'props', meaning dynamic data to be inserted into component. */}
        {/* The component will re-render when any of these props changes. */}
        {/* Cart.js defines the JSX that will be rendered by this component, and what props are passed into it. */}
        <Cart cart={this.state.cart} goods={goodsArr} />
      </div>
    )
  }
}

export default App
