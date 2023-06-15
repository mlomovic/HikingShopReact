import { useContext } from 'react'
import CartContext from '../context/CartContext';

const Cart = () => {

  const { cart, setCart } = useContext(CartContext);

  const removeItem = (idx) => {
    let tempCart = [...cart];
    tempCart.splice(idx, 1);
    setCart([...tempCart]);
  }




  //* Racunanje cene sume artikala u cart-u
  let total = cart.reduce((acc, curVal) => {
    return acc + curVal.qty * curVal.price
  }, 0)


  return (
    <div className="container">

      {
        cart.length > 0
          ?
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Unit Price</th>
                <th scope="col">Qty</th>
                <th scope="col">Price</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, idx) => {
                return (
                  <tr key={item.id}>
                    <th scope="row">{item.id}</th>
                    <td><img src={`http://localhost:3000/${item.img}`} alt="" height="30px" /></td>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                    <td>{item.qty}</td>
                    <td>${item.price * item.qty}</td>
                    <td><button className="btn btn-danger" onClick={() => { removeItem(idx) }}>X</button></td>
                  </tr>
                )
              })}

              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>total</td>
                <td>${total}</td>
                <td><button className="btn btn-danger" onClick={() => { setCart([]) }}>Clear cart</button></td>
              </tr>
            </tbody>
          </table>
          :
          <h4 className='text-center'>There are no products in the cart</h4>
      }


    </div>
  )
}

export default Cart