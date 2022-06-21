import React from 'react'

class Goods extends React.Component {
  render() {
    // This component renders a goods-block div, with an image, title, cost, and articul dynamically inserted into it as props.
    // In a class component, you would access the list of props with 'this.props'.
    return (
      <>
        <div className='goods-block'>
          <img src={this.props.image} alt='' />
          <p>{this.props.title}</p>
          <p>{this.props.cost}</p>
          <button className='add-to-cart' data-key={this.props.articul}>
            Add to cart
          </button>
        </div>
      </>
    )
  }
}

export default Goods
