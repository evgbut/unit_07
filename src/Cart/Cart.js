import React from 'react'

class Cart extends React.Component {
  // This function returns the proper item (apple or lemon) based on its articul identifier.
  // Remember, this identifier is inside the data-key property on the add to cart button,
  // and was passed into this component via props.
  getGoodsFromArr = (art) => {
    for (let i = 0; i < this.props.goods.length; i++) {
      if (art === this.props.goods[i]['articul']) {
        return this.props.goods[i]
      }
    }
  }

  // For every item in the cart, we're rendering a table with dynamic data inserted into it via props.
  // Every time this data changes in parent component (App.js) this element will re-render to reflect the changes.
  renderObj = () => {
    let out = []
    for (let key in this.props.cart) {
      let goods = this.getGoodsFromArr(key)
      out.push(
        <tr key={key}>
          <td>{goods['title']}</td>
          <td>{this.props.cart[key]}</td>
          <td>{this.props.cart[key] * goods['cost']}</td>
        </tr>
      )
    }
    return out
  }

  render() {
    return (
      <div className='cart-field'>
        <h1>Корзина</h1>
        <table>
          <tbody>
            <tr>
              <th>Art</th>
              <th>Count</th>
              <th>Cost</th>
            </tr>
            {/* Call the function that rturns the table. This will return some JSX that will render inside the DOM at this location. */}
            {/* In this case the function returns several <tr></tr> elements with data on your apples and lemons. */}
            {this.renderObj()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Cart
